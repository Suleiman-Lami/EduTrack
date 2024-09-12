import React from 'react'
import './StudentsideBar.css'
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/react.svg'

const StudentsideBar = () => {
  return (
    <div className='StudentsideBar'>
          <div className="box">
            <img src={logo} />
          </div>
            <nav>
            <li><NavLink   to='/StudentProfile' style={({isActive})=> ({color: isActive ? ' #003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff': ' #003B31'})}><PiStudent/>Dashboard</NavLink></li>
            {/* <li><NavLink  to='/students' style={({isActive})=> ({color: isActive ? 'white' : '#ebebeb'})}><PiStudent />Students</NavLink></li> */}
            </nav>
        <li className='logout'><CiLogout /> Log Out</li>
    </div>
  )
}

export default StudentsideBar