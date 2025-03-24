import { GeneralError } from '@/errors'
import { ZodError } from 'zod'
import type { TestMuseo } from '@/types'
import { querySchemaFront } from '@/lib/schemas/searchSchema'

interface getFilteredMuseumsProps {
  /** Valor zona obtenido del Form */
  zona: FormDataEntryValue | null
  /** Valor tema obtenido del Form */
  tema: FormDataEntryValue | null
  /** Valor días obtenido del Form */
  dias: FormDataEntryValue[] | null
  /** Valor precio obtenido del Form */
  precio: string | null
}

/**
 * Función que llama a la API para obtener la lista de museos filtrados
 * @async
 * @param params URLSearchParams
 * @returns {Promise<TestMuseo[]> | never} Lista de museos filtrados
 * @throws {GeneralError} Error al obtener los museos filtrados
 */
export const getFilteredMuseums = async (
  params: getFilteredMuseumsProps
): Promise<TestMuseo[]> | never => {
  try {
    // Remover los parámetros de búsqueda nulos
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([, value]) => value)
    )
    // Validar los parámetros de búsqueda
    const parsedParams = querySchemaFront.parse(cleanParams)
    // Crear los query params de la URL
    const urlParams = new URLSearchParams(
      parsedParams as Record<string, string>
    )
    // Llamada a la API
    const res = await fetch(`/api/get-list-museums?${urlParams.toString()}`)
    // Lanzar un error si no se puede obtener la lista de museos
    if (!res.ok) {
      throw new GeneralError(`Error ${res.status}: ${res.statusText}`)
    }
    // Transformar la respuesta y retornar los datos
    const data = await res.json() as TestMuseo[]
    return data
  } catch (error) {
    if (error instanceof ZodError) {
      throw new GeneralError('Parámetros de búsqueda no válidos')
    }
    throw new GeneralError('Error al obtener los museos filtrados')
  }
}
