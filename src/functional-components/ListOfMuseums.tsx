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
    <main className="grid gap-4 p-2" id='list-museums'>
      {museums.length > 0 && (
        museums.map((museum) => (
          <CardMuseum key={museum.id} {...museum} />
        ))
      )}
    </main>
  )
}

export default ListOfMuseums