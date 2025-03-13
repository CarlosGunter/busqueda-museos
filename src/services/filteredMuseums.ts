import { NoParamsError } from "@/errors"

/**
 * 
 * @description Función que llama a la API para obtener la lista de museos filtrados
 * @async
 * @param params URLSearchParams
 * @returns {Promise<unknown | never>} Lista de museos filtrados
 */
export const getFilteredMuseums = async (params: URLSearchParams) => {
  if (!params)
    throw new NoParamsError('Se requieren los parámetros de búsqueda')
  try {
    const res = await fetch(`/api/get-list-museums?${params}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error) /** @todo Temporal, quitar */
  }
}