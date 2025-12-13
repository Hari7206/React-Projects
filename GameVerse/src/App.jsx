import About from './components/About'
import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <main className='relative min-h-screen w-full overflow-x-hidden'>
      <Hero />
      <About/>
    </main>
  )
}

export default App