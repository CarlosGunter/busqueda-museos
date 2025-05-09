import { GeneralError } from '@/errors'
import type { Museum } from '@/types'

interface getMuseumsServiceProps {
  /** URL de la API */
  apiUrl: string
  /** Query params del filtrado */
  params: string
}
interface getMuseumsServiceRes {
  /** Lista de museos filtrados */
  results: Museum[]
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
 * @returns {Promise<getMuseumsServiceRes> | never} Lista de museos filtrados
 * @throws {GeneralError} Error al obtener los museos filtrados
 */
export const getMuseumsService = async (
  { params, apiUrl }: getMuseumsServiceProps
): Promise<getMuseumsServiceRes> | never => {
  // Llamada a la API
  const res = await fetch(`${apiUrl}?${params}`)
  // Lanzar un error si no se puede obtener la lista de museos
  if (!res.ok) {
    throw new GeneralError(`Error ${res.status}: ${res.statusText}`)
  }
  // Transformar la respuesta y retornar los datos
  const data = await res.json() as getMuseumsServiceRes
  return data
}
