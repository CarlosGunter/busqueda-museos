import Toggle from '@/components/form/Toggle'
import { useState } from 'react'

/**
 * Interface para las props del selector
 */
interface SelectorProps<T extends readonly string[]> {
  /** Opciones del selector */
  options: T
  /** Labels de las opciones */
  labels?: readonly string[]
  /** Nombre con el que se recupera el valor del selector */
  name: string
  /** Texto de la UI que identifica al selector */
  title: string
  /** Opción seleccionada por defecto  */
  defaultSelected?: T[number]
}

/**
 * Genera un selector de opciones vertical con un toggle y sus opciones
 * El toggle habilita/deshabilita el selector
 * @param {SelectorProps} props Propiedades del selector
 * @param {T} props.options Opciones del selector
 * @param {string} props.name Nombre del selector
 * @param {string} props.title Texto de la UI que identifica al selector
 * @param {T[number]} [props.defaultSelected] Opción seleccionada por defecto
 * @returns {React.ReactElement} Elemento selector
 * @see Toggle
 */
export default function Selector<T extends readonly string[]> ({
  options,
  labels = options,
  name,
  title,
  defaultSelected = options[0]
}: SelectorProps<T>): React.ReactElement {
  // Estado del selector
  const [isCheckT, toggleControl] = useState<boolean>(false)
  // Estado de la opción seleccionada
  const [selected, selectControl] = useState<T[number]>(defaultSelected)
  /**
   * Función que se ejecuta al cambiar de opción en el selector
   * @param value Valor de la opción seleccionada
   */
  const handleChange = (value: T[number]): void => {
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
            <label
              className='w-full p-2 rounded-md text-center'
              htmlFor={option}
            >
              {labels[i]}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
