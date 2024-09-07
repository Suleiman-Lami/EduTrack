import React from 'react'
import './StudentOnboard.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';

const StudentOnboard = () => {
  const Nav = useNavigate()
  return (
    <div className='studentSignup'>
    <main>
      <StudentForm/>
    </main>
  </div>
  )
}

export default StudentOnboard