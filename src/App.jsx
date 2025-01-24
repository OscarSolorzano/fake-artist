import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cards/:players' element={<Cards />} />
        </Routes>
  )
}

export default App
