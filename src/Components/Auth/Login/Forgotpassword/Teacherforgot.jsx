import React from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Logo from '../../../../assets/Frame 101424.svg'
import ScrollToTop from '../../../../Layout/ScrollToTop';
import TFform from './TFform';

const Teacherforgot = () => {
    const Nav = useNavigate()
    return (
      <div className='forgot-component'>
        <ScrollToTop/>
      <aside> 
        <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav(-1)}/></div> 
        <div className="logo">
          <img src={Logo}/></div> 
        </aside>
      <main>
        <article>
            <img src="https://res.cloudinary.com/djhuirix9/image/upload/v1726968444/five_icrucx.jpg"/>
        </article>
        <TFform/>
      </main>
    </div>
    )}

export default Teacherforgot