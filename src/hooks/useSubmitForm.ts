import { getFilteredMuseums } from '@/services/filteredMuseums'
import { useListStore } from '@/store/listStore'
import { useErrorStore } from '@/store/errorStore'
import { useTransition } from 'react'

/**
 * Custom hook para manejar el evento submit del formulario
 * @returns {isPending: boolean}
 * @returns {handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void}
 * @see useListStore
 */
export function useSubmitForm (): {
  isPending: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
} {
  const [isPending, startTransition] = useTransition()

  /**
   * Función que maneja el evento submit del formulario
   * @param e Evento submit del formulario
   */
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void | never => {
    e.preventDefault() // Ignora el comportamiento por defecto
    startTransition(async () => {
      const formData = new FormData(e.currentTarget)
      // Obtener los valores de los campos del formulario
      const currentZone = formData.get('zonasToggle') === 'on'
        ? formData.get('zonas')
        : null
      const currentTheme = formData.get('tema')
      const selectedDays = formData.get('diasToggle') === 'on'
        ? Array.from(formData.getAll('dias'))
        : null
      const currentPrice = formData.get('precioToggle') === 'on'
        ? 'gratis'
        : null
      // Crear un objeto con los parámetros de búsqueda
      const params = {
        zona: currentZone,
        tema: currentTheme,
        dias: selectedDays,
        precio: currentPrice
      }
      try {
        // Obtener los resultados de la búsqueda llamando a la API
        const { results, info } = await getFilteredMuseums(params)
        // Actualizar el estado global de la lista de museos
        useListStore.setState({ museums: results })
        /** @todo Temporal */
        console.log({ currentZone, currentTheme, selectedDays, currentPrice })
        // Hacer scroll hacia la lista de museos
        window.location.href = '#list-museums'
      } catch (error) {
        // Actualizar el estado global del error
        useErrorStore.setState({ errorState: true })
        // console.log(error) /** @todo Temporal, quitar */
      }
    })
  }
  // Exponer el estado de la transición y la función
  return { isPending, handleSubmit }
}
