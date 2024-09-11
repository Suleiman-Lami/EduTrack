import React, { useEffect } from 'react'
import './Adminprofile.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import values from '../../../assets/WOMAN_TEACHING.png'
import { useNavigate } from 'react-router-dom'

const Adminprofile = () => {
  const Nav = useNavigate();

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='Adminprofile' >
          <h3>Profile info</h3>
    <div className="profileBody">
      <div className="imgHolder">
        <div className="imgBox">
          <img src={values}/>
        </div>
      </div>
      <form data-aos="fade-left" data-aos-duration="3000">
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
        <button onClick={()=>Nav('/adminEdit')}>Edit Profile</button>
      </form>
    </div>
    </div>
  )
}

export default Adminprofile