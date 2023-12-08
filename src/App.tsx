import './App.css'
import Navbar from './components/Navbar'
import Principal from './pages/Principal'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Usuarios from './pages/Usuarios'
import { Route, Routes } from 'react-router-dom'
import { RUTAS } from './constants/enums'
import { UserContextProviver } from './UserContext'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  return (
    <>
      <UserContextProviver>
        <Navbar />
        <Routes>
          <Route path={RUTAS.Home} element={<Principal />} />
          <Route path={RUTAS.About} element={<About />} />
          <Route path={RUTAS.Usuarios} element={<ProtectedRoute>
            <Usuarios />
          </ProtectedRoute>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContextProviver>
    </>
  )
}

export default App
