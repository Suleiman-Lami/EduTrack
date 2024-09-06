import React from 'react'
import './TeacherSignUp.css'
import Teacherform from './Teacherform'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const TeacherSignUp = () => {
  const Nav = useNavigate()
  return (
    <div className='teacherSignup'>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')}/></div> <div className="logo"></div> </aside>
    <main>
      <article></article>
      <Teacherform/>
    </main>
  </div>
  )
}

export default TeacherSignUp