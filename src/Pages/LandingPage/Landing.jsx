import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Provide from './Provide'
import Values from './Values'
import SignModal from './SignModal'
import './Landing.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useSelector } from 'react-redux'
const Landing = () => {
  const loginInfo = useSelector((state)=>state.eduTrack.isLoggedIn)
  console.log(loginInfo);
  

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='landing-Component'>
      <div className="Intro">
      <div className="textArea">
        <p>Attendance Management</p>
        <h1>Quickly & Accurately Account For Students</h1>
        <span>Dynamic attendance software enhancing school efforts against chronic absenteeism and promoting student achievement.</span>
        {
          loginInfo === false ?
          <button><NavLink to={'signUp'}>Sign up- it’s free!</NavLink></button>
          :
          null
        }
      </div>
      </div>
      <div className="whyEdutrack">
        <h2>Why choose Edutrack? </h2>
          <span  data-aos="fade-up" data-aos-duration="3000">Edutrack helps private schools keep track of students, and communicate with parents easily. We make it simple to keep students safe and supported. Edutrack is a feature packed attendance software that records attendance in real-time for staff at a click, get real time classroom ratios and much more</span>
      </div>
      <Provide/>
      <Values/>
      <SignModal loginInfo={loginInfo}/>
    </div>
  )
}

export default Landing