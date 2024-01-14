import { useEffect,useState } from "react"
import { Router } from "./router/Router"

const App = () => {

  const [loading, setLoading] = useState(false)

  return (
    <>
      {
        loading ? 
        <div className="loading">
          <h1>FAST PORTFOLIO</h1>
        </div>
        : 
        <Router/>
      }
    </>
  )
}

export default App
