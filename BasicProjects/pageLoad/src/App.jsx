import { useState } from 'react'
import LoadMore from './components'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <LoadMore/>
   </>
  )
}

export default App
