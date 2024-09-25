import React from 'react'
import './Student.css'
import { Navigate, Outlet } from 'react-router-dom'
import StudentsideBar from './StudentsideBar/StudentsideBar'
import StudentHeader from '../DashboardHeader/StudentHeader/StudentHeader'
import ScrollToTop from '../../Layout/ScrollToTop'
import { useSelector } from 'react-redux'

const Student = () => {
  const {user, isLoggedIn} = useSelector((state)=> state.eduTrack)
  if (!isLoggedIn && (user?.studentInfo?.role !== 'student')) {
    return <Navigate to="/studentLogin" replace />;
  }
  return (
    <div className='student-dashBoard'>
      <ScrollToTop/>
    <aside><StudentsideBar/></aside>
    <article>
        <StudentHeader/>
        <Outlet/>
    </article>
</div>
  )
}

export default Student