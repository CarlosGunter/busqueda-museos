interface DropDownProps {
  options: string[]
  name: string
  title: string
  selected: string
  onChange: (selected: string) => void
}

// Componente para un selector de opciones
// @param options: string[] - Opciones del selector
// @param name: string - Nombre con el que se recupera el valor del selector
// @param title: string - Texto de la UI que identifica al selector
// @param selected: string - Opción seleccionada del selector
// @param onChange - Función que se ejecuta al cambiar de opción en el selector
export default function DropDown({
  options,
  name,
  title,
  selected,
  onChange
}: DropDownProps) {
  return (
    <label className="flex justify-between gap-2">
      <span className="font-bold flex items-center">{title}</span>
      <select
      name={name}
      value={selected}
      onChange={e => onChange(e.target.value)}
      className="relative h-10 rounded-md cursor-pointer bg-gray-900 p-2"
      >
        <option value="all">Todos</option>
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
