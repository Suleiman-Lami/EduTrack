import React from 'react'
import './Allstudent.css'
import { useNavigate } from 'react-router-dom';
import StudentList from './StudentList';

const Allstudent = () => {
  const Nav = useNavigate();
  const student = [1,2,4,5,6,7,5,6,5,0,8,8];

  return (
    <div className='allStudent'>
      {
        student.length === 0 ? 
        <div className="emptyModal">
          <h2>No student added yet</h2>
          <span>Click to enroll your first student!</span>
          <button onClick={() => Nav('/Student')}>Add a Student</button>
        </div> : 
        <div className="studentsBox">
          <div className="studentBox-Header"><button>Add new studnet</button></div>
          <StudentList student={student}/>
        </div>
      }
    </div>
  );
}

export default Allstudent;
