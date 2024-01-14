import {useState} from 'react'
import { useStore } from '../store'
import {useNavigate} from 'react-router-dom'


export const useResume = () =>{
    const [error2, setError2] = useState<any>('')
    const [loading2, setLoading2] = useState<any>(false)

    const {user, setresume} = useStore()
    const navigate = useNavigate()

    const resume = async(
        layout:string,talent:string,age:string,country:string,province:string,
        gender:string, name:string,surname:string,cell:string, about:string,
        skills:string, education:string,workExperience:string,socialmedia:string,hobbies:string,font:string
        ) =>{
        setLoading2(true)
        setError2(null)
        const response = await fetch('http://localhost:5000/api/resume/create', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
              },
            body: JSON.stringify({socialmedia,layout,talent,font,age,country,province,name,surname,gender, cell,about,skills, education,workExperience})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading2(false)
            setError2(json.error)
        }
        if(response.ok){
            setresume(json)
            localStorage.setItem('resume', json)
            navigate('/user/console')
        }
    }

    return {resume, loading2, error2}
}