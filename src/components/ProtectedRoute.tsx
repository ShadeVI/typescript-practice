import { Navigate } from 'react-router-dom'
import { useUserContext } from '../UserContext'
import { RUTAS } from '../constants/enums'

interface Props {
  children: JSX.Element
}
function ProtectedRoute ({ children }: Props) {
  const { user } = useUserContext()
  if (!user) {
    return <Navigate to={RUTAS.Home} />
  }
  return (
    children
  )
}
export default ProtectedRoute
