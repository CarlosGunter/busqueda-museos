import { create } from 'zustand'
import type { TestMuseo } from '@/types'

interface ListStore {
  museums: TestMuseo[]
  setMuseums: (museums: TestMuseo[]) => void
}

// Estado global para la lista de museos
export const useListStore = create<ListStore>((set) => ({
  museums: [], // Lista de museos
  setMuseums: (museums) => set({ museums }), // Actualizar lista
}))