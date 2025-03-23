import { create } from 'zustand'
import type { TestMuseo } from '@/types'
import { data } from '@/lib/data/test'

/** Props del estado global de la lista de museos */
interface ListStore {
  /** Lista de museos */
  museums: TestMuseo[]
  /** Función que administra la lista de museos */
  setMuseums: (museums: TestMuseo[]) => void
}

/** Declaracion del hook para el estado global de la lista de museos */
export const useListStore = create<ListStore>((set) => ({
  museums: data, // Lista de museos
  setMuseums: (museums) => set({ museums }) // Actualizar lista
}))
