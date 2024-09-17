import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Frame 101424.svg'

const Footer = () => {
  const Nav = useNavigate()
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
  return ( 
    <footer className='Footer'>
      {/* <div className="footerWrap"> */}
        <div className="footerTop">
        <div className="footerTop1">
        <div className="logoWrapper">
            <img src={Logo}/> <h2>EDUTRACK</h2>
        </div>
        <span>EduTrack makes sure every school day matters. Our app makes attendance easy to track, keeps parents informed, and helps schools keep students on track for success.</span>
        </div>
        <div className='footerTop2'> 
          <ul>
            <li className='head'>Company</li>
          <li onClick={()=>Nav('/')}>Home</li>
          <li onClick={()=>Nav('/about')}>About Us</li>
          <li onClick={()=>Nav('/Features')}>Features</li>
          <li onClick={()=>Nav('/Pricing')}>Pricing</li>
          </ul>
          <ul>
            <li className='head'> Support & Log In</li>
            <li>Contact Us</li>
            <li onClick={()=>Nav('/login')}>Admin Login</li>
            <li onClick={()=>Nav('/login')}>Teachers Login</li>
            <li onClick={()=>Nav('/login')}>Parents/Students Login</li>
          </ul>
        </div>
        </div>
        <hr />
        <div className="footerBottom">
          <span>©{currentYear} Edutrack app . All Rights Reserved. Terms & Privacy</span>
        </div>
      {/* </div> */}
    </footer>
  
  )
}

export default Footer