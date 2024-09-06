import React from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Forgotform from './Forgotform';


const Forgot = () => {
    const Nav = useNavigate()
    return (
      <div className='forgot-component'>
      <aside> 
        <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')}/></div> 
        <div className="logo"></div> 
        </aside>
      <main>
        <article></article>
        <Forgotform/>
      </main>
    </div>
    )
}

export default Forgot