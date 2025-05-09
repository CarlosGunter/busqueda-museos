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
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
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
export const ZONE_LABELS = [
  'Norte',
  'Sur',
  'Poniente',
  'Oriente'
] as const

// Formulario de preferencias
export const DISCIPLINE_VALUES = [
  'arte',
  'historia',
  'ciencias_sociales',
  'lengua',
  'matematica',
  'geografia',
  'fisica',
  'biologia'
] as const
export const DISCIPLINE_LABELS = [
  'Arte',
  'Historia',
  'Ciencias Sociales',
  'Lengua',
  'Matemática',
  'Geografía',
  'Física',
  'Biología'
] as const
export const COMPANIONS_VALUES = [
  'infante',
  'adulto_mayor',
  'discapacidad',
  'profesor',
  'estudiante'
] as const
export const COMPANIONS_LABELS = [
  'Infante',
  'Adulto Mayor',
  'Discapacidad',
  'Profesor',
  'Estudiante'
] as const
export const BUDGET_VALUES = [
  'gratis',
  'min0_Max50',
  'min50_Max100',
  'min100_Max250',
  'min250_Max500'
] as const
export const BUDGET_LABELS = [
  'Gratis',
  '$0 - $50',
  '$50 - $100',
  '$100 - $250',
  '$250 - $500'
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
