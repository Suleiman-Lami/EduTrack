import React from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Forgotform from './Forgotform';
import Logo from '../../../../assets/Frame 101424.svg'

const Forgot = () => {
    const Nav = useNavigate()
    return (
      <div className='forgot-component'>
      <aside> 
        <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav(-1)}/></div> 
        <div className="logo">
          <img src={Logo}/></div> 
        </aside>
      <main>
        <article></article>
        <Forgotform/>
      </main>
    </div>
    )
}

export default Forgot