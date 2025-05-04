import { data } from '@/lib/data/museums'

export const DAYS_VALUES = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
] as const
export const DAYS_LABELS = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
] as const
export const DAYS_DEFAULT = new Set([
  'domingo'
] as const)
export const ZONE_VALUES = [
  'norte',
  'sur',
  'poniente',
  'oriente'
] as const

// Formulario de preferencias
export const DICIPLINE_VALUES = [
  'arte',
  'historia',
  'lengua',
  'matematica',
  'geografia',
  'fisica',
  'quimica',
  'biologia'
] as const
export const ACTIVITIES_VALUES = [
  'libre',
  'Interiores',
  'ambos'
] as const
export const LEARNING_TYPE_VALUES = [
  'visual',
  'auditivo',
  'kinestesico',
  'verbal',
  'interpersonal',
  'intrapersonal'
] as const
export const COMPANIONS_VALUES = [
  'niños',
  'adulto_mayor',
  'ambos'
] as const
export const BUDGET_VALUES = [
  'gratis',
  '0 - 50',
  '50 - 100',
  '100 - 250',
  '250 - 500',
  '+500'
] as const

// Formulario de filtros
export const THEME_VALUES = [
  'Ciencia',
  'Arte',
  'Historia',
  'Cultura'
] as const

export const TOTAL_MUSEUMS = data.length
export const MAX_RESULTS = 10
export const MAX_PAGES = Math.ceil(TOTAL_MUSEUMS / MAX_RESULTS)
