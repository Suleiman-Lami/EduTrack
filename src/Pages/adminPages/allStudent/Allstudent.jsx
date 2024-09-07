import React from 'react'
import './Allstudent.css'
import { useNavigate } from 'react-router-dom';

const Allstudent = () => {
  const Nav = useNavigate();
  const student = [];

  return (
    <div className='allStudent'>
      {
        student.length === 0 ? 
        <div className="emptyModal">
          <h2>No student added yet</h2>
          <span>Click to enroll your first student!</span>
          <button onClick={() => Nav('/dashboard/teacher/Student')}>Add a Student</button>
        </div> : 
        <div className="studentsBox">
        </div>
      }
    </div>
  );
}

export default Allstudent;
