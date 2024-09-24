import React from 'react'
import './StudentsideBar.css'
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout} from '../../../Global/Slice';

const StudentsideBar = ({setShowSidebar}) => {
  const loginfo = useSelector((state)=> state.eduTrack.user)
  console.log(loginfo);
  
  const Nav = useNavigate();
  const dispatch = useDispatch();


  const studentLogout = ()=>{
  dispatch(logout ());
    Nav('/')
  }
  

  return (
    <div className='StudentsideBar'>
          <div className="box">
            <img src={loginfo?.studentInfo?.school?.schoolPicture} />
          </div>
            <nav>
            <li onClick={()=>setShowSidebar(false)}><NavLink   to='/StudentProfile' style={({isActive})=> ({color: isActive ? ' #003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff': ' #003B31'})}><PiStudent/>Dashboard</NavLink></li>
            </nav>
        <li className='logout' onClick={studentLogout}><CiLogout /> Log Out</li>
    </div>
  )
}

export default StudentsideBar