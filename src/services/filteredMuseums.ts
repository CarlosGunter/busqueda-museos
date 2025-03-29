import { GeneralError } from '@/errors'
import type { TestMuseo } from '@/types'

interface getFilteredMuseumsProps {
  /** Query params del filtrado */
  params: string
}
interface getFilteredMuseumsResponse {
  /** Lista de museos filtrados */
  results: TestMuseo[]
  /** Informacion de paginación */
  info: {
    /** Página actual */
    page: number
    /** Total de páginas */
    totalPages?: number
  }
}

/**
 * Función que llama a la API para obtener la lista de museos filtrados
 * @async
 * @param params Query params del filtrado
 * @returns {Promise<getFilteredMuseumsResponse> | never} Lista de museos filtrados
 * @throws {GeneralError} Error al obtener los museos filtrados
 */
export const getFilteredMuseums = async (
  { params }: getFilteredMuseumsProps
): Promise<getFilteredMuseumsResponse> | never => {
  try {
    // Llamada a la API
    const res = await fetch(`/api/get-list-museums?${params}`)
    // Lanzar un error si no se puede obtener la lista de museos
    if (!res.ok) {
      throw new GeneralError(`Error ${res.status}: ${res.statusText}`)
    }
    // Transformar la respuesta y retornar los datos
    const data = await res.json() as getFilteredMuseumsResponse
    return data
  } catch (error) {
    throw new GeneralError('Error al obtener los museos filtrados')
  }
}
