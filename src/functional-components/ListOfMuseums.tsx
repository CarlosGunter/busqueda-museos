import CardMuseum from '@f-components/CardMuseum'
import { useListStore } from '@store/listStore'

// Componente que crea la lista de los resultados de busqueda de museos
function ListOfMuseums() {
  const { museums } = useListStore(state => state)
  
  return (
    <main className="grid gap-4 p-2" id='list-museums'>
      {museums.map((museum) => (
        <CardMuseum key={museum.id} {...museum} />
      ))}
    </main>
  )
}

export default ListOfMuseums