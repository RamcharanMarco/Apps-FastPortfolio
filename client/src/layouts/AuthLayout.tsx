import {Outlet, NavLink, Link} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="authLayout">
        <nav>
            <Link to='/'><h1 className='text-3xl font-bold underline'>resume<br></br>world</h1></Link>
            <div className="links">
                <NavLink to='/'>home</NavLink>
                <NavLink to='/about'>about</NavLink>
            </div>
        </nav>
        <nav>
            <NavLink to='/auth/login'>login</NavLink>
            <NavLink to='/auth/signup'>signup</NavLink>
        </nav>
        <Outlet/>
        <footer>
            <h1>hey im the footer</h1>
        </footer>
    </div>
  )
}

export default AuthLayout