import React, { useEffect, useState } from 'react';
import './Allstudent.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate, useLocation } from 'react-router-dom';
import StudentList from './StudentList';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Allstudent = () => {
  const [student, setStudent] = useState([]);
  const [Loading, setLoading] = useState(false);

  const Nav = useNavigate();
  const location = useLocation();
  const { teacherID, schoolID } = location.state || {
    teacherID: localStorage.getItem('teacherID'),
    schoolID: localStorage.getItem('schoolID')
  };

  const getAllStudents = async () => {
    setLoading(true);
    const userToken = localStorage.getItem('userToken');

    try {
      const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-students', {
        headers: {
          "Authorization": `Bearer ${userToken}`
        },
        params: {
          schoolID, 
          teacherID 
        }
      });

      const teachersData = res?.data?.data?.students;
      console.log('Students Data:', teachersData);
      setStudent(teachersData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Aos.init();
    console.log('Teacher ID:', teacherID); 
    console.log('School ID:', schoolID);
    getAllStudents();
  }, [teacherID, schoolID]); 
  return (
    <div className='allStudent'>
      {Loading ? (
        <ClipLoader color='#003B31' size={40} />
      ) : student.length === 0 ? (
        <div className="emptyModal" data-aos="zoom-in" data-aos-duration="3000">
          <h2>No student added yet</h2>
          <span>Click to enroll your first student!</span>
          <button onClick={() => Nav('/student-onboard')}>Add a Student</button>
        </div>
      ) : (
        <div className="studentsBox">
          <div className="studentBox-Header">
            <button onClick={() => Nav('/student-onboard')}>Add new student</button>
          </div>
          <StudentList student={student} />
        </div>
      )}
    </div>
  );
}

export default Allstudent;
