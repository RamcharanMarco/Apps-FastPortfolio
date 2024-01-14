import { useState } from "react"
import { useSignup } from "../hooks/signup"
import '../css/signup.css'

const Signup = () => {

  const {signup, loading, error} = useSignup()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const handleClick = (e:any) =>{
    e.preventDefault()
    signup(email,password,username)
  }

  return (
    <div className="signup">
      <h1>SIGNUP</h1>
      <p>your first step in getting your porfolio online</p>
      <form>
        <input className="border" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email'/>
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

export default Signup