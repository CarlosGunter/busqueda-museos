import DropDown from '@/components/form/DropDown'
import Selector from '@/components/form/Selector'
import Checkbox from '@/components/form/Checkbox'
import {
  DICIPLINE_VALUES,
  ACTIVITIES_VALUES,
  LEARNING_TYPE_VALUES,
  COMPANIONS_VALUES,
  DAYS_VALUES,
  DAYS_DEFAULT,
  ZONE_VALUES,
  BUDGET_VALUES
} from '@/lib/consts'
import { useTransition } from 'react'

export function useFormQuestions (): {
  isPending: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void | never
} {
  const [isPending, startTransition] = useTransition()

  /**
   * Función que maneja el evento submit del formulario
   * @param event Evento submit del formulario
   */
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void | never => {
    e.preventDefault()
    startTransition(() => {
      const formData = new FormData(e.currentTarget)
      // Obtener los valores de los campos del formulario
      const diciplineField = formData.get('dicipline')
      const activitiesField = formData.get('activitiesToggle') === 'on'
        ? formData.get('activities')
        : null
      const learningTypeField = formData.get('learningType')
      const companionsField = formData.get('companionsToggle') === 'on'
        ? formData.get('companions')
        : null
      const daysField = formData.get('diasToggle') === 'on'
        ? formData.getAll('dias')
        : null
      // Crear un objeto con los parámetros de búsqueda
      const params = {
        dicipline: diciplineField,
        activities: activitiesField,
        learningType: learningTypeField,
        companions: companionsField,
        days: daysField
      }
      console.log(params)
    })
  }

  return { isPending, handleSubmit }
}

export default function Questions (): React.ReactElement {
  const { handleSubmit } = useFormQuestions()

  return (
    <div className='grid place-items-center mx-auto max-w-100 p-4 rounded-xl mb-6 md:w-fit md:mx-0 md:sticky md:top-5 md:z-10 lg:w-full'>
      <form className='grid gap-5 w-full' onSubmit={handleSubmit}>
        <DropDown
          options={DICIPLINE_VALUES}
          name='dicipline'
          title='¿Que diciplina de estudio te gusta más?'
        />
        <Selector
          options={ACTIVITIES_VALUES}
          name='activities'
          title='Selecciona que tipo de actividades que prefieres'
        />
        <DropDown
          options={LEARNING_TYPE_VALUES}
          name='learningType'
          title='¿Con que tipo de aprendizaje te identificas más?'
        />
        <Selector
          options={COMPANIONS_VALUES}
          name='companions'
          title='¿Viajarás con niños o personas mayores?'
        />
        <Checkbox
          options={DAYS_VALUES}
          name='dias'
          title='Selecciona los días que prefieres hacer tus visitas'
          defaultSelected={DAYS_DEFAULT}
        />

        <button
          className='place-self-center w-min text-primary-100 bg-transparent border border-solid border-prtext-primary-100 hover:bg-prtext-primary-100 hover:text-white hover:border-transparent hover:bg-primary-100 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='submit'
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
