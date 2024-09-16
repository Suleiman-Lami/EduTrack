import React, { useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Form = () => {
  const [show, setShow]=useState(false)
  const nav = useNavigate()
  return (
    <>
{  
  show === false?
  
  <form>
       <div className="formHold">
        <label>Name</label>
        <input type="Name" placeholder=' Your full Name' />
        <label>Emaill</label>
        <input type="email" placeholder='Email@gmail.com' />
        <label>Contact Number</label>
        <input type="number" placeholder='Number with country code' />
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
       <button onClick={()=>setShow(true)}>Next</button>
    </form>:
        <form>
          <div className="formHead">
            <div className="iconHolder"><AiOutlineLoading3Quarters color='#F4B400' size={70}/>
            </div>
            <div className="textArea">
              <h1> You're almost done </h1>
              <span>Kindly,fill in the below details </span>
            </div>
          </div>

          <div className="formHold">
            <label>Name of institution</label>
            <input type="school" placeholder='Name of  Institution' />
            <label>Institution Type</label>
            <input type="school" />
            <label>Your Role in the Institution</label>
            <input type="school" placeholder='Your role in the Institution' />
            <label>Website Link</label>
            <input type="school" placeholder='Website Link' />
          </div>
          <button onClick={()=>nav('/Thanks')}>Submit</button>
        </form>
  }
  </>
  )
}

export default Form