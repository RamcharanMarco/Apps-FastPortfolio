import {Outlet, NavLink} from 'react-router-dom'
import './css/userLayout.css'
import { useLogout } from '../hooks/logout'

const UserLayout = () => {

  const {logout} = useLogout()

  return (
    <div className="userLayout">
        <nav>
            <h1>resume<br></br>world user</h1>
            <div className="links">
                <NavLink to='/user/console'>console</NavLink>
                <NavLink to='/user/resume'>resume</NavLink>
                <button onClick={logout}>logout</button>
            </div>
        </nav>
        <div className='middle'>
          <div className="sidebar">
            <NavLink to='/user/console/'>userhome</NavLink>
            <NavLink to='/user/console/settings'>settings</NavLink>
            <NavLink to='/user/console/resume/settings'>resume settings</NavLink>
          </div>
          <Outlet/>
        </div>
        <footer>
            <h1>hey im the footer</h1>
        </footer>
    </div>
  )
}

export default UserLayout