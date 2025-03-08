import Toggle from "@components/Toggle"

interface SelectorProps {
  options: string[]
  name: string
  title: string
  isCheckT: boolean
  toggleControl: (isChecked: boolean) => void
  selected: Set<string>
  selectControl: (selected: Set<string>) => void
  defaultSelected: Set<string>
}

// Genera un selector multiple de opciones vertical con un toggle y sus opciones
// El toggle habilita/deshabilita el selector
// @param options: string[] - Opciones del selector
// @param name: string - Nombre con el que se recupera el valor del selector
// @param title: string - Texto de la UI que identifica al selector
// @param isCheckT: boolean - Estado del selector (habilitado/deshabilitado)
// @param toggleControl - Función que administra el toggle del selector
// @param selected: Set<string> - Opciones seleccionadas del selector
// @param selectControl - Función que administra las opciones del selector
// @param defaultSelected: Set<string> - Opciones seleccionadas por defecto
export default function Checkbox({
  options,
  name,
  title,
  isCheckT,
  toggleControl,
  selected,
  selectControl,
  defaultSelected
}: SelectorProps) {

  // Funcion que se ejecuta al cambiar los valores del selector
  // @param value: string - Valor de la opción seleccionada
  const handleChange = (value: string) => {
    let newSelected: Set<string> = new Set(selected)
    // Agega/elimina la opción seleccionada
    isCheckT && newSelected.has(value)
      ? newSelected.delete(value) // Elimina
      : newSelected.add(value) // Agrega
    // Si el toggle esta desactivado, selecciona solo la opción seleccionada
    if (!isCheckT) newSelected = new Set([value])
    // Si no hay opciones seleccionadas, setea las opciones por defecto
    if (newSelected.size === 0) {
      defaultSelected.forEach(value => newSelected.add(value)) // Resetea
      toggleControl(false) // Desactiva el toggle
    // Si hay al mnenos una opción seleccionada, activa el toggle
    } else toggleControl(true)
    // Si todas las opciones estan seleccionadas, desactiva el toggle
    // y evita que el estado tenga todas las opciones ya que
    // seria lo mismo que tener el toggle desactivado
    if (newSelected.size === options.length) {
      toggleControl(false)
      return
    }
    // Actualiza el estado con las opciones seleccionadas
    selectControl(newSelected)
  }

  return (
    <div className="grid gap-1">
      <Toggle
        name={name}
        text={title}
        isChecked={isCheckT}
        toggleChange={toggleControl}
      />
      <div
      className={`grid rounded-xl p-1 bg-gray-900`}
      >
        {options.map((option, i) => (
          <div
          key={option + i}
          className="
            relative h-10 grid place-items-center
            w-full rounded-md cursor-pointer
            hover:bg-gray-700 selector-check-bg
          "
          >
            <input
              type="checkbox"
              name={name}
              checked={isCheckT && selected.has(option)}
              onChange={() => handleChange(option)}
              className="absolute w-full h-full opacity-0"
            />
            <label className="w-full p-2 rounded-md text-center">{option}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
