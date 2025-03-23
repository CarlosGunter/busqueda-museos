import Toggle from '@/components/form/Toggle'

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
 * @returns {React.ReactElement} Elemento selector
 * @see Toggle
 */
export default function Selector<T extends readonly string[]> ({
  options,
  name,
  title,
  isCheckT,
  selected,
  toggleControl,
  selectControl
}: SelectorProps<T>): React.ReactElement {
  /**
   * Función que se ejecuta al cambiar de opción en el selector
   * @param value Valor de la opción seleccionada
   */
  const handleChange = (value: string): void => {
    // Selecciona la opción
    selectControl(value) // Selecciona la opción
    toggleControl(true) // Activa el toggle
  }

  return (
    <div className='grid gap-1 p-3 rounded-xl bg-gradient-to-r from-primary-100 to-primary-200 shadow-md inset-shadow-sm'>
      <Toggle
        name={name}
        text={title}
        isChecked={isCheckT}
        toggleChange={toggleControl}
      />
      <div
        className='flex justify-around rounded-xl p-1 bg-bg-200 shadow-inner'
      >
        {options.map((option, i) => (
          <div
            key={`${option}-${i}`}
            className='relative h-10 grid place-items-center w-full rounded-md cursor-pointer hover:bg-bg-300 selector-check-bg'
          >
            <input
              type='radio'
              name={name}
              value={option}
              checked={isCheckT && selected === option}
              onChange={e => handleChange(e.target.value)}
              className='absolute w-full h-full opacity-0'
            />
            <label className='w-full p-2 rounded-md text-center'>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
