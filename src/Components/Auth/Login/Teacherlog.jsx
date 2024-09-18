import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Teacherlogform from './Teacherlogform';
import Logo from '../../../assets/Frame 101424.svg'

const Teacherlog = () => {
    const Nav = useNavigate()
  return (
    <div className='Login'>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav(-1)}/></div> <div className="logo"> <img src={Logo}/></div> </aside>
    <main>
      <article></article>
      <Teacherlogform/>
    </main>
  </div>
  )
}

export default Teacherlog