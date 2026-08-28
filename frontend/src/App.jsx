import { useState } from 'react'
import './App.css'
import NavRail from './components/NavRail'
import ChatListPanel from './components/ChatListPanel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavRail/>
     <ChatListPanel/>
    </>
  )
}

export default App
