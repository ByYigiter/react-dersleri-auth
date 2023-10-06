import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/login-page'
import HomePage from '../pages/home-page'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter