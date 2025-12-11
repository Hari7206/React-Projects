import { useState } from 'react'
import './App.css'
import Navbar from "../src/components/Nav/Navbar"
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
    </>
  )
}

export default App
