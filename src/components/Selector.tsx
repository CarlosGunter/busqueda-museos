import Toggle from '@components/Toggle'
import { useState } from 'react'

interface SelectorProps {
  options: string[]
  name: string
  title: string
}

export default function Selector({ options, name, title }: SelectorProps) {

  // Estado del toggle
  const [toggleState, setToggle] = useState(false)
  // Determina si el checkbox está activado o no
  // Activado -> Activa el selector
  // Desactivado -> Desactiva el selector
  const toggleChange = () => { setToggle(state => !state) }

  return (
    <div className="grid gap-1">
      <Toggle name={`${name}Toggle`} text={title} change={toggleChange} />
      <div
      className={`flex justify-around rounded-xl p-1
        ${toggleState ? 'bg-gray-900' : 'hidden'}`}
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
              disabled={!toggleState}
              className="absolute w-full h-full opacity-0"
            />
            <label className="w-full p-2 rounded-md text-center">{option}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
