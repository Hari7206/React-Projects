import Hero from './components/Hero'
import './index.css'

function App() {
  return (
    <main className='relative min-h-screen w-full overflow-x-hidden'>
      <Hero />

      <section className='z-0 min-h-screen bg-blue-600'></section>
    </main>
  )
}

export default App