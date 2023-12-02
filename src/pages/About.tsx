import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
const About = (_props: Props) => {
  return (
    <div>
      <h1>About</h1>
      <Link to={'/'}>Back to Home</Link>
    </div>
  )
}
export default About
