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
        <div className="footerExtras">
        <div className="footerExtra first-child">
        <div className="logoWrapper">
            <img src={Logo}/>
        
          <h2>EDUTRACK</h2>

        </div>
        <p>EduTrack makes sure every school day matters. Our app makes attendance easy to track, keeps parents informed, and helps schools keep students on track for success.</p>
        </div>
        <div className='footerExtra second-child'> 
          <ul>
            <li>Company</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Pricing</li>
          </ul>
          <ul>
            <li>Support & Log In</li>
            <li>Contact Us</li>
            <li>Admin Login</li>
            <li>Teachers Login</li>
            <li>Parents/Students Login</li>
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