import React from 'react'
import './Teacher.css'
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const TeacherSideBar = () => {
  return (
    <div className='teacherSideBar'>
    <div className="box"></div>
        <li><NavLink   to='/teacher' style={({isActive})=> ({color: isActive ? '#003B31' : '#ffffff',backgroundColor: isActive? '#ffffff': '#003B31'})}><IoHomeOutline/>Dashboard</NavLink></li>
        <li><NavLink  to='/Allstudent' style={({isActive})=> ({color: isActive ? '#003B31' : '#ffffff',backgroundColor: isActive? '#ffffff': '#003B31'})}><PiStudent />Students</NavLink></li>
        <li className='logout'><CiLogout /> Log Out</li>
</div>
)
  
}

export default TeacherSideBar