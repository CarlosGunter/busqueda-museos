import DropDown from '@/components/form/DropDown'
import Selector from '@/components/form/Selector'
import Checkbox from '@/components/form/Checkbox'
import { DAYS_VALUES, DAYS_DEFAULT } from '@/lib/consts'
import { useTransition } from 'react'

export const ANSWER_1 = [
  'Arte',
  'Historia',
  'Lengua',
  'Matematica',
  'Geografia',
  'Fisica',
  'Quimica',
  'Biologia'
]
export const ANSWER_2 = [
  'Aire libre',
  'Interiores',
  'Ambos'
]
export const ANSWER_3 = [
  'Visual',
  'Auditivo',
  'Kinestesico',
  'Verbal',
  'Interpersonal',
  'Intrapersonal'
]
export const ANSWER_4 = [
  'Niños',
  'Adulto mayor',
  'Ambos'
]

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
      const question1 = formData.get('question1')
      const question2 = formData.get('question2')
      const question3 = formData.get('question3')
      const question4 = formData.get('question4')
      const selectedDays = Array.from(formData.getAll('dias'))
      // Crear un objeto con los parámetros de búsqueda
      const params = {
        question1,
        question2,
        question3,
        question4,
        dias: selectedDays
      }
      console.log(params)
    })
  }

  return { isPending, handleSubmit }
}

export default function Questions (): React.ReactElement {
  const { handleSubmit } = useFormQuestions()

  return (
    <div className='grid place-items-center mx-auto max-w-130 p-4 rounded-xl mb-6 md:w-fit'>
      <form className='grid gap-5 w-full' onSubmit={handleSubmit}>
        <DropDown
          options={ANSWER_1}
          name='question1'
          title='¿Que campo de estudio te gusta más?'
        />
        <Selector
          options={ANSWER_2}
          name='question3'
          title='Selecciona que tipo de actividades prefieres'
        />
        <DropDown
          options={ANSWER_3}
          name='question2'
          title='¿Con que tipo de aprendizaje te identificas más?'
        />
        <Selector
          options={ANSWER_4}
          name='question4'
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
