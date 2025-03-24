import { z } from 'zod'
import { DAYS_VALUES, THEME_VALUES, ZONE_VALUES } from '@/utils/consts'

/** Declaración del esquema de consulta Backend */
export const querySchema = z.object({
  zona: z.enum(ZONE_VALUES).optional(),
  tema: z.enum(THEME_VALUES).optional(),
  dias: z
    .string()
    .transform((value) => value.split(';').map((day) => day.trim()))
    .pipe(z.enum(DAYS_VALUES).array())
    .optional(),
  precio: z.literal('gratis').optional()
}).strict()

/** Declaración del esquema de consulta Frontend */
export const querySchemaFront = z.object({
  zona: z.enum(ZONE_VALUES).optional(),
  tema: z.enum(THEME_VALUES).optional(),
  dias: z
    .array(z.enum(DAYS_VALUES))
    .transform((value) => value.join(';'))
    .pipe(z.string())
    .optional(),
  precio: z.literal('gratis').optional()
}).strict()
