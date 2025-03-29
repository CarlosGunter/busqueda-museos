import { z } from 'zod'
import { DAYS_VALUES, THEME_VALUES, ZONE_VALUES, MAX_PAGES } from '@/utils/consts'

/** Declaración del esquema de consulta a la API */
export const querySchema = z.object({
  /** Zona de búsqueda */
  zona: z.enum(ZONE_VALUES).optional(),
  /** Tema de búsqueda */
  tema: z.enum(THEME_VALUES).optional(),
  /** Arreglo de días seleccionados
   * Se transforma el valor a un arreglo
   * para realizar el filtrado
   */
  dias: z
    .string()
    .transform((value) => value.split(';').map((day) => day.trim()))
    .pipe(z.enum(DAYS_VALUES).array())
    .optional(),
  /** Parámetro de solo entrada gratuito */
  precio: z.literal('gratis').optional(),
  /** Número de página solicitada */
  page: z
    .string()
    .transform((value) => parseInt(value))
    .pipe(z.number().int().min(1).max(MAX_PAGES))
    .optional(),
  /** Solicitar número total de páginas, solo recibe el valor 'true' */
  totalPages: z
    .literal('true')
    .transform(() => true)
    .pipe(z.boolean())
    .optional()
}).strict()

/** Declaración del esquema de consulta Frontend */
export const querySchemaFront = z.object({
  /** Zona de búsqueda */
  zona: z.enum(ZONE_VALUES).optional(),
  /** Tema de búsqueda */
  tema: z.enum(THEME_VALUES).optional(),
  /** Arreglo de días seleccionados
   * Se transforma el valor a un string separado por ';'
   * para enviar a través de la URL
   */
  dias: z
    .array(z.enum(DAYS_VALUES))
    .transform((value) => value.join(';'))
    .pipe(z.string())
    .optional(),
  /** Parámetro de solo entrada gratuito */
  precio: z.literal('gratis').optional(),
  /** Número de página solicitada */
  page: z
    .number()
    .int().min(1).max(MAX_PAGES)
    .transform((value) => value.toString())
    .pipe(z.string())
    .optional(),
  /** Solicitar número total de páginas, solo recibe el valor 'true' */
  totalPages: z
    .boolean()
    .transform((value) => (value ? 'true' : undefined))
    .pipe(z.literal('true'))
    .optional()
}).strict()
