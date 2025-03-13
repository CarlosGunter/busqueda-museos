import { data } from '@/lib/data/test'
import { z, ZodError } from 'zod'
import { DAYS_VALUES, THEME_VALUES, ZONE_VALUES } from '@/utils/consts'
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
 * @returns {Response} Respuesta de la petición con la lista de museos filtrada
 * @param {getListMuseumsProps} props Propiedades de la petición
 */
export async function GET({ request }: getListMuseumsProps) {
  // Obtener los parámetros de búsqueda
  const { url } = request
  const { searchParams } = new URL(url)
  const zonePrm = searchParams.get('zona')
  const themePrm = searchParams.get('tema')
  const daysPrm = searchParams.get('dias') !== 'all'
    ? searchParams.get('dias')?.split(';') || 'all'
    : 'all'
  const pricePrm = searchParams.get('precio')

  try {
    // Validar los parámetros de búsqueda
    const parsedParams = querySchema.parse({
      zone: zonePrm,
      theme: themePrm,
      days: daysPrm,
      price: pricePrm,
    })
    // Obtener los parámetros de búsqueda después de validarlos
    const { zone, theme, days, price } = parsedParams
    // Filtrar los museos por los parámetros de búsqueda
    const filteredData = data.filter((museum) => {
      // Descartar por zona
      if (zone !== 'all' && museum.zone !== zone) return false
      // Descartar por tema
      if (theme !== 'all' && museum.theme !== theme) return false
      // Descartar por días
      if (days !== 'all' && !days.some(day => museum.days.includes(day)))
        return false
      // Descartar por precio
      if (
        price !== 'all'
        && (price === 'gratis'
          ? museum.price.regular > 0
          : museum.price.regular === 0
        )
      ) return false
      // Museo que cumple con los parámetros de búsqueda
      return true
    })
    // Retornar los resultados
    return new Response(JSON.stringify(filteredData), {
      headers: { 'Content-Type': 'application/json' },
    })
  
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error.errors) /** @todo Temporal, quitar */
      // Retornar error 400 si los parámetros no son válidos
      return new Response(JSON.stringify({
        message: 'Parámetros de búsqueda inválidos',
        error: error.errors,
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }
}

/** Declaración del esquema de consulta */
const querySchema = z.object({
  zone: z.enum(['all', ...ZONE_VALUES]).default('all'),
  theme: z.enum(['all', ...THEME_VALUES]).default('all'),
  days: z.union([
    z.literal('all'),
    z.array(z.enum([...DAYS_VALUES])),
  ]).default('all'),
  price: z.enum(['all', 'gratis']).default('all'),
}).strict()