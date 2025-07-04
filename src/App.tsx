import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import { Toaster } from 'sonner'
import Quiz from "./Pages/Quiz"
import Feedback from './Pages/Feedback'

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  )
}

export default App
