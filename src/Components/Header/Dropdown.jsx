import React from 'react'
import './Dropdown.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList, MdOutlineRoundaboutRight  } from "react-icons/md";
import { IoIosPricetags,  IoMdContact } from "react-icons/io";

const Dropdown = () => {
  return (
    <div className='drop'>
         <li> <NavLink to={'/'} style={({isActive}) =>({color: isActive? '#07b598': '#003B31'})} ><FaHome /> Home </NavLink> </li>
            <li><NavLink to={'About'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <MdFeaturedPlayList />Features</NavLink></li>
            <li><NavLink to={'About'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <IoIosPricetags />Pricing</NavLink></li>
            <li><NavLink to={'About'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <MdOutlineRoundaboutRight />About us</NavLink></li>
            <li><NavLink to={'Contact'} style={({isActive})=>({color: isActive? '#07b598': '#003B31'})}> <IoMdContact />Contact us</NavLink></li>

            <div className="auth">
          <button><NavLink to={'Login'}>Log In</NavLink></button>
          <button><NavLink to={'signUp'}>Register</NavLink></button>
        </div>
    </div>
  )
}

export default Dropdown