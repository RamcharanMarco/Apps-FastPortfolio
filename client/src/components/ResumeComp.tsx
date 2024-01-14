import { useEffect, useState, useCallback } from "react"
import Layout1 from "./layouts/Layout1"
import Layout2 from "./layouts/Layout2"
import Layout3 from "./layouts/Layout3"
import Layout4 from "./layouts/Layout4"
import { useStore } from "../store"

const ResumeComp = () => {

  const {user} = useStore()

  const [data, setData] = useState<any | object>(null)
  const [loading, setLoading] = useState<any>(false)
  const [error, setError] = useState<any>(false)

  const getData = useCallback( async () => {
    setLoading(true)
    setError(null)
    const response = await fetch('http://localhost:5000/api/resume/getResume', {
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
    <div>
      {
        data && data.layout === 'one'? <Layout1 data={data}/>:
        data && data.layout === 'two'? <Layout2 data={data}/>:
        data && data.layout === 'three'? <Layout3 data={data}/>:
        data && data.layout === 'four'? <Layout4 data={data}/>:
        ''
      }
    </div>
  )
}

export default ResumeComp