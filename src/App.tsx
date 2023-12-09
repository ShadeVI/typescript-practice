import './App.css'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import { UserContextProviver } from './UserContext'

function App () {
  return (
    <>
      <UserContextProviver>
        <Navbar />
        <Routes />
      </UserContextProviver>
    </>
  )
}

export default App
