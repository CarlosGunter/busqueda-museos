import Checkbox from '@/components/form/Checkbox'
import DropDown from '@/components/form/DropDown'
import Selector from '@/components/form/Selector'
import Switch from '@/components/form/Toggle'
import { useSubmitForm } from '@/hooks/useSubmitForm'
import { DAYS_VALUES, DAYS_DEFAULT, THEME_VALUES, ZONE_VALUES } from '@/utils/consts'
import { useState } from 'react'

/**
 * Componente del formulario principal
 * Obtiene los valores: Zona, Tema, Días de servicio, Precio
 * @returns {React.ReactElement} Elemento del formulario
 * @see useFormStore
 * @see useSubmitForm
 * @see Checkbox
 * @see DropDown
 * @see Selector
 * @see Switch
 */
export default function Form (): React.ReactElement {
  // Estado de los días seleccionados
  const [priceToggle, setPriceToggle] = useState<boolean>(false)
  // Custom hook para manejar el evento submit del formulario
  const { isPending, handleSubmit } = useSubmitForm()

  return (
    <div className='grid place-items-center mx-auto max-w-100 p-4 rounded-xl mb-6 md:w-fit md:mx-0'>
      <form onSubmit={handleSubmit} id='form' className='grid gap-5 w-full'>
        <Selector
          options={ZONE_VALUES}
          name='zonas'
          title='Zona'
        />
        <DropDown
          options={THEME_VALUES}
          name='tema'
          title='Tema'
        />
        <Checkbox
          options={DAYS_VALUES}
          name='dias'
          title='Dias'
          defaultSelected={DAYS_DEFAULT}
        />
        <div className='rounded-xl p-3 bg-gradient-to-r from-primary-100 to-primary-200 shadow-md inset-shadow-sm'>
          <Switch
            name='precio'
            text='Solo Gratis'
            isChecked={priceToggle}
            toggleChange={setPriceToggle}
          />
        </div>
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
