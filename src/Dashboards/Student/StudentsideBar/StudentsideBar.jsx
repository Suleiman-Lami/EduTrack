import React from 'react'
import './StudentsideBar.css'
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const StudentsideBar = () => {
  return (
    <div className='StudentsideBar'>
          <div className="box"></div>
        <li><NavLink   to='/StudentProfile' style={({isActive})=> ({color: isActive ? 'white' : '#ebebeb'})}><PiStudent/>Dashboard</NavLink></li>
        {/* <li><NavLink  to='/students' style={({isActive})=> ({color: isActive ? 'white' : '#ebebeb'})}><PiStudent />Students</NavLink></li> */}
        <li className='logout'><CiLogout /> Log Out</li>
    </div>
  )
}

export default StudentsideBar