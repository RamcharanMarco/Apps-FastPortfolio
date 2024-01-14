import { useEffect, useState, useCallback } from "react"
import { useStore } from "../store"
import '../css/editResume.scss'

const EditResume = () => {

  const {user} = useStore()

  const [data, setData] = useState<any | object>(null)
  const [loading, setLoading] = useState<any>(false)
  const [error, setError] = useState<any>(false)
  const [showLayouts, setShowLayouts] = useState<boolean>(false);
  const [layPage, setLayPage] = useState<number>(1);
  const [layout, setLayout] = useState<string>("one");


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

  const displayLayouts = (e: any) => {
    e.preventDefault();
    setShowLayouts(!showLayouts);
  };

  const prev = (e: any) => {
    e.preventDefault();
    if(layPage === 1){
      setLayPage(4)
    }else{
      setLayPage((prev) => prev - 1)
    }
  };

  const next = (e: any) => {
    e.preventDefault();
    if(layPage === 4){
      setLayPage(1)
    }else{
      setLayPage((prev) => prev + 1)
    }
  };


  return (
    <div className="editResume">
            {showLayouts ? (
        <div className="layouts">
            <button className="prev" onClick={prev}>prev</button>
          {
            layPage === 1 ? <button onClick={(e) => {setLayout("one"); displayLayouts(e)}}>layout1 with pic</button>
            :layPage === 2 ?           <button onClick={(e) => {setLayout("two"); displayLayouts(e)}}>layout2 with pic</button>
            :layPage === 3 ?          <button onClick={(e) => {setLayout("three"); displayLayouts(e)}}>layout3 without pic</button>
            :layPage === 4 ?            <button onClick={(e) => {setLayout("four"); displayLayouts(e)}}>layout4 without pic</button>
            : null
          }
          <p className="len">{layPage}/4</p>
                      <button className="next" onClick={next}>next</button>
           <button className="close" onClick={displayLayouts}>close</button>
        </div>
      ) : null}
        <div className="details">
          <h1>Details</h1>
          <input type="text" placeholder="input"/>
          <input type="text" placeholder="input"/>
          <input type="text" placeholder="input"/>
          <input type="text" placeholder="input"/>
          <input type="text" placeholder="input"/>
          <input type="text" placeholder="input"/>
          <button>save details</button>
          <button>cancel</button>
        </div>
        <div className="photo">
          <h1>photo</h1>
          <input type="file" />
          <button>save photo</button>
          <button>cancel</button>
        </div>
        <div className="edit-layouts">
          <h1>here we change our layout</h1>
          <button onClick={displayLayouts}>change layout</button>
          <button>save layout</button>
          <button>cancel</button>
        </div>
        <div>
          <h1>delete and cancel</h1>
          <button>delete</button>
          <button>cancel</button>
        </div>
    </div>
  )
}

export default EditResume