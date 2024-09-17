import React from 'react'
import './Layout.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <div className='Layout'>
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout