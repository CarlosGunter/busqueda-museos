interface DropDownProps {
  options: string[]
  name: string
  title: string
}

export default function DropDown({ options, name, title }: DropDownProps) {
  return (
    <label className="flex justify-between gap-2">
      <span className="font-bold">{title}</span>
      <select name={name} className="relative h-10 rounded-md cursor-pointer bg-gray-900 p-2">
        <option value="all">Todos</option>
        {options.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </label>
  )
}
