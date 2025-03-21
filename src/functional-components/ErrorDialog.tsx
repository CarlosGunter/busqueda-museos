import { useErrorStore } from "@/store/errorStore"

export default function ErrorDialog() {
  const { errorState } = useErrorStore();
  const handleReturn = () => {
    useErrorStore.setState({ errorState: false })
  }

  return (
    <section className={`z-20 items-center bg-bg-100 backdrop-blur-2xl rounded-lg shadow-lg p-4 m-4 ${errorState ? 'fixed' : 'hidden'}`}>
      <h2>Error</h2>
      <p>Ocurrió un error. Inténtalo de nuevo o recarga la página.</p>
      <button onClick={handleReturn}>Volver</button>
    </section>
  )
}
