import { useActionState } from 'react'
import { useListStore } from '@store/listStore'

// Componente del formulario principal
// Obtiene los valores:
// - Zona
// - Tema
// - Días de servicio
// - Precio
function Form() {

	// Función que se ejecuta al enviar el formulario
	const handleSubmit = async (prev: string | null, formData: FormData) => {
		// Obtener los valores de los campos del formulario
		const zona = formData.get('zona')
		const tipo = formData.get('tipo')
		const dias = formData.get('dias')
		const precio = formData.get('precio')
		// Obtener los resultados de la búsqueda llamando a la API
		const params = `zona=${zona}&tipo=${tipo}&dias=${dias}&precio=${precio}`
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
		<div className="flex flex-col items-center min-h-max justify-center gap-5">
			<h1 className="flex font-bold">Encuentra tu Museo en CDMX! 🏛️</h1>
			<form action={dispatch} className="grid gap-3">
				<label className="flex justify-between gap-2">Zona
					<select id="zona" name="zona">
						<option value="all">Todas</option>
						<option value="Centro">Centro</option>
						<option value="Norte">Norte</option>
						<option value="Sur">Sur</option>
						<option value="Oeste">Oeste</option>
					</select>
				</label>

				<label className="flex justify-between gap-2">Tema
					<select id="tipo" name="tipo">
						<option value="all">Todos</option>
						<option value="Ciencia">Ciencia</option>
						<option value="Arte">Arte</option>
						<option value="Historia">Historia</option>
						<option value="Cultura">Cultura</option>
					</select>
				</label>

				<label className="flex justify-between gap-2">Días de servicio
					<select name="dias" id="dias">
						<option value="all">Todos</option>
						<option value="lv">Lunes a Viernes</option>
						<option value="vsd">Fines de semana</option>
						<option value="sab">Sábados</option>
						<option value="dom">Domingos</option>
					</select>
				</label>

				<label className="flex justify-between gap-2">Precio
					<select name="precio" id="precio">
						<option value="all">Todos</option>
						<option value="gratis">Gratis</option>
						<option value="pago">Pago</option>
					</select>
				</label>

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

export default Form