import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About' 
import CarList from '../pages/carList'
import CarIformation from '../pages/carIformation'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/Home' element={<Home />} />
    <Route path='/CarList' element={<CarList />} />
    <Route path='/Car/:slug' element={<CarIformation />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact us' element={<contact />} />

  </Routes>
}

export default Routers