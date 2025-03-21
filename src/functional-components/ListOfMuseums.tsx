import CardMuseum from '@f-components/CardMuseum'
import { useListStore } from '@/store/listStore'

/**
 * Componente que crea la lista de los resultados de busqueda de museos 
 * @returns {JSX.Element} La lista de museos.
 * @see useListStore
 * @see CardMuseum
 */
function ListOfMuseums() {
  // Lista de museos
  const { museums } = useListStore(state => state)

  return (
    <main className="grid gap-4 p-2 lg:min-w-[700px]" id='list-museums'>
      {museums.length
        ? (
          museums.map((museum) => (
            <CardMuseum key={museum.id} {...museum} />
          ))
        ) : (
          <p className='min-h-25'>No se encontraron museos.</p>
        )}
    </main>
  )
}

export default ListOfMuseums