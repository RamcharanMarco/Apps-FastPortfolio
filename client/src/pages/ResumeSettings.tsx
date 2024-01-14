import '../css/resumeSettings.css'
import { Link } from 'react-router-dom'
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom'

const ResumeSettings = () => {

  const {user, resume, setresume} = useStore()
  const navigate = useNavigate()

  const deleteResume = async () =>{
    const response = await fetch(`http://localhost:5000/api/resume`,{
      method : 'DELETE',
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(response.ok){
      if(json === true){
        navigate('/user/console')
        setresume(false)
        localStorage.removeItem('resume')
      }else{
        navigate('/user/console')
      }
    }
  }

  return (
    <div className="resumeSettings">
        <h1>RESUME SETTINGS PAGE</h1>
        {
          resume ?
          <>
            <button onClick={deleteResume}>delete resume</button>
            <Link to='/'>your resume</Link>
            <p>your resume space</p>
          </>
          :
          <>
            <p>you have no resume yet</p>
            <Link to='/user/resume/add'>create  a resume</Link>
          </>
        }
    </div>
  )
}

export default ResumeSettings