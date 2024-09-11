import React, { useEffect } from 'react'
import './Allstudent.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import StudentList from './StudentList';

const Allstudent = () => {
  const Nav = useNavigate();
  const student = [1,2];

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='allStudent'>
      {
        student.length === 0 ?
        <div className="emptyModal" data-aos="zoom-in" data-aos-duration="3000">
          <h2>No student added yet</h2>
          <span>Click to enroll your first student!</span>
          <button onClick={() => Nav('/student-onboard')}>Add a Student</button>
        </div> : 
        <div className="studentsBox">
          <div className="studentBox-Header">
            <button onClick={() => Nav('/student-onboard')}>Add new student</button>
          </div>
          <StudentList student={student}/>
        </div>
      }
    </div>
  );
}

export default Allstudent;
