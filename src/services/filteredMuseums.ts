import { NoParamsError } from "@/errors"

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
 * @returns {Promise<unknown | never>} Lista de museos filtrados
 */
export const getFilteredMuseums = async (params: getFilteredMuseumsProps) => {
  try {
    // Validar los parámetros de búsqueda
    const urlParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value) urlParams.append(key, value)
    })
    const res = await fetch(`/api/get-list-museums?${urlParams}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error) /** @todo Temporal, quitar */
  }
}