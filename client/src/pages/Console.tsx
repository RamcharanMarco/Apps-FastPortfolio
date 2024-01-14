import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import '../css/console.css'
import { useStore } from '../store'


const Console = () => {
  const {resume, user} = useStore();

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<any>(false)
  const [error, setError] = useState<any>(false)

  const getData = useCallback( async () => {
    setLoading(true)
    setError(null)
    const response = await fetch('http://localhost:5000/api/users/', {
        headers: {
            'Authorization' : `Bearer ${user.token}`
          }
    })

    const json = await response.json()

    if(!response.ok){
      setLoading(false)
      setError(true)
  }
  if(response.ok){
      setLoading(false)
      setData(json)
  }
  },[user])


  useEffect( ()=>{
    getData()

  },[getData])

  return (
    <div className="console">
      {
        loading ? <p>loading</p>
        :
        <>
        <div className="details">
          <h1>username: {data ? data.username: ''}</h1>
        </div>
        <div className="resume-container">
          {
          resume ? 
          <div>
          <h1>your resume is live</h1>
          <p>your resume can be found here</p>
          <p>copy url to clipboard</p>
          <button>copy to clipboard</button>
          <p>how many people viewd ur resume {resume.views}</p>
          <p>@marcoram</p>
          </div>
          : !resume ?
          <div>
          <h1>you have no resume uploaded</h1>
          <Link to='user/resume/add'>create a resume</Link>
          </div>
          :
          ''
          }
        </div>
        </>
      }
    </div>
  )
}

export default Console