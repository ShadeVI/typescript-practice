import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const ListaUsuarios = () => {
  const { usuarios, isLoading } = useFetch()

  if (isLoading) return <Loading />

  return (
    <div>
      <h2>Componente Usuarios</h2>
      <ul>
        {
          usuarios.map((usuario) => {
            const { login: { uuid }, name: { first: firstName } } = usuario
            return (
              <li key={uuid}>{firstName} -- <Link to={`${uuid}`}>Visit Profile</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default ListaUsuarios
