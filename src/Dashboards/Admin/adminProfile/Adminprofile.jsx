import React, { useEffect } from 'react'
import './Adminprofile.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import values from '../../../assets/WOMAN_TEACHING.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Adminprofile = () => {
  const loginInfo = useSelector((state) => state.eduTrack.user);
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
          <img src={loginInfo.schoolInfo.schoolPicture}/>
        </div>
      </div>
      <form data-aos="fade-left" data-aos-duration="3000">
       <section>
        <label>fullName:</label>
        <span>{loginInfo.schoolInfo.schoolName}</span>
        </section> 
       <section>
        <label>Email:</label>
        <span>{loginInfo.schoolInfo.schoolEmail}</span>
        </section> 
       <section>
        <label>Address:</label>
        <span>{loginInfo.schoolInfo.schoolAddress}</span>
        </section> 
       {/* <section>
        <label>Password:</label>
        <h4>{loginInfo.schoolInfo.schoolPassword}</h4>
        </section>  */}
        <button onClick={()=>Nav(`/adminEdit/${loginInfo.schoolInfo.schoolID}`)}>Edit Profile</button>
      </form>
    </div>
    </div>
  )
}

export default Adminprofile