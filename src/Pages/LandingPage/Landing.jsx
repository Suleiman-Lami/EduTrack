import React from 'react'
import { NavLink } from 'react-router-dom'
import Provide from './Provide'
import Values from './Values'
import SignModal from './SignModal'
import './Landing.css'
const Landing = () => {
  return (
    <div className='landing-Component'>
      <div className="Intro">
      <div className="textArea">
        <p>Attendance Management</p>
        <h1>Quickly & Accurately Account For Students</h1>
        <span>Dynamic attendance software enhancing school efforts against chronic absenteeism and promoting student achievement.</span>
        <button><NavLink to={'signUp'}>Sign up- it’s free!</NavLink></button>
      </div>
      </div>
      <div className="whyEdutrack">
        <h2>Why choose Edutrack? </h2>
          <span>Edutrack helps private schools keep track of students, and communicate with parents easily. We make it simple to keep students safe and supported. Edutrack is a feature packed attendance software that records attendance in real-time for staff at a click, get real time classroom ratios and much more</span>
      </div>
      <Provide/>
      <Values/>
      <SignModal/>
    </div>
  )
}

export default Landing