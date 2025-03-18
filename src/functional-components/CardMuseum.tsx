import type { TestMuseo } from "@/types.d"

/**
 * Interface para las props del componente de museo
 * Definida en src/types.d como TestMuseo
 * @see TestMuseo
 */

/**
 * Componente que muestra la información de un museo
 * @param {TestMuseo} props Propiedades del museo
 * @returns {JSX.Element} Elemento del museo
 */
function CardMuseum({
  id,
  name,
  address,
  days,
  zone,
  theme: type,
  price,
  schedule
}: TestMuseo){

  return (
    <article className="shadow-lg rounded-3xl bg-gray-900">
      <div className="relative h-40 overflow-hidden">
        <img
          src={`/images/museums/${id}.webp`}
          alt={`${name} image`}
          className="absolute object-cover w-full h-full rounded-t-3xl"
        />
        <div className="relative flex h-full items-end justify-between">
          <span className="bg-black/60 p-1.5 rounded-md m-1">
            {price.regular === 0
              ? 'Gratis'
              : `$${price.regular} MXN`
            }
          </span>
          <span className="bg-black/60 p-1.5 rounded-md m-1">
            {zone}
          </span>
        </div>
      </div>
      <div className="grid gap-1.5 p-4 ">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-400 line-clamp-1">{address}</p>
        <div>
          {
            schedule.map((item, i) => (
              <p key={`schedule${i}`} className="text-sm italic">{item}</p>
            ))
          }
        </div>
        <p className="text-sm bg-primary/90 p-1.5 my-1 w-fit rounded-md">{type}</p>
      </div>
    </article>
  )
}

export default CardMuseum