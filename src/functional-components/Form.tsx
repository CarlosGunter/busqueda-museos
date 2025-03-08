import { useTransition } from 'react'
import { useListStore } from '@store/listStore'
import { useFormStore } from '@store/formStore'
import Checkbox from '@components/Checkbox'
import DropDown from '@components/DropDown'
import Selector from '@components/Selector'
import Switch from '@components/Toggle'

const zoneValues = ['Norte', 'Sur', 'Poniente', 'Oriente']
const themeValues = ['Ciencia', 'Arte', 'Historia', 'Cultura']
const daysValues = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
// Componente del formulario principal
// Obtiene los valores: Zona, Tema, Días de servicio, Precio
function Form() {
  // Estado global del formulario
  const { 
    zoneToggle, zone, theme, daysToggle, days, priceToggle
  } = useFormStore(state => (state))
  // Funciones para modificar el estado global del formulario
  const {
    setZoneToggle, setZone, setTheme, setDaysToggle, setDays, defaultDays, setPriceToggle
  } = useFormStore(state => (state))

  const [isPending, startTransition] = useTransition()
  // Función que maneja el evento submit del formulario
  // @param e: React.FormEvent<HTMLFormElement> - Evento del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition( async () => {
      const formData = new FormData(e.currentTarget)
      // Obtener los valores de los campos del formulario
      const currentZone = formData.get('zonasToggle') === 'on'
        ? formData.get('zonas') || 'all'
        : 'all'
      const currentTheme = formData.get('tema')
      const selectedDays = formData.getAll('dias')
      const currentPrice = formData.get('precioToggle') === 'on'
        ? 'gratis'
        : 'all'
      // Obtener los resultados de la búsqueda llamando a la API
      const params = `zona=${currentZone}&tema=${currentTheme}&precio=${currentPrice}`
      const res = await fetch(`/api/get-list-museums?${params}`)
      const data = await res.json()
      // Actualizar el estado global de la lista de museos
      // con los resultados de la búsqueda
      useListStore.setState({ museums: data })
  
      console.log({ currentZone, currentTheme, selectedDays, currentPrice })
      console.log({ zoneToggle, zone, theme, daysToggle, days, priceToggle })
      // Hacer scroll hacia la lista de museos
      window.location.href = '#list-museums'
    })
  }

  return (
    <div className="grid place-items-center m-auto max-w-80">
      <form onSubmit={handleSubmit} className="grid gap-5 w-full">
        <Selector
          options={zoneValues}
          name='zonas'
          title='Zona'
          isCheckT={zoneToggle}
          toggleControl={setZoneToggle}
          selected={zone}
          selectControl={setZone}
        />
        <DropDown
          options={themeValues}
          name='tema'
          title='Tema'
          selected={theme}
          onChange={setTheme}
        />
        <Checkbox
          options={daysValues}
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