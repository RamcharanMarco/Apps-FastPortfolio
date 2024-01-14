import {useState} from 'react'
import { useStore } from '../store'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export const useResumePhoto = () =>{
    const [error, setError] = useState<any>('')
    const [loading, setLoading] = useState<any>(false)

    const {user, setresume} = useStore()
    const navigate = useNavigate()

    const resumePhoto = async(
        layout:string,talent:string,age:string,country:string,province:string,
        gender:string, name:string,surname:string,cell:string, about:string, 
        photo:string,skills:string, education:string,workExperience:string,hobbies:string,socialmedia:string,font:string
        ) =>{
            const body = {
                layout,font,talent,age,country,province,name,surname,gender, cell,about, photo, hobbies,skills, education,workExperience, socialmedia
            }
            try{
                setLoading(true)
                setError(null)
                const response = await axios.post('http://localhost:5000/api/resume/resumephoto',body, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization' : `Bearer ${user.token}`
                      },
                })
                const json = await response.data
                setError(false)
                setresume(json)
                localStorage.setItem('resume', json)
                navigate('/user/console')
          }catch(error){
              console.log(error)
              setError(true)
          }
          finally{
              setLoading(false)
          }
    }

    return {resumePhoto, loading, error}
}