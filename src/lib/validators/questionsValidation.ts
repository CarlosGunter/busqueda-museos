import { questionsSchema } from '../schemas/questionsSchema'

interface paramsPersonalMuseumsProps {
  /** Disciplinas */
  discipline: FormDataEntryValue | null
  /** Compañeros */
  companions: FormDataEntryValue[] | null
  /** Días */
  days: FormDataEntryValue[] | null
  /** Zona */
  zone: FormDataEntryValue | null
  /** Presupuesto */
  budget: FormDataEntryValue | null
  /** Número de página solicitada */
  page: number
  /** Solicitar número total de páginas, solo recibe el valor 'true' */
  totalPages: boolean
}

/**
 * Función que valida los parámetros de búsqueda
 * @description Esta función se encarga de limpiar los parámetros en falsy para validar la búsqueda que se envían a la API.
 * @param {paramsPersonalMuseumsProps} params Parámetros de búsqueda
 * @returns {Promise<URLSearchParams | never>} Parámetros de búsqueda validados
 * @throws {ZodError} Error de validación
 * @see questionsSchema
 */
export async function paramsValidation (
  params: paramsPersonalMuseumsProps
): Promise<URLSearchParams | never> {
  // Remover los parámetros de búsqueda nulos
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value)
  )
  // Validar los parámetros de búsqueda
  const parsedParams = questionsSchema.safeParse(cleanParams)
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
