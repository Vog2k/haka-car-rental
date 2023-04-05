import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about' 
import CarList from '../pages/carList'
import CarIformation from '../pages/carIformation'
import Contact from '../pages/Contact'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/Home' element={<Home />} />
    <Route path='/CarList' element={<CarList />} />
    <Route path='/Car/:slug' element={<CarIformation />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/Sign&register' element={<About />} />
    

  </Routes>
}

export default Routers