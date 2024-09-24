import React, { useEffect } from 'react';
import './Teacherprofile.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Teacherprofile = () => {
  const loginInfo = useSelector((state) => state.eduTrack.user);
  const { teacherId } = useParams(); 
  const Nav = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const teacher = loginInfo.schoolInfo.teachers.find(t => t.id === teacherId);

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <div className="Teacherprofile">
      <h3>Profile info</h3>
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={teacher.teacherProfile} alt="Profile" />
          </div>
        </div>
        <form data-aos="fade-left" data-aos-duration="3000">
          <section>
            <label>Full Name:</label>
            <span>{teacher.fullName}</span>
          </section>
          <section>
            <label>Email:</label>
            <span>{teacher.email}</span>
          </section>
          <section>
            <label>Address:</label>
            <span>{teacher.address}</span>
          </section>
          <section>
            <label>Marital Status:</label>
            <span>{teacher.maritalStatus}</span>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Teacherprofile;
