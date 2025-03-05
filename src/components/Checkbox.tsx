interface SelectorProps {
  options: string[]
  name: string
  title: string
}

export default function Checkbox({ options, name, title }: SelectorProps) {

  return (
    <div className="grid gap-1">
      <span className="font-bold">{title}</span>
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
              name={`${name}-${option}`}
              className="absolute w-full h-full opacity-0"
            />
            <label className="w-full p-2 rounded-md text-center">{option}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
