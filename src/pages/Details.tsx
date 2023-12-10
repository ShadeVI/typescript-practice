import { useParams } from 'react-router-dom'
import useUsuariosOutlet from '../hooks/useOutletContext'

const Details = () => {
  const context = useUsuariosOutlet()
  const params = useParams()

  const userDetails = context.usuarios.find(user => user.login.uuid === params.id)

  return (
    <div className='flex flex-col justify-center items-center mx-auto text-center bg-neutral-900 p-16 rounded-md'>
      <div>
        <h1 className='text-4xl my-8'>{userDetails?.name.first}</h1>
        <h3 className='text-xl my-8'>{userDetails?.login.uuid}</h3>
        <figure>
          <img src={userDetails?.picture.large} alt={`${userDetails?.name.first} image` } className='rounded-2xl mx-auto' />
        </figure>
      </div>
    </div>
  )
}
export default Details
