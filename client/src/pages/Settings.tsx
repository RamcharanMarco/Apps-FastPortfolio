import '../css/settings.css'
import { useState, useEffect, useCallback } from 'react'
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom'

const Settings = () => {

  const {user} = useStore()

  const navigate = useNavigate()

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

  const deleteUser = async () =>{
    const response = await fetch(`http://localhost:5000/api/users`,{
      method : 'DELETE',
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(response.ok){
      navigate('/auth/signup')
      console.log(json)
    }
  }

  return (
    <div className="settings">
        <div className="info">
          <p>email: {data ? data.email: ''}</p>
          <p>username:{data ? data.username: ''} </p>
          <hr />
        </div>
        <div>
          <button onClick={deleteUser}>delete account</button>
        </div>
    </div>
  )
}

export default Settings