import React, { useEffect, useState } from 'react';
import './Forgot.css';
import Reset from './Reset';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners'

const Forgotform = () => {
    const [showReset, setShowReset] = useState(false);
    const [loading , setLoading] = useState(false)
    const Nav = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault(); 
        setShowReset(true); 
    };

    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <>
        <form onSubmit={handleContinue} data-aos="fade-left" data-aos-duration="3000" >
            <header>
                <div className="Icon"></div>
                <h2>Forgot Password?</h2>
                <span>
                    Enter the email address you used to register. We will send you an email with instructions to reset your password.
                </span>
            </header>
            <section>
                <label>Email Address</label>
                <input type="email" placeholder='Example@gmail.com' />
            </section>
            <button type="submit">
            { loading ? <ClipLoader color='#ffffff'/> : 'Continue'}
            </button>
        </form>
        {
                showReset && (
                    <div className="Reset-Component">
                        <Reset />
                    </div>
                )
            }
        </>
    );
};

export default Forgotform;
