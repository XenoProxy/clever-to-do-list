import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Clever to-do list</h1>
      <div className="container">
        <a href="#"><span className="bright sign-in">Sign in</span></a>
        <p className="simpe-text">or</p>
        <a href="#"><span className="bright register">Register</span></a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
