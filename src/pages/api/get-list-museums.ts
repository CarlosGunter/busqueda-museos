import { data } from '@/lib/data/test'
// Evitar que astro genere una página estática y reciba parámetros de búsqueda
export const prerender = false

interface getListMuseumsProps {
  params: Record<string, string>
  request: Request
}
// Endpoint para obtener la lista de museos filtrada
export async function GET({ request }: getListMuseumsProps) {
  // Obtener los parámetros de búsqueda
  const { url } = request
  const { searchParams } = new URL(url)
  const zone = searchParams.get('zona')
  const theme = searchParams.get('tema')
  const days = searchParams.get('dias') !== 'all'
    ? searchParams.get('dias')?.split(';') || 'all'
    : 'all'
  const price = searchParams.get('precio')
  // Filtrar los museos por los parámetros de búsqueda
  const filteredData = data.filter((museum) => {
    // Descartar por zona
    if (zone !== 'all' && museum.zone !== zone) return false
    // Descartar por tema
    if (theme !== 'all' && museum.type !== theme) return false
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
  console.log({days})
  // Retornar los resultados
  return new Response(JSON.stringify(filteredData), {
    headers: { 'Content-Type': 'application/json' },
  })
}