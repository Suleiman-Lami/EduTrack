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
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav(-1)}/></div> <div className="logo"> <img src={Logo}/></div> </aside>
    <main>
      <article></article>
      <Loginform/>
    </main>
  </div>
  )
}

export default Login