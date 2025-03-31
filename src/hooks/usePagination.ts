import { useListStore } from '@/store/listStore'
import { useErrorStore } from '@/store/errorStore'
import { z } from 'zod'
import { getFilteredMuseums } from '@/services/filteredMuseums'
import { useTransition } from 'react'

export function usePagination () {
  const [isPending, startTransition] = useTransition()
  const { page, lastPage, query } = useListStore(store => store)
  const { setPage } = useListStore(state => state)
  const { setError } = useErrorStore(state => state)
  const toPageSchema = z.number().min(1).max(lastPage)

  const goToPage = (newPage: number) => {
    startTransition(async () => {
      // Validar el nuevo número de página
      if (!toPageSchema.safeParse(newPage).success) {
        setError(true)
        return
      }
      // Actualizar el estado de la página actual
      setPage(newPage)
      // Actualizar el estado de la consulta
      const newQuery = new URLSearchParams(query)
      newQuery.set('page', newPage.toString())
      // No incliur el total de paginas en la petición
      if (query.has('totalPages')) {
        newQuery.delete('totalPages')
      }
      try {
        // Realizar la petición a la API con los nuevos parámetros
        const { results, info } = await getFilteredMuseums({
          params: newQuery.toString()
        })
        // Actualizar el estado de la lista de museos y la paginación
        useListStore.setState({
          museums: results,
          page: info.page
        })
        // Hacer scroll hacia la lista de museos
        window.location.href = '#list-museums'
      } catch (error) {
        setError(true)
      }
    })
  }

  return { page, lastPage, goToPage }
}
