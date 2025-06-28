import { usePagination } from '@/hooks/usePagination'
import { Arrow } from '@/assets/icons/svg'

/**
 * Componente de paginación
 * @description Este componente se encarga de mostrar la paginación de los resultados de búsqueda de museos.
 * @returns {React.ReactElement} Componente de paginación
 * @see usePagination
 */
export default function Pagination (): React.ReactElement {
  const { currentPage, lastPage, goToPage, rangePages } = usePagination()

  return (
    <nav aria-label='Page navigation' className='flex justify-center gap-2 my-6'>
      <button
        type='button'
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className='hidden md:flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:border border-primary-200 hover:bg-primary-300 text-accent-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span className='w-full p-2'>
          <Arrow />
        </span>
      </button>

      <ul className='flex gap-2'>

        {!rangePages.includes(1) && (
          <li
            key={1}
            onClick={() => goToPage(1)}
            className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-primary-200 hover:bg-primary-300 text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer
            ${currentPage === 1
              ? 'bg-primary-200 text-white'
              : ''
            }`}
          > 1 </li>
        )}

        {rangePages[0] > 2 && ( <li className='self-end'>...</li> )}

        {rangePages.map((page) => (
          <li
            key={page}
            onClick={() => goToPage(page)}
            className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-primary-200 hover:bg-primary-300 text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer
            ${currentPage === page
              ? 'bg-primary-200 text-white'
              : ''
            }`}
          >
            {page}
          </li>
        ))}

        {(rangePages.at(-1) ?? lastPage) < lastPage - 1 && (
          <li className='self-end'>...</li>
        )}

        {!rangePages.includes(lastPage) && lastPage !== 1 && (
          <li
            key={lastPage}
            onClick={() => goToPage(lastPage)}
            className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-primary-200 hover:bg-primary-300 text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer
            ${currentPage === lastPage
              ? 'bg-primary-200 text-white'
              : ''
            }`}
          >
            {lastPage}
          </li>
        )}
      </ul>

      <button
        type='button'
        disabled={currentPage === lastPage}
        onClick={() => goToPage(lastPage)}
        className='hidden md:flex shrink-0 items-center justify-center w-10 h-10 rounded-full hover:border border-primary-200 hover:bg-primary-300 text-accent-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span className='rotate-180 w-full p-2'>
          <Arrow />
        </span>
      </button>
    </nav>
  )
}
