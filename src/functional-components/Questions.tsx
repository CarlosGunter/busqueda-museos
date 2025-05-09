import DropDown from '@/components/form/DropDown'
import Selector from '@/components/form/Selector'
import Checkbox from '@/components/form/Checkbox'
import { useFormQuestions } from '@/hooks/useQuestionsForm'
import {
  DISCIPLINE_VALUES,
  DISCIPLINE_LABELS,
  COMPANIONS_VALUES,
  COMPANIONS_LABELS,
  DAYS_VALUES,
  DAYS_LABELS,
  DAYS_DEFAULT,
  ZONE_VALUES,
  ZONE_LABELS,
  BUDGET_VALUES,
  BUDGET_LABELS
} from '@/lib/consts'

export default function Questions (): React.ReactElement {
  const { handleSubmit, isPending } = useFormQuestions()

  return (
    <div className='grid place-items-center mx-auto max-w-100 p-4 rounded-xl mb-6 md:w-fit md:mx-0 md:sticky md:top-5 md:z-10 lg:w-full'>
      <form className='grid gap-5 w-full' onSubmit={handleSubmit}>
        <DropDown
          options={DISCIPLINE_VALUES}
          labels={DISCIPLINE_LABELS}
          name='dicipline'
          title='¿Que disciplina de estudio prefieres?'
        />
        <Checkbox
          options={COMPANIONS_VALUES}
          labels={COMPANIONS_LABELS}
          name='companions'
          title='¿Tu o tus acompañantes pertenecen a estos grupos?'
          defaultSelected={new Set([COMPANIONS_VALUES[0]])}
        />
        <Checkbox
          options={DAYS_VALUES}
          labels={DAYS_LABELS}
          name='dias'
          title='Selecciona los días que prefieres hacer tus visitas'
          defaultSelected={DAYS_DEFAULT}
          hiddenOptions
        />
        <Selector
          options={ZONE_VALUES}
          labels={ZONE_LABELS}
          name='zonas'
          title='¿Que zona de la CDMX te gustaría visitar?'
        />
        <DropDown
          options={BUDGET_VALUES}
          labels={BUDGET_LABELS}
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
