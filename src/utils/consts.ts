import { data } from '@/lib/data/museums'

export const ZONE_VALUES = [
  'Norte',
  'Sur',
  'Poniente',
  'Oriente'
] as const
export const THEME_VALUES = [
  'Ciencia',
  'Arte',
  'Historia',
  'Cultura'
] as const
export const DAYS_VALUES = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
] as const
export const DAYS_DEFAULT = new Set([
  'Domingo'
] as const)

export const TOTAL_MUSEUMS = data.length
export const MAX_RESULTS = 10
export const MAX_PAGES = Math.ceil(TOTAL_MUSEUMS / MAX_RESULTS)
