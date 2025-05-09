import { tryCatch } from '@/lib/helpers/try-catch'
import { paramsValidation } from '@/lib/validators/questionsValidation'
import { useTransition } from 'react'
import { useErrorStore } from '@/store/errorStore'
import { getMuseumsService } from '@/services/filteredMuseums'
import { useListStore } from '@/store/listStore'

export function useFormQuestions (): {
  isPending: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void | never
} {
  const [isPending, startTransition] = useTransition()
  const { setError } = useErrorStore()

  /**
   * Función que maneja el evento submit del formulario
   * @param event Evento submit del formulario
   */
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void | never => {
    e.preventDefault()

    startTransition(async () => {
      const formData = new FormData(e.currentTarget)

      // Obtener los valores de los campos del formulario
      const disciplineField = formData.get('discipline')
      const companionsField = formData.get('companionsToggle') === 'on'
        ? formData.getAll('companions')
        : null
      const daysField = formData.get('daysToggle') === 'on'
        ? formData.getAll('days')
        : null
      const zoneField = formData.get('zoneToggle') === 'on'
        ? formData.get('zone')
        : null
      const budgetField = formData.get('budget')

      // Crear un objeto con los parámetros de búsqueda
      const params = {
        discipline: disciplineField,
        companions: companionsField,
        days: daysField,
        zone: zoneField,
        budget: budgetField,
        page: 1,
        totalPages: true
      }

      // Validar los parámetros de búsqueda
      const {
        data: parsedParams,
        error: validationError,
        success: validatorSuccess
      } = await tryCatch(paramsValidation(params))
      // Manejar el error de validación
      if (!validatorSuccess || parsedParams === null) {
        setError(true)
        console.log('error de validación', validationError)
        return
      }

      // Llamada a la API para obtener los resultados
      const {
        data: results,
        error: apiError,
        success: apiSuccess
      } = await tryCatch(getMuseumsService({
        apiUrl: '/api/get-personal-museums',
        params: parsedParams.toString()
      }))
      // Manejar el error de la API
      if (!apiSuccess || results === null) {
        setError(true)
        console.log('error de la API', apiError)
        return
      }

      // Actualizar el estado global de la lista de museos y su paginación
      await useListStore.setState({
        museums: results.results,
        page: results.info.page,
        lastPage: results.info.totalPages,
        apiUrl: '/api/get-personal-museums',
        query: parsedParams
      })
    })

    // Hacer scroll hacia la lista de museos
    window.location.href = '#list-museums'
  }

  return { isPending, handleSubmit }
}
