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
    <article className="rounded-3xl bg-bg-light shadow-md lg:grid lg:grid-cols-5 lg:gap-3">
      <div className="relative h-45 overflow-hidden lg:col-start-4 lg:col-span-2 lg:row-[1]">
        <img
          src={`/images/museums/${id}.webp`}
          alt={`${name} image`}
          className="absolute object-cover w-full h-full rounded-t-3xl"
          style={{
            maskImage: 'linear-gradient(black 60%, transparent)',
          }}
        />
        <div className="relative flex h-full items-end justify-between pb-2">
          <span className="bg-black/40 text-gray-200 p-1.5 rounded-md m-1">
            {price.regular === 0
              ? 'Gratis'
              : `$${price.regular} MXN`
            }
          </span>
          <span className="bg-black/40 text-gray-200 p-1.5 rounded-md m-1">
            {zone}
          </span>
        </div>
      </div>
      <div className="grid gap-1.5 p-4 lg:col-span-3">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-text-200 line-clamp-1">{address}</p>
        <div>
          {
            schedule.map((item, i) => (
              <p key={`schedule${i}`} className="text-sm italic">{item}</p>
            ))
          }
        </div>
        <p
        className="text-sm my-1 w-fit">
          {type}
        </p>
      </div>
    </article>
  )
}

export default CardMuseum