import { useState } from 'react'
import './App.css'
import NavRail from './components/NavRail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavRail/>
    </>
  )
}

export default App
