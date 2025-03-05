import { useActionState } from 'react'
import { useListStore } from '@store/listStore'
import Checkbox from '@components/Checkbox'
import DropDown from '@components/DropDown'
import Selector from '@components/Selector'
import Switch from '@components/Toggle'


const zoneValues = ['Norte', 'Sur', 'Poniente', 'Oriente']
const themeValues = ['Ciencia', 'Arte', 'Historia', 'Cultura']
const daysValues = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
// Componente del formulario principal
// Obtiene los valores:
// - Zona
// - Tema
// - Días de servicio
// - Precio
function FormAlt() {

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (prev: string | null, formData: FormData) => {
    // Obtener los valores de los campos del formulario
    const zona = formData.get('zonasToggle') === '1'
      ? formData.get('zonas')
      : 'all'
    // const zonas = formData.get('zonas')
    const tema = formData.get('tema')
    const dias = formData.get('dias-Lunes')
    const precio = formData.get('precio') === '1'
      ? 'gratis'
      : 'all'
    console.log({ zona, tema, dias, precio })
    // Obtener los resultados de la búsqueda llamando a la API
    const params = `zona=${zona}&tema=${tema}&precio=${precio}`
    const res = await fetch(`/api/get-list-museums?${params}`)
    const data = await res.json()
    // Actualizar el estado global con los resultados de la búsqueda		
    useListStore.setState({ museums: data })
    // Direccionar a la página de resultados con los parámetros de búsqueda
    window.location.href = `#list-museums`
    return null
  }
  // Estado del formulario
  const [state, dispatch, isPending] = useActionState(handleSubmit, null)

  return (
    <div className="grid place-items-center m-auto max-w-80">
      
      <form action={dispatch} className="grid gap-5 w-full">
        
        <Selector options={zoneValues} name='zonas' title='Zona' />
        
        <DropDown options={themeValues} name='tema' title='Tema' />

        <Checkbox options={daysValues} name='dias' title='Dias' />

        <Switch name='precio' text='Solo Gratis' />

        <button
        className="place-self-center w-min text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}

export default FormAlt