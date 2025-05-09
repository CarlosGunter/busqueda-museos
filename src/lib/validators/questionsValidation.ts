import { questionsSchema } from '../schemas/questionsSchema'

interface paramsPersonalMuseoumsProps {
  /** Diciplinas */
  dicipline: FormDataEntryValue | null
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

export async function paramsValidation (
  params: paramsPersonalMuseoumsProps
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
