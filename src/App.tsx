import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import { Toaster } from 'sonner'
function App() {
 

  return (
    <>
    <Toaster richColors position="top-right" />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
