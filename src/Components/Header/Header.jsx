import React from 'react'
import './Header.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <div className="headerWrap">
        <div className="logoNav">
          <aside></aside>
          <article>
            <li>
              <NavLink
              to={'/'}
              style={
                ({isActive}) =>
                ({color: isActive? 'green': 'black'})
              }
              >
              Home<RiArrowDropDownLine size={25}/>
              </NavLink>
            </li>
            <li>Features<RiArrowDropDownLine size={25}/></li>
            <li>Resources<RiArrowDropDownLine size={25}/></li>
            <li>Pricing</li>
            <li><NavLink to={'About'} style={({isActive})=>({color: isActive? 'green': 'black'})}>About us</NavLink></li>
            <li><NavLink to={'Contact'} style={({isActive})=>({color: isActive? 'green': 'black'})}>Contact us</NavLink></li>
          </article>
        </div>
        <div className="auth">
          <button><NavLink to={'Login'} style={({isActive})=>({color: isActive? 'green': 'black'})}>Log In</NavLink></button>
          <button className='signUpBtn'><NavLink to={'signUp'} style={({isActive})=>({color: isActive? 'green': 'white'})}>Get EduTrack for free</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Header