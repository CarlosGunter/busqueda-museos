import { useFormStore } from '@/store/formStore'
import Checkbox from '@/components/Checkbox'
import DropDown from '@/components/DropDown'
import Selector from '@/components/Selector'
import Switch from '@/components/Toggle'
import { useSubmitForm } from '@/hooks/useSubmitForm'
import { DAYS_VALUES, THEME_VALUES, ZONE_VALUES } from '@/utils/consts'

/**
 * Componente del formulario principal
 * Obtiene los valores: Zona, Tema, Días de servicio, Precio
 * @returns {JSX.Element} Elemento del formulario
 * @see useFormStore
 * @see useSubmitForm
 * @see Checkbox
 * @see DropDown
 * @see Selector
 * @see Switch
 */
function Form() {

  // Estado global del formulario
  const { 
    zoneToggle,
    zone,
    theme,
    daysToggle,
    days,
    priceToggle
  } = useFormStore(state => (state))
  // Funciones para modificar el estado global del formulario
  const {
    setZoneToggle,
    setZone,
    setTheme,
    setDaysToggle,
    setDays,
    defaultDays,
    setPriceToggle
  } = useFormStore(state => (state))
  // Custom hook para manejar el evento submit del formulario
  const { isPending, handleSubmit } = useSubmitForm()

  return (
    <div className="grid place-items-center m-auto max-w-80">
      <form onSubmit={handleSubmit} id='form' className="grid gap-5 w-full">
        <Selector
          options={ZONE_VALUES}
          name='zonas'
          title='Zona'
          isCheckT={zoneToggle}
          toggleControl={setZoneToggle}
          selected={zone}
          selectControl={setZone}
        />
        <DropDown
          options={THEME_VALUES}
          name='tema'
          title='Tema'
          selected={theme}
          onChange={setTheme}
        />
        <Checkbox
          options={DAYS_VALUES}
          name='dias'
          title='Dias'
          isCheckT={daysToggle}
          toggleControl={setDaysToggle}
          selected={days}
          defaultSelected={defaultDays}
          selectControl={setDays}
        />
        <Switch
          name='precio'
          text='Solo Gratis'
          isChecked={priceToggle}
          toggleChange={setPriceToggle}
        />
        <button
          className="place-self-center w-min text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
    </div>
  )
}

export default Form