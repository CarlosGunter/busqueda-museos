import { GeneralError } from "@/errors"
import type { TestMuseo } from "@/types"

interface getFilteredMuseumsProps {
  /** Valor zona obtenido del Form */
  zona: string | undefined
  /** Valor tema obtenido del Form */
  tema: string | undefined
  /** Valor días obtenido del Form */
  dias: string | undefined
  /** Valor precio obtenido del Form */
  precio: string | undefined
}

/**
 * Función que llama a la API para obtener la lista de museos filtrados
 * @async
 * @param params URLSearchParams
 * @returns {Promise<TestMuseo | never>} Lista de museos filtrados
 * @throws {GeneralError} Error al obtener los museos filtrados
 */
export const getFilteredMuseums = async (params: getFilteredMuseumsProps) => {
  try {
    // Crear los query params de la URL
    const urlParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value) urlParams.append(key, value)
    })
    // Llamada a la API
    const res = await fetch(`/api/get-list-museums?${urlParams}`)
    // Lanzar un error si no se puede obtener la lista de museos
    if (!res.ok)
      throw new GeneralError(`Error ${res.status}: ${res.statusText}`)
    // Transformar la respuesta y retornar los datos
    const data = await res.json() as TestMuseo[]
    return data

  } catch (error) {
    // console.log(error) /** @todo Temporal, quitar */
    throw new GeneralError('Error al obtener los museos filtrados')
  }
}