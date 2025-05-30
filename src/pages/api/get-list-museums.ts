import { data } from '@/lib/data/museums'
import { ZodError } from 'zod'
import { querySchema } from '@/lib/schemas/searchSchema'
import { UnespectedError, UnespectedPage } from '@/errors'
import type { Museum } from '@/types'
import { MAX_RESULTS } from '@/lib/consts'
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
 * Retona un objeto JSON con la lista de museos filtrada
 * y la información de la paginación que se requiera
 * @async
 * @returns {Promise<Response>} Respuesta de la petición
 * @param {getListMuseumsProps} props Propiedades de la petición
 * Puede recibir los parámetros de búsqueda definidos en el esquema de consulta
 * @see {querySchema} Esquema de consulta
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
    const { zona, tema, dias, precio, page, totalPages } = parsedParams
    // Variables para el filtrado de museos
    const filteredData: Museum[] = [] // Lista de museos filtrada
    // Filtrar los museos por los parámetros de búsqueda
    for (const museum of data) {
      // Detener la búsqueda si se alcanza el límite de resultados
      if (
        page !== undefined &&
        totalPages === undefined &&
        filteredData.length >= page * MAX_RESULTS
      ) break

      // Descartar por zona
      if (zona !== undefined && museum.zone !== zona) continue
      // Descartar por tema
      if (tema !== undefined && !museum.theme.includes(tema)) continue
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
      // Agregar museo que cumple con los parámetros de búsqueda
      filteredData.push(museum)
    }

    // Obtener solo los resultados de la página actual
    if (page !== undefined && filteredData.length > 0) {
      // Calcular el rango de resultados para la página solicitada
      const start = ((page - 1) * MAX_RESULTS)
      const end = (page * MAX_RESULTS)
      // Obtener los resultados de la página solicitada
      const paginatedMuseums = filteredData.slice(start, end)
      // Error si la pagina excede el número de resultados
      if (paginatedMuseums.length === 0) {
        throw new UnespectedPage(
          'No se encontraron resultados para la página solicitada'
        )
      }
      // Calcular el número total de páginas
      const numberOfPages = Math.ceil(filteredData.length / MAX_RESULTS)
      // Retornar los resultados paginados y el número total de páginas
      return new Response(JSON.stringify({
        results: paginatedMuseums,
        info: {
          page,
          ...(totalPages !== undefined && { totalPages: numberOfPages })
        }
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Retornar los resultados
    return new Response(JSON.stringify({
      results: filteredData,
      info: { page: 1 }
    }), {
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
    if (error instanceof UnespectedPage) {
      // Retornar error 400 si la página solicitada no existe
      return new Response(JSON.stringify({
        message: 'Página inexistente',
        error: error.message
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
