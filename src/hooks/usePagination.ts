import { useListStore } from '@/store/listStore'
import { useErrorStore } from '@/store/errorStore'
import { z } from 'zod'
import { getMuseumsService } from '@/services/filteredMuseums'
import { useTransition } from 'react'
import { tryCatch } from '@/lib/helpers/try-catch'

interface usePaginationReturn {
  page: number
  lastPage: number
  goToPage: (newPage: number) => void
  isPending: boolean
}

export function usePagination (): usePaginationReturn {
  const [isPending, startTransition] = useTransition()
  const { page, lastPage, apiUrl, query } = useListStore(store => store)
  const { setPage } = useListStore(state => state)
  const { setError } = useErrorStore(state => state)
  const toPageSchema = z.number().min(1).max(lastPage)

  const goToPage = (newPage: number): void => {
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

      // No incluir el total de paginas en la petición
      if (query.has('totalPages')) {
        newQuery.delete('totalPages')
      }

      // Realizar la petición a la API con los nuevos parámetros
      const { data, error, success } = await tryCatch(getMuseumsService({
        apiUrl,
        params: newQuery.toString()
      }))
      // Manejar el error de la petición
      if (!success || data === null) {
        setError(true)
        console.log('error de la petición', error)
        return
      }

      // Actualizar el estado de la lista de museos y la paginación
      await useListStore.setState({
        museums: data.results,
        page: data.info.page
      })
    })

    // Hacer scroll hacia la lista de museos
    window.location.href = '#list-museums'
  }

  return { page, lastPage, goToPage, isPending }
}
