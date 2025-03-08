import Toggle from '@components/Toggle'

interface SelectorProps {
  options: string[]
  name: string
  title: string
  isCheckT: boolean
  toggleControl: (isChecked: boolean) => void
  selected: string
  selectControl: (selected: string) => void
}

// Genera un selector de opciones vertical con un toggle y sus opciones
// El toggle habilita/deshabilita el selector
// @param options: string[] - Opciones del selector
// @param name: string - Nombre con el que se recupera el valor del selector
// @param title: string - Texto de la UI que identifica al selector
// @param isCheckT: boolean - Estado del selector (abilitado/desabilitado)
// @param selected: string - Opción seleccionada del selector
export default function Selector({
  options, name, title, isCheckT, selected, toggleControl, selectControl
}: SelectorProps) {

  // Funcion que se ejecuta al cambiar de opción en el selector
  // @param value: string - Valor de la opción seleccionada
  const handleChange = (value: string) => {
    selectControl(value)
    toggleControl(true)
  }
  // Funcion que administra el toggle del selector
  // @param isChecked: boolean - Estado del selector
  const handleCheck = (isChecked: boolean) => {
    toggleControl(isChecked)
    if (isChecked) selectControl(options[0])
      else selectControl('')
  }

  return (
    <div className="grid gap-1">
      <Toggle
        name={name}
        text={title}
        isChecked={isCheckT}
        toggleChange={handleCheck}
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
              checked={selected === option}
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
