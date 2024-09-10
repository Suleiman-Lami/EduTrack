import React from 'react'
import './Teacherprofile.css'
import { useNavigate } from 'react-router-dom'
import values from '../../../assets/WOMAN_WRITING.png'
import { IoCameraOutline } from "react-icons/io5";


const Teacherprofile = () => {
    const Nav = useNavigate();
  return (
    <div className='Teacherprofile'>
    <h3>Profile info</h3>
    <div className="profileBody">
      <div className="imgHolder">
        <div className="imgBox">
          <img src={values}/>
        </div>
      </div>
      <form>
       <section>
        <label>fullName:</label>
        <span>Suleiman Ramotu Lami Omoroh</span>
        </section> 
       <section>
        <label>Email:</label>
        <span>Example@gmail.com</span>
        </section> 
       <section>
        <label>Address:</label>
        <span>22 Wowo street</span>
        </section> 
       <section>
        <label>Marital status:</label>
        <span>Single</span>
        </section> 
       <section>
        <label>Password:</label>
        <h4>EDUs123</h4>
        </section> 
        <button onClick={()=>Nav('/Editprofile')}>Edit Profile</button>
      </form>
    </div>
  </div>

  )
}

export default Teacherprofile