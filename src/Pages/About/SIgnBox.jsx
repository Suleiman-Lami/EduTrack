import React from 'react'
import './About.css'

const SIgnBox = () => {
  return (
    <div className='signBox'>
        <div className="wrap">
           <div className="signHead">
           <h2>Get started with Edutrack today</h2>
           <span>join Our Amazing users to enjoy the best we offer</span>
           </div>
           <div className="btnHolder">
            <input type="email" placeholder='Email@gmail.com'/>
            <button>Sign up - it’s free!</button>
           </div>
        </div>
    </div>
  )
}

export default SIgnBox