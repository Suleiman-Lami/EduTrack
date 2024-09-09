import React, { useEffect, useState } from 'react'
import './DashBoardHeader.css'
import { TbUserSearch } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import AdminSidebar from '../Admin/AdminSidebar';
import { useLocation, useNavigate } from 'react-router-dom';


const TeacherDashboardHeader = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [path, setPath] = useState('');
    const { pathname } = useLocation(); 
    const Nav = useNavigate();
  
    useEffect(() => {
      const title = pathname.slice(7); 
      setPath(title);
      console.log(title);
    }, [pathname]);
  
    return (
      <div className='admin-dashBoardHeader'>
        <div className="Menu">
          <AiOutlineMenuUnfold className='icon' onClick={() => setShowSidebar(!showSidebar)} />
          {showSidebar && (
            <div className="sideBar">
              <AdminSidebar />
            </div>
          )}
        </div>
        <span>{path}</span>
        <div className="searchBar">
          <input type="text" placeholder='Search for teachers' />
          <div className="searchIcon">
            <TbUserSearch color='#003B31' size={20} style={{ cursor: 'pointer' }} /> 
          </div>
        </div>
        <div className="profile">
        <div className="profileIcon"><IoIosNotifications className='icon' onClick={()=>Nav('/notifications')}/></div>
          <div className="user"><FaUserCircle size={50} className='icon' onClick={()=>Nav('/profile')}/></div>
        </div>
      </div>
    );
}

export default TeacherDashboardHeader