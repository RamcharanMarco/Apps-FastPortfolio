import {Outlet, NavLink} from 'react-router-dom'
import './css/resumelayout.css'
import { useStore } from '../store'

const ResumeLayout = () => {

  const {resume} = useStore();

  return (
    <div className="resumeLayout">
        <nav>
            <h1>resume<br></br>world user</h1>
            <div className="links">
                <NavLink to='/user/console'>console</NavLink>
                {
                  resume ? 

                  <>
                    <NavLink to='/user/resume/edit'>editresume</NavLink>
                    <NavLink to='/user/resume/myresume'>myresume</NavLink>
                  </>
                  :
                    <NavLink to='/user/resume/add'>add resume</NavLink>
                  }
            </div>
        </nav>
          <Outlet/>
        <footer>
            <h1>hey im the footer</h1>
        </footer>
    </div>
  )
}

export default ResumeLayout