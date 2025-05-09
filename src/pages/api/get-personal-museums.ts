import { data } from '@/lib/data/museums'
import {
  COMPANIONS_RULES,
  DICIPLINE_RULES,
  ZONE_RULES,
  BUDGET_RULES
} from '@/lib/data/rules-inference'
import { MAX_RESULTS } from '@/lib/consts'
import { personalMuseumsSchema } from '@/lib/schemas/questionsSchema'
import { ZodError } from 'zod'
import type { Museum } from '@/types'
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
 * @param {Request} props.request Petición de la API
 * Puede recibir los parámetros de búsqueda definidos en el esquema de consulta
 * @see {querySchema} Esquema de consulta
 */
export async function GET ({ request }: getListMuseumsProps): Promise<Response> {
  // Obtener los parámetros de búsqueda
  const { url } = request
  const { searchParams } = new URL(url)
  const params = Object.fromEntries(searchParams.entries())

  // Validar los parámetros de búsqueda
  const parsedParams = personalMuseumsSchema.safeParse(params)
  if (!parsedParams.success) {
    const error = parsedParams.error as ZodError
    // Si la validación falla, devolver un error 400
    return new Response(JSON.stringify({
      errors: error.flatten()
    }), { status: 400 })
  }

  // Obtener los parámetros de búsqueda después de validarlos
  const {
    dicipline,
    activities,
    companions,
    days,
    zone,
    budget,
    page,
    totalPages
  } = parsedParams.data

  // MOTOR DE INFERENCIA
  const filteredData: Museum[] = []
  for (const museum of data) {
    // Descartar por diciplina
    if (
      dicipline !== undefined &&
      !museum.theme.some(theme => DICIPLINE_RULES[dicipline].has(theme))
    ) continue

    // Descartar por compañeros
    if (
      companions !== undefined &&
      museum.price.regular > 0 &&
      museum.price.promo !== undefined &&
      companions.some(companion => {
        const rule = COMPANIONS_RULES[companion]
        return !rule.some(r => museum.price.promo?.description.toLowerCase().includes(r))
      })
    ) continue

    // Descartar por días
    if (days != null && !days.some(day => museum.days.includes(day))) continue

    // Descartar por zona
    if (
      zone !== undefined &&
      !ZONE_RULES[zone].has(museum.zone)
    ) continue

    // Descartar por presupuesto
    if (
      budget !== undefined &&
      !(
        museum.price.regular >= BUDGET_RULES[budget].min &&
        museum.price.regular <= BUDGET_RULES[budget].max
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
      return new Response(
        JSON.stringify({
          errors: {
            message: 'No se encontraron resultados para la página solicitada'
          }
        }),
        { status: 404 }
      )
    }

    // Calcular el número total de páginas
    const numberOfPages = Math.ceil(filteredData.length / MAX_RESULTS)

    // Retornar los resultados paginados con la información de paginación
    return new Response(
      JSON.stringify({
        results: paginatedMuseums,
        info: {
          page,
          ...(totalPages !== undefined && { totalPages: numberOfPages })
        }
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Si no se solicita una página específica, devolver todos los resultados
  return new Response(
    JSON.stringify({ results: filteredData, info: { page: 1 } }),
    { status: 200 }
  )
}
