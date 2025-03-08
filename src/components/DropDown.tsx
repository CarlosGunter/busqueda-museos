interface DropDownProps {
  options: string[]
  name: string
  title: string
  selected: string
  onChange: (selected: string) => void
}

export default function DropDown(
  { options, name, title, selected, onChange }: DropDownProps
) {
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
