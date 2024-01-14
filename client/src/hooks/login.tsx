import {useState} from 'react'
import { useStore } from '../store'
import {useNavigate} from 'react-router-dom'

export const useLogin = () =>{

    const navigate = useNavigate()

    const [error, setError] = useState<null | object>()
    const [loading, setLoading] = useState<boolean>(false)

    const {loginuser, setresume} = useStore()

    const login = async(password:string, username:string) =>{
        setLoading(true)
        setError(null)
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({password, username})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            loginuser(json)
            localStorage.setItem('resumeworlduser', JSON.stringify(json))
            setLoading(false)
            navigate('/user/console')
            if(json.resume){
                localStorage.setItem('resume', JSON.stringify(json.resume))
                setresume(json)
            }
        }
    }

    return {login, loading, error}
}