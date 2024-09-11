import React, { useEffect } from 'react';
import './Admin.css';
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

const AdminSidebar = ({setShowSidebar}) => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='adminSideBar' data-aos="fade-right">
      <div className="box"></div>
      
        <li onClick={()=>setShowSidebar(false)}>
        <NavLink to='/admin' style={({isActive})=> ({color: isActive ? '#003B31' : '#ffffff',backgroundColor: isActive? '#ffffff': '#003B31'})}>
          <IoHomeOutline /> Dashboard
        </NavLink>
        </li>
        <li onClick={()=>setShowSidebar(false)}>
        <NavLink to='/teachers' style={({isActive})=> ({color: isActive ? '#003B31' : '#ffffff',backgroundColor: isActive? '#ffffff': '#003B31'}) }>
          <BsPersonRolodex  className='staffColor' /> Staffs
        </NavLink>
        </li>
        <li onClick={()=>setShowSidebar(false)}>
        <NavLink to='/students' style={({isActive})=> ({color: isActive ? '#003B31' : '#ebebeb',backgroundColor: isActive? '#ffffff': '#003B31'})}>
          <PiStudent /> Students
        </NavLink>
        </li>
      
      
      <li className='logout'><CiLogout /> Log Out</li>
    </div>
  );
}

export default AdminSidebar;
