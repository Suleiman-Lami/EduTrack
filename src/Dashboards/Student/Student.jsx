import React from 'react'
import './Student.css'
import { Outlet } from 'react-router-dom'
import StudentsideBar from './StudentsideBar/StudentsideBar'
import StudentHeader from '../DashboardHeader/StudentHeader/StudentHeader'
import ScrollToTop from '../../Layout/ScrollToTop'

const Student = () => {
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