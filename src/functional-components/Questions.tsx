import DropDown from '@/components/form/DropDown'
import Selector from '@/components/form/Selector'
import Checkbox from '@/components/form/Checkbox'
import { useFormQuestions } from '@/hooks/useQuestionsForm'
import {
  DICIPLINE_VALUES,
  COMPANIONS_VALUES,
  DAYS_VALUES,
  DAYS_DEFAULT,
  ZONE_VALUES,
  BUDGET_VALUES
} from '@/lib/consts'

export default function Questions (): React.ReactElement {
  const { handleSubmit, isPending } = useFormQuestions()

  return (
    <div className='grid place-items-center mx-auto max-w-100 p-4 rounded-xl mb-6 md:w-fit md:mx-0 md:sticky md:top-5 md:z-10 lg:w-full'>
      <form className='grid gap-5 w-full' onSubmit={handleSubmit}>
        <DropDown
          options={DICIPLINE_VALUES}
          name='dicipline'
          title='¿Que diciplina de estudio prefieres?'
        />
        <Checkbox
          options={COMPANIONS_VALUES}
          name='companions'
          title='¿Tu o tus acompañantes pertenecen a estos grupos?'
          defaultSelected={new Set([COMPANIONS_VALUES[0]])}
        />
        <Checkbox
          options={DAYS_VALUES}
          name='dias'
          title='Selecciona los días que prefieres hacer tus visitas'
          defaultSelected={DAYS_DEFAULT}
        />
        <Selector
          options={ZONE_VALUES}
          name='zonas'
          title='¿Que zona de la CDMX te gustaría visitar?'
        />
        <DropDown
          options={BUDGET_VALUES}
          name='budget'
          title='¿Cuál es tu presupuesto?'
        />

        <button
          className='place-self-center w-min text-primary-100 bg-transparent border border-solid border-prtext-primary-100 hover:bg-prtext-primary-100 hover:text-white hover:border-transparent hover:bg-primary-100 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='submit'
          disabled={isPending}
        >
          {isPending ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
    </div>
  )
}
