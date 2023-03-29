import { Link } from 'react-router-dom'
import './Topics.css'

const Error = () => {
  return (
    <section className='error'>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to='/'>Back Home</Link>
    </section>
  )
}

export default Error
