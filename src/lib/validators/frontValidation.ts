import { querySchemaFront } from '../schemas/searchSchema'

interface paramsValidationProps {
  /** Valor zona obtenido del Form */
  zona: FormDataEntryValue | null
  /** Valor tema obtenido del Form */
  tema: FormDataEntryValue | null
  /** Valor días obtenido del Form */
  dias: FormDataEntryValue[] | null
  /** Valor precio obtenido del Form */
  precio: string | null
  /** Pagina de la solicitud */
  page: number
  /** Total */
  totalPages?: boolean
}

export async function paramsValidation (
  params: paramsValidationProps
): Promise<URLSearchParams | never> {
  // Remover los parámetros de búsqueda nulos
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value)
  )
  // Validar los parámetros de búsqueda
  const parsedParams = querySchemaFront.safeParse(cleanParams)
  if (!parsedParams.success) {
    throw parsedParams.error
  }
  // Crear los query params de la URL
  const urlParams = new URLSearchParams(
    parsedParams.data as Record<string, string>
  )
  // Retornar los parámetros de búsqueda
  return urlParams
}
