import Chat from "./Components/chat/Chat"
import List from "./Components/List/List"
import Detail from "./Components/detail/Detail"
function App() {
  // const [count, setCount] = useState(0)

  return (
  <div className="container">
  <List/>
  <Chat/>
  <Detail/>
  </div>
  )
}

export default App
