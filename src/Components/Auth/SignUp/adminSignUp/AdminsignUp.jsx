import React from 'react'
import './SignUp.css'
import Adminform from './Adminform'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/Frame 101424.svg'

const SignUp = () => {
  const Nav = useNavigate();

  return (
    <div className='SignUp'>
      <aside>
        <div className="icon">
          <MdOutlineKeyboardBackspace size={30} onClick={() => Nav(-1)} /> 
        </div>
        <div className="logo">
          <img src={Logo}/>
        </div>
      </aside>
      <main>
        <article>
          <img src={'https://res.cloudinary.com/djhuirix9/image/upload/v1726591105/jpg_c2pgv8.jpg'}/>
        </article>
        <Adminform />
      </main>
    </div>
  );
};

export default SignUp;
