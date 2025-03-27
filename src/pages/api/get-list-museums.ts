import { data } from '@/lib/data/test'
import { ZodError } from 'zod'
import { querySchema } from '@/lib/schemas/searchSchema'
import { UnespectedError } from '@/errors'
import type { TestMuseo } from '@/types'
import { MAX_RESULTS } from '@/utils/consts'
// Evitar que astro genere una página estática y reciba parámetros de búsqueda
export const prerender = false

/**
 * Propiedades de la petición get-list-museums
 */
interface getListMuseumsProps {
  /** Petición de la API */
  request: Request
}

/**
 * Endpoint para obtener la lista de museos filtrada
 * @async
 * @returns {Promise<Response>} Respuesta de la petición con la lista de museos filtrada
 * @param {getListMuseumsProps} props Propiedades de la petición
 */
export async function GET ({ request }: getListMuseumsProps): Promise<Response> {
  // Obtener los parámetros de búsqueda
  const { url } = request
  const { searchParams } = new URL(url)
  const params = Object.fromEntries(searchParams.entries())
  try {
    // Validar los parámetros de búsqueda
    const parsedParams = querySchema.parse(params)
    // Obtener los parámetros de búsqueda después de validarlos
    const { zona, tema, dias, precio, page } = parsedParams
    // Variables para el filtrado de museos
    const filteredData: TestMuseo[] = [] // Lista de museos filtrada
    let flag = false // Determina si el muse se agrega a la lista
    let ignoredResults = 0 // Cantidad de resultados válidos
    // Filtrar los museos por los parámetros de búsqueda
    for (const museum of data) {
      // Detener la búsqueda si se alcanza el límite de resultados
      if (page !== undefined && filteredData.length >= MAX_RESULTS) break

      // Descartar por zona
      if (zona !== undefined && museum.zone !== zona) continue
      // Descartar por tema
      if (tema !== undefined && museum.theme !== tema) continue
      // Descartar por días
      if (
        dias !== undefined &&
        !dias.some(day => museum.days.includes(day))
      ) continue
      // Descartar por precio
      if (
        precio !== undefined &&
        (precio === 'gratis'
          ? museum.price.regular > 0
          : museum.price.regular === 0
        )
      ) continue

      // Cambiar el flag a true si está en el rango de resultados
      if (
        page !== undefined &&
        ignoredResults < (page - 1) * MAX_RESULTS
      ) ignoredResults++
      else flag = true
      // Descartar si no está en el rango de resultados
      if (!flag) continue
      // Agregar museo que cumple con los parámetros de búsqueda
      filteredData.push(museum)
    }
    // Retornar los resultados
    return new Response(JSON.stringify(filteredData), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    if (error instanceof ZodError) {
      // Retornar error 400 si los parámetros no son válidos
      return new Response(JSON.stringify({
        message: 'Parámetros de búsqueda inválidos',
        error: error.errors
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }
  // Retornar error 500 si ocurre un error inesperado
  return new Response(JSON.stringify({
    message: 'Error inesperado',
    error: new UnespectedError('Error inesperado')
  }), {
    status: 500
  })
}
