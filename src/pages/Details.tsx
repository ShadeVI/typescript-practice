import { useParams } from 'react-router-dom'
import useUsuariosOutlet from '../hooks/useOutletContext'

const Details = () => {
  const context = useUsuariosOutlet()
  const params = useParams()
  return (
    <div>
      <h1>Outlet Details Nested Route</h1>
      <h1 className='text-4xl my-8'>{params.id}</h1>
    </div>
  )
}
export default Details
