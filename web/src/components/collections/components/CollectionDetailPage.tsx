
import { useParams } from 'react-router-dom'

function CollectionDetailPage() {
    const {id} =  useParams<{id:string}>()
  return (
    <section>
    <h1>Collection Detail</h1>
    <p>Collection ID: {id}</p>
    </section>
  )
}

export default CollectionDetailPage
