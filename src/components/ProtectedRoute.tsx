import { Navigate } from 'react-router-dom'
import { useUserContext } from '../UserContext'
import { RUTAS } from '../constants/enums'

interface Props {
  children: React.JSX.Element
}
function ProtectedRoute ({ children }: Props) {
  const { user, isLoading } = useUserContext()
  if (isLoading) {
    return <div>loading...</div>
  }
  if (!user) {
    return <Navigate to={RUTAS.Home} />
  }
  return (
    children
  )
}
export default ProtectedRoute
