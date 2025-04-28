import { useState } from 'react'

/**
 * Interface para las props del dropdown
 */
interface DropDownProps<T extends readonly string[]> {
  /** Opciones del selector */
  options: T
  /** Nombre con el que se recupera el valor del selector */
  name: string
  /** Texto de la UI que identifica al selector */
  title: string
}

/**
 * Genera un selector de opciones
 * @param {DropDownProps} props Propiedades del dropdown
 * @returns {React.ReactElement} Elemento DropDown
 */
export default function DropDown<T extends readonly string[]> ({
  options,
  name,
  title
}: DropDownProps<T>): React.ReactElement {
  // Estado de la opción seleccionada
  const [selected, setSelected] = useState<string>('')

  return (
    <label className='flex justify-between gap-2 p-3 rounded-xl bg-gradient-to-r from-primary-100 to-primary-200 shadow-md inset-shadow-sm text-primary-300'>
      <span className='font-bold flex items-center'>{title}</span>
      <select
        name={name}
        value={selected}
        onChange={e => setSelected(e.target.value)}
        className='relative h-10 rounded-md cursor-pointer bg-primary-100 p-1.5 focus-visible:outline-none'
      >
        <option value=''>Todos</option>
        {options.map(value => (
          <option
            key={value}
            value={value}
          >
            {value}
          </option>
        ))}
      </select>
    </label>
  )
}
