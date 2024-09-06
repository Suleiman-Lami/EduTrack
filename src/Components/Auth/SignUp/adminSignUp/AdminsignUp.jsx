import React from 'react'
import './SignUp.css'
import Adminform from './Adminform'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const Nav = useNavigate();

  return (
    <div className='SignUp'>
      <aside>
        <div className="icon">
          <MdOutlineKeyboardBackspace size={30} onClick={() => Nav('/')} /> 
        </div>
        <div className="logo"></div>
      </aside>
      <main>
        <article></article>
        <Adminform />
      </main>
    </div>
  );
};

export default SignUp;
