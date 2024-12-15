import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from "./components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </div>
     
    </>
  )
}

export default App
