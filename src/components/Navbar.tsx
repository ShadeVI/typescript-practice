import { useUserContext } from '../UserContext'

const Navbar = () => {
  const { user, login, logout } = useUserContext()
  console.log(user)

  const handleLogin = () => {
    login({
      userID: '164ae9f2-9798-4dbc-b555-dd25e118b2ca',
      username: 'Pepino123',
      name: 'Pepe'
    })
  }
  return (
    <nav>
      {user === undefined
        ? (
        <button onClick={handleLogin}>Login</button>
          )
        : (
        <button
          onClick={logout}
        >
          Logout
        </button>
          )}
      <p>{user !== undefined && `Bienvenido, ${user.username}`}</p>
    </nav>
  )
}
export default Navbar
