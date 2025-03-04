import { type TestMuseo } from "@/types.d"
import { imagesUrl } from "@/config.museums"

function CardMuseum(
  { id, name, address, days, zone, type, price, schedule }: TestMuseo
) {
  
  // const imgs = new URL(`@images/${id}.webp`, import.meta.url).href

  return (
    <article className="p-4 shadow-sm rounded-2xl border border-gray-300">
      <div className="h-48 overflow-hidden">
        <img
          src={`/images/museums/${id}.webp`}
          alt={`${name} image`}
          className="relative object-cover w-full h-full"
        />
      </div>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-400">{address}</p>
      {
        schedule.map((item, i) => (
          <p key={`shedule${i}`} className="text-sm italic">{item}</p>
        ))
      }
      <p className="text-sm">Zona: {zone}</p>
      <p className="text-sm">Temas: {type}</p>
      {
        price.regular === 0
          ? <p className="text-lg font-semibold">Gratis</p>
          : <p className="text-lg font-semibold">${price.regular}</p>
      }
    </article>
  )
}

export default CardMuseum