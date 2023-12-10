import { type Usuario } from '../../types'
import Loading from './Loading'
import { Link } from 'react-router-dom'

interface Props {
  usuarios: Usuario[]
  isLoading: boolean
}

const ListaUsuarios = ({ usuarios, isLoading }: Props) => {
  if (isLoading) return <Loading />

  return (
    <div className='flex-grow-[0.25] border-r-2 border-r-neutral-900'>
      <h2 className="text-2xl mb-4 underline">Users</h2>
      <ul>
        {
          usuarios.map((usuario) => {
            const { login: { uuid }, name: { first: firstName } } = usuario
            return (
              <li key={uuid}>{firstName} -- <Link to={`${uuid}`}>Show Details</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListaUsuarios
