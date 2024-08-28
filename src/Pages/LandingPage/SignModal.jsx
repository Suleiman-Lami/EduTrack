import React from 'react'
import './Landing.css'

const SignModal = () => {
  return (
    <div className="miniSignUpBox">
    <div className="miniSBwrap">
      <h3>Get started with EduTrack today</h3>
      <span>Join our Amazing to enjoy the best we Offer</span>
      <button onClick={()=>Nav('signUp')}>Sign up - it’s free!</button>
    </div>
  </div>
  )
}

export default SignModal