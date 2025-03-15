import { create } from 'zustand'

/** Props del estado global del error */
interface ErrorStoreProps {
  /** Estado del error */
  errorState: boolean
  /** Función que actualiza el estado del error */
  setError: (errorState: boolean) => void
}

/** Declaración del estado global del error */
export const useErrorStore = create<ErrorStoreProps>((set) => ({
  errorState: false,
  setError: (errorState) => set({ errorState }),
}))