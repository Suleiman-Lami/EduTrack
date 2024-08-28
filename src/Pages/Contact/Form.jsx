import React from 'react'
import './Contact.css'

const Form = () => {
  return (
    <form>
       <div className="formHold">
        <label>Name</label>
        <input type="Name" placeholder=' Your full Name' />
        <label>Emaill</label>
        <input type="email" placeholder='Email@gmail.com' />
        <label>Contact Number</label>
        <input type="Number" placeholder='Number with country code' />
        <label>Location</label>
        <input type="place" placeholder='City Name' />
       </div>

       <article>
        <label>Kindly, select your interest</label>
        <div className="Options">
            <div className="box"> I want to use Edutrack Manage my Institution</div>
            <div className="box">I want to resell Edutrack Become a Partner </div>
        </div>
       </article>

       <label>Message</label>
       <input type="text" placeholder='if you have a specific message about Edutrack'/>
        
    </form>
  )
}

export default Form