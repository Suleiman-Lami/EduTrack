import React, { useEffect, useState } from 'react'
import './StudentHeader.css'
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import StudentsideBar from '../../Student/StudentsideBar/StudentsideBar';
import Notify from '../../Notifications/Notify';
import { useSelector } from 'react-redux';

const StudentHeader = () => {
    const loginfo = useSelector((state)=> state.eduTrack.user)
    const [showSidebar, setShowSidebar] = useState(false);
    const [showNotify, setShowNotify] = useState(false)
    const [path, setPath] = useState('');
    const { pathname } = useLocation(); 
    const Nav = useNavigate();
  
    useEffect(() => {
      const title = pathname.slice(1); 
      setPath(title);
      console.log(title);
    }, [pathname]);
  
    return (
      <div className='student-dashBoardHeader'>
        <div className="Menu">
          <AiOutlineMenuUnfold className='icon' onClick={() => setShowSidebar(!showSidebar)} />
          {showSidebar && (
            <div className="sideBar">
              <StudentsideBar setShowSidebar={setShowSidebar}/>
            </div>
          )}
        </div>
        <span>{path}</span>
        <div className="profile">
        <div className="profileIcon"><IoIosNotifications className='icon' onClick={()=>setShowNotify(!showNotify)}/>
        {
            showNotify ? <div className="NotifyBox">
              <Notify/>
            </div> : null
          }
        </div>
          <div className="user">
            <img src={loginfo.studentInfo.studentProfile}/>
          </div>
        </div>
      </div>
  )
}

export default StudentHeader