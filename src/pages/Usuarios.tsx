import { Link, Outlet } from 'react-router-dom'
import ListaUsuarios from '../components/ListaUsuarios'
import useFetch from '../hooks/useFetch'

const Usuarios = () => {
  const { usuarios, isLoading } = useFetch()
  return (
    <div>
      <h1>Pagina Usuarios</h1>
      <Link to="/">Back to Home</Link>
      <div className="flex justify-between items-start mt-12">
        <ListaUsuarios usuarios={usuarios} isLoading={isLoading} />
        <Outlet context={{ usuarios }} />
      </div>
    </div>
  )
}
export default Usuarios
