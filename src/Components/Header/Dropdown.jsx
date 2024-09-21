import React from 'react'
import './Dropdown.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList, MdOutlineRoundaboutRight  } from "react-icons/md";
import { IoIosPricetags,  IoMdContact } from "react-icons/io";

const Dropdown = ({setDropDown}) => {
  return (
    <div className='drop'>
         <li onClick={()=> setDropDown(false)}> <NavLink to={'/'} style={({isActive}) =>({color: isActive? '#07b598': '#003B31'})} ><FaHome /> Home </NavLink> </li>
            <li onClick={()=> setDropDown(false)}><NavLink to={'Features'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <MdFeaturedPlayList />Features</NavLink></li>
            <li onClick={()=> setDropDown(false)}><NavLink to={'Pricing'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <IoIosPricetags />Pricing</NavLink></li>
            <li onClick={()=> setDropDown(false)}><NavLink to={'About'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <MdOutlineRoundaboutRight />About us</NavLink></li>
            <li onClick={()=> setDropDown(false)}><NavLink to={'Contact'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <IoMdContact />Contact us</NavLink></li>

            <div className="auth">
            <button><NavLink to={'login'}>Admin logIn</NavLink></button>
              <button><NavLink to={'teacherlogin'}> Teacher logIn</NavLink></button>
              <button><NavLink to={'studentLogin'}>Student Login</NavLink></button>     
              <button><NavLink to={'signUp'}>Register</NavLink></button>
        </div>
    </div>
  )
}

export default Dropdown