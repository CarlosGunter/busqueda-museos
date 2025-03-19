import Toggle from "@/components/Toggle"

/**
 * Interface para las props del checkbox
 */
interface CheckboxProps<T extends readonly string[]> {
  /** Opciones del checkbox */
  options: T
  /** Nombre con el que se recupera el valor del checkbox */
  name: string
  /** Texto de la UI que identifica al checkbox */
  title: string
  /** Estado del checkbox (habilitado/deshabilitado) */
  isCheckT: boolean
  /** Función que administra el toggle del checkbox */
  toggleControl: (isChecked: boolean) => void
  /** Opciones seleccionadas del checkbox */
  selected: Set<string>
  /** Función que administra las opciones del checkbox */
  selectControl: (selected: Set<string>) => void
  /** Opciones seleccionadas por defecto */
  defaultSelected: Set<string>
}

/**
 * Genera un selector multiple de opciones vertical con un toggle
 * El toggle habilita/deshabilita el checkbox
 * @param {CheckboxProps} props Propiedades del checkbox
 * @returns {JSX.Element} Elemento checkbox
 * @see Toggle
 */
export default function Checkbox<T extends readonly string[]>({
  options,
  name,
  title,
  isCheckT,
  toggleControl,
  selected,
  selectControl,
  defaultSelected
}: CheckboxProps<T>) {

  /**
   * Función que se ejecuta al cambiar los valores del checkbox
   * @param value Valor de la opción seleccionada
   */
  const handleChange = (value: string) => {
    let newSelected: Set<string> = new Set(selected)
    // Agrega/elimina la opción seleccionada
    isCheckT && newSelected.has(value)
      ? newSelected.delete(value) // Elimina
      : newSelected.add(value) // Agrega
    // Si el toggle está desactivado, selecciona solo la opción seleccionada
    if (!isCheckT) newSelected = new Set([value])
    // Si no hay opciones seleccionadas, setea las opciones por defecto
    if (newSelected.size === 0) {
      defaultSelected.forEach(value => newSelected.add(value)) // Resetea
      toggleControl(false) // Desactiva el toggle
    // Si hay al menos una opción seleccionada, activa el toggle
    } else toggleControl(true)
    // Si todas las opciones están seleccionadas, desactiva el toggle
    // y evita que el estado tenga todas las opciones ya que
    // sería lo mismo que tener el toggle desactivado
    if (newSelected.size === options.length) {
      toggleControl(false)
      return
    }
    // Actualiza el estado con las opciones seleccionadas
    selectControl(newSelected)
  }

  return (
    <div className="grid gap-1 p-3 rounded-xl bg-gradient-to-r from-primary-100 to-primary-200 shadow-md inset-shadow-sm">
      <Toggle
        name={name}
        text={title}
        isChecked={isCheckT}
        toggleChange={toggleControl}
      />
      <div
      className={`grid rounded-xl p-1 bg-bg-200`}
      >
        {options.map((option, i) => (
          <div
          key={option + i}
          className="relative h-10 grid place-items-center w-full rounded-md cursor-pointer hover:bg-bg-100 selector-check-bg"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
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
