import React, { useEffect, useState } from 'react'
import './DashBoardHeader.css'
import { TbUserSearch } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import AdminSidebar from '../Admin/AdminSidebar';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Notify from '../Notifications/Notify';
import { loginInfo } from '../../Global/Slice';
import { useSelector } from 'react-redux';

const DashBoardHeader = () => {
  const loginfo = useSelector((state)=> state.eduTrack.user)
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotify, setShowNotify] = useState(false)
  const [path, setPath] = useState('');
  const { pathname } = useLocation(); 
  const Nav = useNavigate();
  const schoolID = useParams();

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
            <AdminSidebar  setShowSidebar={setShowSidebar}/>
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
        <div className="profileIcon"><IoIosNotifications className='icon' onClick={()=>setShowNotify(!showNotify)}/>
          {
            showNotify ? <div className="NotifyBox">
              <Notify/>
            </div> : null
          }
        </div>
        <div className="user">
        <img src={loginfo.schoolInfo.schoolPicture} onClick={()=>Nav(`/AdminProfile/${schoolID}`)}/>            
          </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
