import React, { useState } from 'react';
import './Forgot.css';
import Reset from './Reset';

const Forgotform = () => {
    const [showReset, setShowReset] = useState(false);

    const handleContinue = (e) => {
        e.preventDefault(); 
        setShowReset(true); 
    };

    return (
        <>
        <form onSubmit={handleContinue}>
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
            <button type="submit">Continue</button>
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
