import { getFilteredMuseums } from "@/services/filteredMuseums"
import { useListStore } from "@/store/listStore"
import { useTransition } from "react"

/**
 * Custom hook para manejar el evento submit del formulario
 * @returns {isPending: boolean}
 * @returns {handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void}
 * @see useListStore
 */
export function useSubmitForm() {
  const [isPending, startTransition] = useTransition()

  /**
   * Función que maneja el evento submit del formulario
   * @param e: - Evento submit del formulario
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Ignora el comportamiento por defecto
    startTransition( async () => {
      const formData = new FormData(e.currentTarget)
      // Obtener los valores de los campos del formulario
      const currentZone = formData.get('zonasToggle') === 'on'
        ? formData.get('zonas')?.toString() || 'all'
        : 'all'
      const currentTheme = formData.get('tema')?.toString() || 'all'
      const selectedDays = formData.get('diasToggle') === 'on'
        ? Array.from(formData.getAll('dias'), day => day.toString()) || []
        : []
      const currentPrice = formData.get('precioToggle') === 'on'
        ? 'gratis'
        : 'all'
      // Crear los query params para la búsqueda
      const params = new URLSearchParams({
        zona: currentZone,
        tema: currentTheme,
        precio: currentPrice,
        dias: selectedDays?.length > 0 ? selectedDays.join(';') : 'all'
      })
      // Obtener los resultados de la búsqueda llamando a la API
      const results = await getFilteredMuseums(params)
      // Actualizar el estado global de la lista de museos
      useListStore.setState({ museums: results })
  
      console.log({ currentZone, currentTheme, selectedDays, currentPrice })
      // Hacer scroll hacia la lista de museos
      window.location.href = '#list-museums'
    })
  }
  // Exponer el estado de la transición y la función
  return { isPending, handleSubmit }
}