import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import Register from './pages/register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
