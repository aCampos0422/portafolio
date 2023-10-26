import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  

  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </main>
  )
}

export default App
