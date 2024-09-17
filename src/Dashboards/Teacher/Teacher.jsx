import React from 'react'
import './Teacher.css'
import DashBoardHeader from '../DashboardHeader/AdmindashBoardHeader'
import { Outlet } from 'react-router-dom'
import TeacherSideBar from './TeacherSideBar'
import TeacherDashboardHeader from '../DashboardHeader/TeacherDashboardHeader'
import ScrollToTop from '../../Layout/ScrollToTop'

const Teacher = () => {
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