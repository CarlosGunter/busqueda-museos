/**
 * Interface para las props del toggle
 */
interface SwitchProps {
  /** Nombre con el que se recupera el valor del toggle */
  name: string
  /** Texto de la UI que identifica al toggle */
  text: string
  /** Estado del toggle (habilitado/deshabilitado) */
  isChecked: boolean
  /** Función que administra el toggle */
  toggleChange: (isChecked: boolean) => void
}

/**
 * Genera un toggle con un texto y un switch
 * @param {SwitchProps} props Propiedades del toggle
 * @returns {JSX.Element} Elemento toggle
 */
export default function Switch({
  name,
  text,
  isChecked,
  toggleChange
}: SwitchProps) {

  return (
    <label className="flex justify-between gap-2 cursor-pointer">
      <span className="font-bold text-primary-300">{text}</span>
      <input
        type="checkbox"
        name={name + 'Toggle'}
        checked={isChecked}
        onChange={e => toggleChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="relative w-9 h-5 bg-bg-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-100 peer-checked:border-primary-300 shadow-md" />
    </label>
  )
}
