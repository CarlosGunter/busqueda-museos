import { useErrorStore } from '@/store/errorStore'

/**
 * Componente que muestra un mensaje de error
 * @returns {React.ReactElement} El mensaje de error.
 * @see useErrorStore
 */
export default function ErrorDialog (): React.ReactElement {
  const { errorState } = useErrorStore()
  const handleReturn = (): void => {
    useErrorStore.setState({ errorState: false })
  }

  return (
    <div className={`z-20 items-center bg-bg-200 border border-bg-300 inset-shadow inset-shadow-bg-300 rounded-lg shadow-lg p-4 m-4 top-0 left-0 ${errorState ? 'fixed' : 'hidden'}`}>
      <h2 className='text-xl'>Error</h2>
      <p>Ocurrió un error. Inténtalo de nuevo o recarga la página.</p>
      <button
        className='grid place-items-center absolute top-1 right-1 cursor-pointer bg-accent-200 text-white text-sm w-6.5 h-6.5 rounded-full p-1 hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-400'
        aria-label='Cerrar'
        type='button'
        onClick={handleReturn}
      >
        x
      </button>
    </div>
  )
}
