import React, { useState } from 'react';
import './Forgot.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Reset = () => {
    const [showPassword, setShowPassword] = useState(true)
    const Nav = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault(); 
        setTimeout(() => {
            Nav('/');
        }, 1000);
    };

    const MyshowPassword = ()=> {
        setShowPassword(false)
     }

    return (
        <form onSubmit={handleContinue} className='form'>
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default Reset;
