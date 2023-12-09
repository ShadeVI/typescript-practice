import Principal from '../pages/Principal'
import ErrorPage from '../pages/ErrorPage'
import About from '../pages/About'
import Usuarios from '../pages/Usuarios'
import { Route, Routes as RRoutes } from 'react-router-dom'
import { RUTAS } from '../constants/enums'
import ProtectedRoute from './ProtectedRoute'
import Profile from '../pages/Profile'
import Details from '../pages/Details'

const Routes = () => {
  return (
    <RRoutes>
      <Route path={RUTAS.Home} element={<Principal />} />
      <Route path={RUTAS.About} element={<About />} />
      <Route path={RUTAS.Profile} element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path={RUTAS.Usuarios} element={
        <ProtectedRoute>
          <Usuarios />
        </ProtectedRoute>
      } />
      <Route path={RUTAS.Details} element={
        <ProtectedRoute>
          <Details />
        </ProtectedRoute>
      } />
      <Route path="*" element={<ErrorPage />} />
    </RRoutes>
  )
}
export default Routes
