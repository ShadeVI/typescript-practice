import { Link } from 'react-router-dom'
import ListaUsuarios from '../components/ListaUsuarios'

const Usuarios = () => {
  return (
    <div>
      <h1>Pagina Usuarios</h1>
      <Link to="/">Back to Home</Link>
      <ListaUsuarios />
    </div>
  )
}
export default Usuarios
