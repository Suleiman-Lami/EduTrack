import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Frame 101424.svg'

const Footer = () => {
  const Nav = useNavigate()
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
  return ( 
    <div className='Footer'>
      <div className="footerWrap">
        <div className="footerTop">
        <div className="footerHead">
          
            <img src={Logo}/>
        
          <h2>EDUTRACK</h2>
        </div>
        <span>Keep track of your studies with EDUTRACK Easily manage your assignments, grades, and progress all in one place</span>
        </div>
        <hr />
        <div className="footerBottom">
          <span>©{currentYear} Edutrack app . All Rights Reserved. Terms & Privacy</span>
        </div>
      </div>
    </div>
  
  )
}

export default Footer