import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const params = useParams()
  return (
    <div>
      <h1>Pagina Details</h1>
      <h1 className='text-4xl my-8'>{params.id}</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
export default Details
