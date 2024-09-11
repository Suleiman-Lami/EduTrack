import React from 'react'
import './Allstudent.css'
import { useNavigate } from 'react-router-dom';
import StudentList from './StudentList';

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
