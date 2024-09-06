import React from 'react'
import './Login.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Loginform from './Loginform';

const Login = () => {
  const Nav = useNavigate()
  return (
    <div className='Login'>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')}/></div> <div className="logo"></div> </aside>
    <main>
      <article></article>
      <Loginform/>
    </main>
  </div>
  )
}

export default Login