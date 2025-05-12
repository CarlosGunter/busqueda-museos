import type { Museum } from '@/types'
import { URL_IMAGES } from '@/config.museums'
import { Home, Location, Calendar, Cash, Navigation } from '@/assets/icons/svg'

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
  schedule,
  price
}: Omit<Museum, 'days'>): React.ReactElement {
  return (
    <article className='rounded-3xl bg-bg-light shadow-md md:text-lg lg:grid lg:grid-cols-5 lg:gap-3'>

      <div className='relative h-45 overflow-hidden lg:col-start-4 lg:col-span-2 lg:row-[1] lg:h-auto'>
        <img
          src={`https://${URL_IMAGES}/${id}.webp`}
          onError={(e) => {
            e.currentTarget.src = 'fallback-img.webp'
          }}
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

        <div className='flex gap-2'>
          <span className='w-1 bg-accent-200'>⁝</span>
          <h2 className='text-xl text-accent-200 font-bold md:text-2xl'>{name}</h2>
        </div>

        <div className='hidden lg:flex gap-4 font-medium'>
          <p className='flex gap-2 items-center'>
            <span className='shrink-0 p-2 bg-bg-200 rounded-lg text-accent-200'>
              <Cash />
            </span>
            <span>
              {price.regular === 0
                ? 'Gratis'
                : `$${price.regular} MXN`}
            </span>
          </p>

          <p className='flex gap-1 items-center'>
            <span className='shrink-0 p-2 bg-bg-200 rounded-lg text-accent-200'>
              <Navigation />
            </span>
            <span>{zone}</span>
          </p>
        </div>

        <p className='flex items-center gap-1 text-text-200'>
          <span className='shrink-0'><Location /></span>
          <span className='line-clamp-1 md:line-clamp-2'>{address}</span>
        </p>

        <div className='flex gap-1 items-center'>
          <span className='shrink-0'><Calendar /></span>
          <div>
            {
              schedule.map((item, i) => (
                <p key={`schedule${i}`} className='text-sm italic'>{item}</p>
              ))
            }
          </div>
        </div>

        <p className='flex gap-1 items-center text-sm my-1 w-fit'>
          <span className='shrink-0'><Home /></span>
          {theme.join(', ')}
        </p>
      </div>
    </article>
  )
}
