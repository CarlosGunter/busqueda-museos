import type { Museum } from '@/types'

/**
 * Interface para las props del componente de museo
 * Definida en src/types.d como Museum
 * @see Museum
 */

/**
 * Componente que muestra la información de un museo
 * @param {Museum} props Propiedades del museo
 * @returns {React.ReactElement} Elemento del museo
 */
export default function CardMuseum ({
  id,
  name,
  address,
  zone,
  theme,
  days,
  schedule,
  price
}: Museum): React.ReactElement {
  return (
    <article
      className='rounded-3xl bg-bg-light shadow-md lg:grid lg:grid-cols-5 lg:gap-3'
      style={{
        contentVisibility: 'auto'
      }}
    >
      <div className='relative h-45 overflow-hidden lg:col-start-4 lg:col-span-2 lg:row-[1] lg:h-auto'>
        <img
          src={`/images/museums/${id}.webp`}
          alt={`${name} image`}
          className='absolute object-cover w-full h-full rounded-t-3xl lg:rounded-r-3xl lg:rounded-t-none lg:block'
        />
        <div className='relative flex h-full items-end justify-between pb-2 lg:hidden'>
          <span className='bg-black/40 text-gray-200 p-1.5 rounded-md m-1'>
            {price.regular === 0
              ? 'Gratis'
              : `$${price.regular} MXN`}
          </span>
          <span className='bg-black/40 text-gray-200 p-1.5 rounded-md m-1'>
            {zone}
          </span>
        </div>
      </div>
      <div className='grid gap-1.5 p-4 lg:col-span-3'>
        <h2 className='text-lg font-bold'>{name}</h2>
        <div className='hidden lg:flex gap-3 font-medium'>
          <span className=''>
            {price.regular === 0
              ? 'Gratis'
              : `$${price.regular} MXN`}
          </span>
          <span>⁝</span>
          <span className=''>
            {zone}
          </span>
        </div>
        <p className='text-text-200 line-clamp-1'>{address}</p>
        <div>
          {
            schedule.map((item, i) => (
              <p key={`schedule${i}`} className='text-sm italic'>{item}</p>
            ))
          }
        </div>
        <p
          className='text-sm my-1 w-fit'
        >
          {theme}
        </p>
      </div>
    </article>
  )
}
