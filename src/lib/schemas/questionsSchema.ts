import z from 'zod'
import {
  DISCIPLINE_VALUES,
  COMPANIONS_VALUES,
  DAYS_VALUES,
  ZONE_VALUES,
  BUDGET_VALUES,
  MAX_PAGES
} from '@/lib/consts'

/** Declaracion del esquema de las preguntas al usuario */
export const questionsSchema = z.object({
  /** Diciplinas */
  dicipline: z.enum(DISCIPLINE_VALUES).optional(),
  /** Compañeros */
  companions: z
    .array(z.enum(COMPANIONS_VALUES))
    .transform((value) => value.join(';'))
    .pipe(z.string())
    .optional(),
  /** Días */
  days: z
    .array(z.enum(DAYS_VALUES))
    .transform((value) => value.join(';'))
    .pipe(z.string())
    .optional(),
  /** Zona */
  zone: z.enum(ZONE_VALUES).optional(),
  /** Presupuesto */
  budget: z.enum(BUDGET_VALUES).optional(),
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

/** Declaracion del esquema de los parametros de la API get-personal-museums */
export const personalMuseumsSchema = z.object({
  /** Diciplinas */
  dicipline: z.enum(DISCIPLINE_VALUES).optional(),
  /** Compañeros */
  companions: z
    .string()
    .transform((value) => value.split(';').map((day) => day.trim()))
    .pipe(z.enum(COMPANIONS_VALUES).array())
    .optional(),
  /** Días */
  days: z
    .string()
    .transform((value) => value.split(';').map((day) => day.trim()))
    .pipe(z.enum(DAYS_VALUES).array())
    .optional(),
  /** Zona */
  zone: z.enum(ZONE_VALUES).optional(),
  /** Presupuesto */
  budget: z.enum(BUDGET_VALUES).optional(),
  /** Pagina solicitada */
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
