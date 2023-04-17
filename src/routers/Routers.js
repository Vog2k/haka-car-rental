import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about' 
import CarList from '../pages/CarList'
import CarIformation from '../pages/carIformation'
import Contact from '../pages/Contact'
import Login from '../pages/login'
import Account from '../pages/account'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home />} />
    <Route path='/cars' element={<CarList />} />
    <Route path='/cars/:slug' element={<CarIformation />} />
    <Route path='/account/:slug' element={<Account />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route exact path="/login" element={<Login />} />
    <Route path="/account" element={<Account />}/>
    

  </Routes>
}

export default Routers