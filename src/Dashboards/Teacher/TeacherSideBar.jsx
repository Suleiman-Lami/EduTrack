import React from 'react'
import './Teacher.css'
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/react.svg'
import { useDispatch, useSelector } from 'react-redux';
import { logout} from '../../Global/Slice';

const TeacherSideBar = () => {
  const loginfo = useSelector((state)=> state.eduTrack.user)
  const TeacherID = localStorage.getItem('teacherID');
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const { teacherID} = useParams();

  const logOut =()=>{
    dispatch(logout())
    Nav('/')
  }

  return (
    <div className='teacherSideBar'>
    <div className="box">
      <img src={loginfo.teacherInfo.schoolPicture}/>
    </div>
       <nav>
       <li>
        <NavLink  
         to={`/teacher/${teacherID}`}
        //  state={{ teacherID}}
         style={({isActive})=> ({color: isActive ? '#003B31' : '#ffffff',backgroundColor: isActive? '#ffffff': '#003B31'})}><IoHomeOutline/>Dashboard</NavLink></li>
       <li>
  <NavLink 
    to='/Allstudent' 
    state={{ TeacherID}}
    style={({isActive}) => ({color: isActive ? '#003B31' : '#ffffff', backgroundColor: isActive ? '#ffffff' : '#003B31'})}>
    <PiStudent /> Students
  </NavLink>
</li>
       </nav>
        <li className='logout' onClick={logOut}><CiLogout /> Log Out</li>
</div>
)
  
}

export default TeacherSideBar