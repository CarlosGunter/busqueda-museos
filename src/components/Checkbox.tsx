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

export default function Checkbox(
  { options, name, title, isCheckT, toggleControl, selected, selectControl, defaultSelected }: SelectorProps
) {

  // Funcion que se ejecuta al cambiar los valores del selector
  // @param value: string - Valor de la opción seleccionada
  const handleChange = (value: string) => {
    let newSelected: Set<string> = new Set(selected)
    isCheckT && newSelected.has(value)
      ? newSelected.delete(value)
      : newSelected.add(value)
    if (!isCheckT) newSelected = new Set([value])
    if (newSelected.size === 0) {
      toggleControl(false)
      defaultSelected.forEach(value => newSelected.add(value))
    } else toggleControl(true)
    if (newSelected.size === options.length) {
      toggleControl(false)
      return
    }
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
