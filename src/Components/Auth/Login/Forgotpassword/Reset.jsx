import React, { useEffect, useState } from 'react';
import './Forgot.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {ClipLoader} from 'react-spinners'


const Reset = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [loading , setLoading] = useState(false)

    const Nav = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault(); 
        setTimeout(() => {
            Nav('/Login');
        }, 1000);
    };

    const MyshowPassword = ()=> {
        setShowPassword(false)
     }

     useEffect(()=>{
        Aos.init();
      },[])

    return (
        <form onSubmit={handleContinue} className='form' data-aos="zoom-in-down">
            <header>
                <h2>Reset Password</h2>
                <span> 
                    Input your new password below so that you can login and access all features.
                </span>
            </header>
            <section className='resetSection'>
                <label>New password</label>
                <div className='inputPasswordDiv'>
                <input type={showPassword ? "password" : "text"} placeholder='********'/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
                </section>
            <button type="submit">
            { loading ? <ClipLoader color='#ffffff'/> : 'Submit'}
                </button>
        </form>
    );
};

export default Reset;
