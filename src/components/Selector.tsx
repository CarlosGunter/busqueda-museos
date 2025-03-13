import Toggle from '@/components/Toggle'

/**
 * Interface para las props del selector
 */
interface SelectorProps<T extends readonly string[]> {
  /** Opciones del selector */
  options: T
  /** Nombre con el que se recupera el valor del selector */
  name: string
  /** Texto de la UI que identifica al selector */
  title: string
  /** Estado del selector (habilitado/deshabilitado) */
  isCheckT: boolean
  /** Función que administra el toggle del selector */
  toggleControl: (isChecked: boolean) => void
  /** Opción seleccionada del selector */
  selected: string
  /** Función que administra las opciones del selector */
  selectControl: (selected: string) => void
}

/**
 * Genera un selector de opciones vertical con un toggle y sus opciones
 * El toggle habilita/deshabilita el selector
 * @param {SelectorProps} props Propiedades del selector
 * @returns {JSX.Element} Elemento selector
 * @see Toggle
 */
export default function Selector<T extends readonly string[]>({
  options,
  name,
  title,
  isCheckT,
  selected,
  toggleControl,
  selectControl
}: SelectorProps<T>) {

  /**
   * Función que se ejecuta al cambiar de opción en el selector
   * @param value Valor de la opción seleccionada
   */
  const handleChange = (value: string) => {
    // Si se deselecciona la opción, resetea el selector
    if (selected === value) {
      toggleControl(false) // Desactiva el toggle
      selectControl(options[0]) // Selecciona la primera opción
      return // Sale de la función
    }
    // Selecciona la opción
    selectControl(value) // Selecciona la opción
    toggleControl(true) // Activa el toggle
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
        className={`flex justify-around rounded-xl p-1 bg-gray-900`}
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
              type="radio"
              name={name}
              value={option}
              checked={isCheckT && selected === option}
              onChange={e => handleChange(e.target.value)}
              className="absolute w-full h-full opacity-0"
            />
            <label className="w-full p-2 rounded-md text-center">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
