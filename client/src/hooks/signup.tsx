import {useState} from 'react'
import { useStore } from '../store'
import {useNavigate} from 'react-router-dom'

export const useSignup = () =>{

    const navigate = useNavigate()

    const [error, setError] = useState<null | object>()
    const [loading, setLoading] = useState<boolean>(false)

    const {loginuser} = useStore()

    const signup = async(email:string,password:string, username:string) =>{
        setLoading(true)
        setError(null)
        const response = await fetch('http://localhost:5000/api/auth/create', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password, username})
        })

        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save user to local storage
            loginuser(json)
            localStorage.setItem('resumeworlduser', JSON.stringify(json))
            setLoading(false)
            navigate('/user/console')
        }
    }

    return {signup, loading, error}
}