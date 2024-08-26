import React from 'react'
import './Layout.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='Layout'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout