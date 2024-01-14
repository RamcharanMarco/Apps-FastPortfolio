import { Link } from "react-router-dom"
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo1">
            <h1 className="fast1">FAST</h1>
            <h1 className='portfolio1'>PORTFOLIO</h1>
        </div>
        <div className="links">
            <Link to='/auth/login'>login</Link>
            <Link to='/auth/signup'>signup</Link>
            <Link to='/'>about</Link>
        </div>
    </nav>
  )
}

export default Navbar