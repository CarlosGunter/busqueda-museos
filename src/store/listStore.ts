import { create } from 'zustand'
import type { Museum } from '@/types'
import { data } from '@/lib/data/museums'
import { MAX_PAGES, MAX_RESULTS } from '@/lib/consts'

/** Props del estado global de la lista de museos */
interface ListStore {
  /** Lista de museos */
  museums: Museum[]
  /** Función que administra la lista de museos */
  setMuseums: (museums: Museum[]) => void
  /** Página actual */
  page: number
  /** Función que actualiza la página actual */
  setPage: (page: number) => void
  /** Última página disponible respecto a la busqueda actual */
  lastPage: number
  /** Función que actualiza la última página */
  setLastPage: (lastPage: number) => void
  /** Query de busqueda */
  query: URLSearchParams
  /** Función que actualiza la query de busqueda */
  setQuery: (query: URLSearchParams) => void
}

/** Declaracion del hook para el estado global de la lista de museos */
export const useListStore = create<ListStore>((set) => ({
  museums: data.slice(0, MAX_RESULTS), // Lista de museos
  setMuseums: (museums) => set({ museums }), // Actualizar lista
  page: 1, // Página actual
  setPage: (page) => set({ page }), // Actualizar página
  lastPage: MAX_PAGES, // Última página
  setLastPage: (lastPage) => set({ lastPage }), // Actualizar última página
  query: new URLSearchParams(), // Query de busqueda
  setQuery: (query: URLSearchParams) => set({ query }) // Actualizar query
}))
