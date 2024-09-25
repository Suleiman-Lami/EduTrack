import React from 'react'
import './Teacher.css'
import DashBoardHeader from '../DashboardHeader/AdmindashBoardHeader'
import { Navigate, Outlet } from 'react-router-dom'
import TeacherSideBar from './TeacherSideBar'
import TeacherDashboardHeader from '../DashboardHeader/TeacherDashboardHeader'
import ScrollToTop from '../../Layout/ScrollToTop'
import { useSelector } from 'react-redux'

const Teacher = () => {
  const {user, isLoggedIn} = useSelector((state)=> state.eduTrack)
  if (!isLoggedIn && user?.schoolInfo?.role !== 'teacher') {
    return <Navigate to="/teacherlogin" replace />;
  }
  return (
    <div className='teacher-dashBoard'>
      <ScrollToTop/>
        <aside><TeacherSideBar/></aside>
        <article>
            <TeacherDashboardHeader/>
            <Outlet/>
        </article>
    </div>
  )
}

export default Teacher