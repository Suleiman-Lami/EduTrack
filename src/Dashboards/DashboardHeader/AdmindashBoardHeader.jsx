import React, { useEffect, useState } from 'react'
import './DashBoardHeader.css'
import { TbUserSearch } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import AdminSidebar from '../Admin/AdminSidebar';
import { useLocation } from 'react-router-dom';

const DashBoardHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [path, setPath] = useState('');
  const { pathname } = useLocation(); 

  useEffect(() => {
    const title = pathname.slice(1); 
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
        <div className="profileIcon"><IoIosNotifications className='icon' /></div>
        <div className="user"><FaUserCircle size={50} className='icon' /></div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
