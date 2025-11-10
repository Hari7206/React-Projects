import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/startrating/Star-Rating'

function App() {
  const [count, setCount] = useState(0)
  function handleChange(value){
    console.log(value);
    

  }
  return (
    <>
    <StarRating  value={0} onChange={handleChange}/>
    </>
  )
}

export default App
