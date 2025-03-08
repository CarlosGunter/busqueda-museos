import { create } from 'zustand'

interface FormStore {
  zoneToggle: boolean
  setZoneToggle: (zoneToggle: boolean) => void
  zone: string
  setZone: (zone: string) => void
  theme: string
  setTheme: (theme: string) => void
  daysToggle: boolean
  setDaysToggle: (daysToggle: boolean) => void
  days: Set<string>
  defaultDays: Set<string>
  setDays: (days: Set<string>) => void
  priceToggle: boolean
  setPriceToggle: (priceToggle: boolean) => void
}

// Estado global para el formulario
export const useFormStore = create<FormStore>((set) => ({
  zoneToggle: false,
  setZoneToggle: (zoneToggle) => set({ zoneToggle }),
  zone: '',
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
  setPriceToggle: (priceToggle) => set({ priceToggle }),
}))