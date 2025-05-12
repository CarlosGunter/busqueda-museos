import { usePagination } from '@/hooks/usePagination'
import { Arrow } from '@/assets/icons/svg'

/**
 * Componente de paginación
 * @description Este componente se encarga de mostrar la paginación de los resultados de búsqueda de museos.
 * @returns {React.ReactElement} Componente de paginación
 * @see usePagination
 */
export default function Pagination (): React.ReactElement {
  const { page, lastPage, goToPage } = usePagination()

  return (
    <nav aria-label='Page navigation' className='flex justify-center gap-4 my-6'>
      <button
        type='button'
        disabled={page === 1}
        onClick={() => goToPage(page - 1)}
        className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:border border-primary-200 hover:bg-primary-300 text-accent-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span className='w-full p-2'>
          <Arrow />
        </span>
      </button>
      <ul className='flex gap-2 overflow-x-auto max-w-40 md:max-w-60 lg:max-w-110'>
        {Array.from({ length: lastPage }, (_, index) => (
          <li
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-primary-200 hover:bg-primary-300 text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer
            ${page === index + 1 ? 'bg-primary-200 text-white' : ''}`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <button
        type='button'
        disabled={page === lastPage}
        onClick={() => goToPage(page + 1)}
        className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:border border-primary-200 hover:bg-primary-300 text-accent-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span className='rotate-180 w-full p-2'>
          <Arrow />
        </span>
      </button>
    </nav>
  )
}
