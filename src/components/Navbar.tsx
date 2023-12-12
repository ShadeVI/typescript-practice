import { Link } from 'react-router-dom'
import { useUserContext } from '../UserContext'
import { RUTAS } from '../constants/enums'

const Navbar = () => {
  const { user, login, logout, isLoading, error } = useUserContext()

  const handleLogin = () => {
    void login('Pepino123')
  }
  return (
    <nav className="flex justify-between items-center">
      <div>
      {user === undefined
        ? (
        <button onClick={() => { handleLogin() }} disabled={isLoading}>Login</button>
          )
        : (
        <button onClick={logout}> Logout </button>
          )}
      </div>
      <div>
        {error.isError && <p className='text-red-600'>{error.message}</p>}
        <p>{user !== undefined && `Bienvenido, ${user.username}`}</p>
      </div>
      <div>
        <Link to={RUTAS.Profile}>Profile</Link>
      </div>
    </nav>
  )
}
export default Navbar
