import React from 'react'
import './Admin.css'
import DashBoardHeader from '../DashboardHeader/AdmindashBoardHeader'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

const Admin = () => {
  return (
    <div className='admin-Dashboard'>
        <aside>
          <AdminSidebar/>
        </aside>
        <article>
          <DashBoardHeader/>
          <Outlet/>
        </article>
    </div>
  )
}

export default Admin
