import z from 'zod'
import {
  DICIPLINE_VALUES,
  ACTIVITIES_VALUES,
  LEARNING_TYPE_VALUES,
  COMPANIONS_VALUES,
  DAYS_VALUES,
  ZONE_VALUES,
  BUDGET_VALUES
} from '@/lib/consts'

/** Declaracion del esquema de las preguntas al usuario */
export const questionsSchema = z.object({
  /** Diciplinas */
  dicipline: z.enum(DICIPLINE_VALUES).optional(),
  /** Actividades */
  activities: z.enum(ACTIVITIES_VALUES).optional(),
  /** Tipo de aprendizaje */
  learningType: z.enum(LEARNING_TYPE_VALUES).optional(),
  /** Compañeros */
  companions: z.enum(COMPANIONS_VALUES).optional(),
  /** Días */
  days: z
    .array(z.enum(DAYS_VALUES))
    .transform((value) => value.join(';'))
    .pipe(z.string())
    .optional(),
  /** Zona */
  zone: z.enum(ZONE_VALUES).optional(),
  /** Presupuesto */
  budget: z.enum(BUDGET_VALUES).optional()
})
