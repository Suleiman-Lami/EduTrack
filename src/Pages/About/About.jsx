import React from 'react'
import './About.css'
import Story from './Story'
import Leadership from './Leadership'
import SIgnBox from './SIgnBox'

const About = () => {
  return (
    <div className='About-Componnt'>
      <div className="aboutIntro">
        <div className="textArea">
          <h2>Education opens doors to new opportunities and  a brighter future. Learn today, lead tomorrow.</h2>
          <span>We are Driven by Passion, Built on Trust. This is How We’re Making a Difference Every Day.</span>
          <button>Sign up - it’s free!</button>
        </div>
      </div>
        <Story/>
        <Leadership/>
        <SIgnBox/>
    </div>
  )
}

export default About