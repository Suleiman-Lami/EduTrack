import React, { useEffect } from 'react';
import './Teacherprofile.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import values from '../../../assets/WOMAN_WRITING.png';
import { useSelector } from 'react-redux';

const Teacherprofile = () => {
  const loginInfo = useSelector((state) => state.eduTrack.user);
  
  const Nav = useNavigate();

  useEffect(() => {
    Aos.init();
    console.log(loginInfo);
    
  }, []);

  return (
    <div className="Teacherprofile">
      <h3>Profile info</h3>
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={loginInfo.teacherInfo.teacherProfile} alt="Profile" />
          </div>
        </div>
        <form data-aos="fade-left" data-aos-duration="3000">
          <section>
            <label>Full Name:</label>
            <span>{loginInfo.teacherInfo?.fullName }</span>
          </section>
          <section>
            <label>Email:</label>
            <span>{loginInfo.teacherInfo?.email}</span>
          </section>
          <section>
            <label>Address:</label>
            <span>{loginInfo.teacherInfo?.address }</span>
          </section>
          <section>
            <label>Marital Status:</label>
            <span>{loginInfo.teacherInfo?.maritalStatus }</span>
          </section>
         {
          loginInfo?.role !== 'admin' ? 
          <section>
          <label>Password:</label>
          <h4>{loginInfo.teacherInfo?.teacherID}</h4>
        </section>: null
         }
          {loginInfo?.role !== 'admin' ?
            <button type="button" onClick={() => Nav(`/Editprofile/${loginInfo.teacherInfo.teacherID}`)}>
              Edit Profile
            </button>
           : null}
        </form>
      </div>
    </div>
  );
};

export default Teacherprofile;
