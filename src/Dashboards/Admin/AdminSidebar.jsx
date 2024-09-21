import React, { useEffect } from 'react';
import './Admin.css';
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import Logo from '../../assets/react.svg';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout, logout } from '../../Global/Slice';

const AdminSidebar = ({ setShowSidebar }) => {
  const loginfo = useSelector((state)=> state.eduTrack.user)
  const dispatch = useDispatch()
  const Nav = useNavigate()

  const handleLogout =() =>{
    Nav('/')
    dispatch(adminLogout())
    console.log('clicked');
    
  }

  useEffect(() => {
    Aos.init();
  }, []);

  const schoolID = localStorage.getItem('schoolID');

  return (
    <div className='adminSideBar' data-aos="fade-right">
      <div className="box">
        <img src={loginfo?.schoolInfo?.schoolPicture} />
      </div>
      <nav>
        <li onClick={() => setShowSidebar(false)}>
          <NavLink 
            to={`/admin/${schoolID}`}
            style={({ isActive }) => ({ color: isActive ? '#003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff' : '#003B31' })}
          >
            <IoHomeOutline /> Dashboard
          </NavLink>
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <NavLink 
            to='/teachers' 
            style={({ isActive }) => ({ color: isActive ? '#003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff' : '#003B31' })}
          >
            <BsPersonRolodex className='staffColor' /> Staffs
          </NavLink>
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <NavLink 
            to='/Suspend' 
            style={({ isActive }) => ({ color: isActive ? '#003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff' : '#003B31' })}
          >
            Suspended 
          </NavLink>
        </li>
        <li>
        <NavLink 
            to='/student' 
            state={{ schoolID }} 
            style={({ isActive }) => ({ color: isActive ? '#003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff' : '#003B31' })}
          >
            <PiStudent /> Students
          </NavLink>
        </li>
      </nav>
      <li className='logout' onClick={handleLogout}><CiLogout /> Log Out</li>
    </div>
  );
}

export default AdminSidebar;
