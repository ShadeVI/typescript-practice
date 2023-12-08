import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
const Principal = (_props: Props) => {
  return (
    <div>
      <h1>Principal</h1>
      <ul>
        <li><Link to={'/about'}>To about</Link></li>
        <li><Link to={'/usuarios'}>Usuarios</Link></li>
      </ul>
    </div>
  )
}
export default Principal
