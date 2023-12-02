import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
const Principal = (_props: Props) => {
  return (
    <div>
      <h1>Principal</h1>
      <Link to={'/about'}>To about</Link>
    </div>
  )
}
export default Principal
