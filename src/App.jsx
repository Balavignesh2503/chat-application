import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Chatpage from './pages/Chatpage'
import Signin from './pages/signin'
import ChatAppLandingPage from './pages/ChatAppLandingPage'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ChatAppLandingPage/>}></Route>
      <Route path='/chat' element={<Chatpage/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
