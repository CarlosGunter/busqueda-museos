import { create } from 'zustand'

/** Props del estado global del formulario */
interface FormStoreProps {
  /** Estado del toggle de la zona */
  zoneToggle: boolean
  /** Función que administra el toggle de la zona */
  setZoneToggle: (zoneToggle: boolean) => void
  /** Zona seleccionada */
  zone: string
  /** Función que administra el estado zona */
  setZone: (zone: string) => void
  /** Tema actual */
  theme: string
  /** Función que administra el estado tema */
  setTheme: (theme: string) => void
  /** Estado del toggle de días */
  daysToggle: boolean
  /** Función que administra el toggle de días */
  setDaysToggle: (daysToggle: boolean) => void
  /** Días seleccionados */
  days: Set<string>
  /** Días seleccionados por defecto */
  defaultDays: Set<string>
  /** Función que administra el estado de los días seleccionados */
  setDays: (days: Set<string>) => void
  /** Estado del toggle de precio */
  priceToggle: boolean
  /** Función que administra el toggle de precio */
  setPriceToggle: (priceToggle: boolean) => void
}

/** Declaración del hook del estado global del formulario */
export const useFormStore = create<FormStoreProps>((set) => ({
  zoneToggle: false,
  setZoneToggle: (zoneToggle) => set({ zoneToggle }),
  zone: 'Norte',
  setZone: (zone) => set({ zone }),
  theme: 'all',
  setTheme: (theme) => set({ theme }),
  daysToggle: false,
  setDaysToggle: (daysToggle) => set({ daysToggle }),
  days: new Set<string>(['Domingo']),
  defaultDays: new Set<string>(['Domingo']),
  setDays: (days) => set({ days }),
  resetDays: () => set({ days: new Set<string>(['Domingo']) }),
  priceToggle: false,
  setPriceToggle: (priceToggle) => set({ priceToggle })
}))
