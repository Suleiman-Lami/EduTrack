import React, { useState } from 'react'
import './Contact.css'
import SignModal from '../LandingPage/SignModal'
import Form from './Form'
import Dev from './Dev'
import Thanks from './Thanks'

const Contact = () => {
  return (
    <div className='Contact-Component'>
      <div className="wrap">
        <div className="contactHead">
          <h2>Interested in EduTrack School Management System?</h2>
          <span>We’d love to hear from you!</span>
        </div>
        <div className="contactBody">
          <Form/>
          <Dev/>
        </div>
      </div>
      <SignModal/>
    </div>
  )
}

export default Contact