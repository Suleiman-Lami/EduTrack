import React from 'react'
import './StudentOnboard.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';

const StudentOnboard = () => {
  const Nav = useNavigate()
  return (
    <div className='studentSignup'>
    <aside> <div className="icon"><MdOutlineKeyboardBackspace size={30} onClick={Nav('/')}/></div> <div className="logo"></div> </aside>
    <main>
      <article></article>
      <StudentForm/>
    </main>
  </div>
  )
}

export default StudentOnboard