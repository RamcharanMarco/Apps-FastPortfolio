import { useStore } from '../store'
import {useNavigate} from 'react-router-dom'


export const useLogout = () =>{

    const {logoutuser, setresume} = useStore()
    const navigate = useNavigate()

    const logout = () =>{
        //remove user form storage
        localStorage.removeItem('resumeworlduser')
        localStorage.removeItem('resume')
        logoutuser()
        setresume(false)
        navigate('/auth/login')
    }

    return {logout}
}