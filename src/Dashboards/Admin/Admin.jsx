import React from 'react'
import './Admin.css'
import DashBoardHeader from '../DashboardHeader/AdmindashBoardHeader'
import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import ScrollToTop from '../../Layout/ScrollToTop'
import { useSelector } from 'react-redux'

const Admin = () => {
  const {user, isLoggedIn} = useSelector((state)=> state.eduTrack)

  if (!isLoggedIn && user?.schoolInfo?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
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
