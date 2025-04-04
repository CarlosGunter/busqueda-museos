import { usePagination } from '@/hooks/usePagination'

export default function Pagination (): React.ReactElement {
  const { page, lastPage, goToPage } = usePagination()

  return (
    <nav aria-label='Page navigation' className='flex justify-center gap-4 my-6'>
      <button
        type='button'
        disabled={page === 1}
        onClick={() => goToPage(page - 1)}
        className='flex items-center justify-center rounded-xl p-2 text-primary-300 hover:text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span>Anterior</span>
      </button>
      <ul className='flex gap-2'>
        {Array.from({ length: lastPage }, (_, index) => (
          <li
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`flex items-center justify-center w-10 h-10 rounded-full border border-primary-200 hover:bg-primary-300 text-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer
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
        className='flex items-center justify-center rounded-xl p-2 text-primary-300 hover:text-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-100 focus:ring-offset-2 cursor-pointer'
      >
        <span>Siguiente</span>
      </button>
    </nav>
  )
}
