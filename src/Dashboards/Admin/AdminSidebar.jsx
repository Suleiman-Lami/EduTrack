import React from 'react';
import './Admin.css';
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className='adminSideBar'>
      <div className="box"></div>
      
        <li>
        <NavLink to='/admin' style={({isActive})=> ({color: isActive ? '003B31' : '#ebebeb'})}>
          <IoHomeOutline /> Dashboard
        </NavLink>
        </li>
        <li>
        <NavLink to='/teachers' style={({isActive})=> ({color: isActive ? '003B31' : '#ebebeb'})}>
          <BsPersonRolodex /> Staffs
        </NavLink>
        </li>
        <li>
        <NavLink to='/students' style={({isActive})=> ({color: isActive ? '003B31' : '#ebebeb'})}>
          <PiStudent /> Students
        </NavLink>
        </li>
      
      
      <li className='logout'><CiLogout /> Log Out</li>
    </div>
  );
}

export default AdminSidebar;
