import { useState } from "react"
import { useLogin } from "../hooks/login"

const Login = () => {

  const {login, loading, error} = useLogin()

  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const handleClick = (e:any) =>{
    e.preventDefault()
    login(username, password)
  }

  return (
    <div className="login">
      <form>
        <input className="border" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password'/>
        <input className="border" type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username'/>
        <button onClick={handleClick}>
          {loading ? 'loading' : 'login' }
          </button>
          <div className="error-message">
            {error ? 'we got an error' : ''}
          </div>
      </form>
    </div>
  )
}

export default Login