import { data } from '@/lib/data/test'
import { z, ZodError } from 'zod'
import { DAYS_VALUES, THEME_VALUES, ZONE_VALUES } from '@/utils/consts'
import { UnespectedError } from '@/errors'
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
  console.log(url) /** @todo Temporal, quitar */
  try {
    // Validar los parámetros de búsqueda
    const parsedParams = querySchema.parse(params)
    // Obtener los parámetros de búsqueda después de validarlos
    const { zona, tema, dias, precio } = parsedParams
    // Filtrar los museos por los parámetros de búsqueda
    const filteredData = data.filter((museum) => {
      // Descartar por zona
      if (zona !== undefined && museum.zone !== zona) return false
      // Descartar por tema
      if (tema !== undefined && museum.theme !== tema) return false
      // Descartar por días
      if (
        dias !== undefined &&
        !dias.some(day => museum.days.includes(day))
      ) return false
      // Descartar por precio
      if (
        precio !== undefined &&
        (precio === 'gratis'
          ? museum.price.regular > 0
          : museum.price.regular === 0
        )
      ) return false
      // Museo que cumple con los parámetros de búsqueda
      return true
    })
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

/** Declaración del esquema de consulta */
const querySchema = z.object({
  zona: z.enum(ZONE_VALUES).optional(),
  tema: z.enum(THEME_VALUES).optional(),
  dias: z
    .string()
    .transform((value) => value.split(';').map((day) => day.trim()))
    .pipe(z.enum(DAYS_VALUES).array())
    .optional(),
  precio: z.literal('gratis').optional()
}).strict()
