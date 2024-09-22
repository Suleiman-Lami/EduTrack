import React from 'react'
import './Login.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loginform from './Loginform';
import Logo from '../../../assets/Frame 101424.svg'
import ScrollToTop from '../../../Layout/ScrollToTop';

const Login = () => {
  const Nav = useNavigate()
  return (
    <div className='Login'>
      <ScrollToTop/>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')}/></div> <div className="logo"> <img src={Logo}/></div> </aside>
    <main>
      <article>
        <img src="https://res.cloudinary.com/djhuirix9/image/upload/v1726968292/three_c99b9u.jpg"/>
      </article>
      <Loginform/>
    </main>
  </div>
  )
}

export default Login