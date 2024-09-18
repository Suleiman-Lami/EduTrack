import React, { useState, useEffect } from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { RiMenuUnfold2Fill, RiMenuUnfoldFill } from "react-icons/ri";
import Dropdown from './Dropdown';
import AOS from 'aos'
import "aos/dist/aos.css"
import Logo from '../../assets/Frame 101424.svg'

const Header = () => {
  const [showMenu, setShowMenu] = useState(0)
  const [dropDown, setDropDown] = useState(false)
  const [showLog, setShowLog] = useState(false)

  const Nav = useNavigate()

  const handleMenu =()=>{
    setShowMenu(1)
    setDropDown(true)
  }

  const handleMenuOut = () => {
    setShowMenu(0)
    setDropDown(false)
  }

  useEffect(() => {
    AOS.init();
    } )
  
  return (
    <div className='Header'>
      <div className="headerWrap">
        <div className="logoNav">
          <aside>
            <img src= {Logo}/>
          </aside>
          <article>
            <li> <NavLink to={'/'} style={({isActive}) =>({color: isActive? '#F4B400': '#003B31'})} > Home </NavLink> </li>
            <li><NavLink to={'/Features'} style={({isActive})=>({color: isActive? '#F4B400': '#003B31'})}>Features</NavLink></li>
            <li><NavLink to={'/Pricing'} style={({isActive})=>({color: isActive? '#F4B400': '#003B31'})}>Pricing</NavLink></li>
            <li><NavLink to={'/About'} style={({isActive})=>({color: isActive? '#F4B400': '#003B31'})}>About us</NavLink></li>
            <li><NavLink to={'/Contact'} style={({isActive})=>({color: isActive? '#F4B400': '#003B31'})}>Contact us</NavLink></li>
          </article>
        </div>
        <div className="auth">
        <div className="LoginBtn"  onClick={()=> setShowLog(!showLog)}>
            Log in
            {
              showLog ? 
              <div className="logDrop">
              <button onClick={()=>Nav('/login')}>Admin logIn</button>
              <button onClick={()=>Nav('/teacherlogin')}> Teacher logIn</button>
              <button onClick={()=>Nav('/studentLogin')}>Student Login</button>
              </div>: null
            }
          </div>
          <button className='signUpBtn'><NavLink to={'signUp'}>Register</NavLink></button>
        </div>
      <div className="menuHolder">
         { showMenu === 0 ?  <RiMenuUnfold2Fill size={35} onClick={handleMenu} />: showMenu == 1? <RiMenuUnfoldFill size={35} onClick={handleMenuOut}/>: null }
         { dropDown ? <div className='dropDown' data-aos="fade-left" data-aos-duration="2000" > <Dropdown setDropDown={setDropDown}/> </div> : null }
      </div>
      </div>
    </div>
  )
}

export default Header