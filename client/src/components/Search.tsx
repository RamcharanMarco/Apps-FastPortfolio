import { useState } from "react"

const Search = () => {

  const [token, setToken] = useState<string>('')

  const handleClick = (e:any) =>{
    /*make a get request to backend to get resume by token*/
    /*if there is a resume then we will use the id and redirect to /resume*/
    e.preventDefault()
    console.log(token)
  }

  return (
    <div className="search">
        <h1>enter resume token</h1>
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)}/>
        <button onClick={handleClick}>search</button>
        <p>possible outcomes when we press search</p>
        <ul>
            <li>we a resume and we redirect to /resume</li>
            <li>we dont get a resume and we</li>
        </ul>
    </div>
  )
}

export default Search