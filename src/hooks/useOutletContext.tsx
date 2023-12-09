import { useOutletContext } from 'react-router-dom'
import { type UsuariosOutletContextType } from '../../types'

const useUsuariosOutlet = () => {
  return useOutletContext<UsuariosOutletContextType>()
}

export default useUsuariosOutlet
