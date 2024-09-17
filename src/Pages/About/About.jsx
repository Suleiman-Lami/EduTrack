import React from 'react'
import './About.css'
import Story from './Story'
import Leadership from './Leadership'
import SignModal from '../LandingPage/SignModal'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const Nav = useNavigate();

  return (
    <div className='About-Componnt'>
      <div className="aboutIntro">
        <div className="textArea">
          <h2>Education opens doors to new opportunities and  a brighter future. Learn today, lead tomorrow.</h2>
          <span>We are Driven by Passion, Built on Trust. This is How We’re Making a Difference Every Day.</span>
          <button onClick={()=>Nav('/signup')}>Sign up - it’s free!</button>
        </div>
      </div>
        <Story/>
        <Leadership/>
        <SignModal/>
    </div>
  )
}

export default About