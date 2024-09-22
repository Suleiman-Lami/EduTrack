import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import StudentLoginform from './StudentLoginform';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Frame 101424.svg'


const StudentLogin = () => {
    const Nav = useNavigate()
  return (
    <div className='Login'>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')}/></div> <div className="logo"> <img src={Logo}/></div> </aside>
    <main>
      <article>
        <img src="https://res.cloudinary.com/djhuirix9/image/upload/v1726968292/three_c99b9u.jpg" />
      </article>
      <StudentLoginform/>
    </main>
  </div>
  )
}

export default StudentLogin