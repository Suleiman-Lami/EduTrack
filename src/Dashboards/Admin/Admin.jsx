import React from 'react'
import './Admin.css'
import DashBoardHeader from '../DashboardHeader/AdmindashBoardHeader'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import ScrollToTop from '../../Layout/ScrollToTop'

const Admin = () => {
  return (
    <div className='admin-Dashboard'>
      <ScrollToTop/>
        <div className='adminAside'>
          <AdminSidebar/>
        </div>
        <article>
          <DashBoardHeader/>
          <Outlet/>
        </article>
    </div>
  )
}

export default Admin
