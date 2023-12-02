import './App.css'
import { Routes, Route } from 'react-router-dom'
import Principal from './pages/Principal'
import About from './pages/About'

function App () {
  return (
    <>
      <nav>
        NAVBAR
      </nav>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
