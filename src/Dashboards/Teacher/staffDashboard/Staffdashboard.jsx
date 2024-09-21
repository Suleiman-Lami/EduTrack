import React, { useEffect, useState } from 'react';
import './Staffdashboard.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { BsPersonRolodex } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Staffdashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const loginInfo = useSelector((state) => state.eduTrack.user);
  const Nav = useNavigate();

  const getAllStudents = async () => {
    setLoading(true);
    const userToken = localStorage.getItem('userToken');

    try {
      const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-students', {
        headers: {
          "Authorization": `Bearer ${userToken}`
        },
      });

      const studentsData = res.data.data.students; // Assuming this is the correct path
      console.log('Students Data:', studentsData);
      setStudents(studentsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      setLoading(false);
    }
  };
  const getDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    return date;
  };

  useEffect(() => {
    Aos.init();
    getAllStudents();
  }, []);

  return (
    <div className='Staffdashboard'>
      <div className="Staffdashboard-Header">
        <div className='staffArticle' data-aos="fade-right" data-aos-duration="3000">
          <div className="textArea">
            <h3>Welcome Back, Inspiring Educator!</h3>
            <span>Empower your students today—every lesson is a chance to make a difference.</span>
            <button onClick={() => Nav('/profile')}>View Profile</button>
          </div>
          <div className="imageHolder">
          </div>
        </div>
        <div className="box" data-aos="fade-left" data-aos-duration="3000">
          <div className="icon"><BsPersonRolodex size={50} color='#F4B400' /></div>
          <div className="calcStudent">
            <h4>Students</h4>
            {loading ? 
              <ClipLoader color='white' /> :
              <h4>{students.length}</h4> 
            }
          </div>
        </div>
      </div>

      <div className='staffAside'>
        <h3>Classes</h3>
        <section>
          <button>Junior Secondary School</button>
          <hr />
          <button>Senior Secondary School</button>
        </section>
      </div>
      
      {loading ? (
        <ClipLoader color='#003B31' size={40} />
      ) : students.length === 0 ? (
        <div className="emptyModal">
          <h2>No student added yet</h2>
          {loginInfo.teacherInfo.isLoggedIn ? (
            <span>Ask your school admin to add a student</span>
          ) : (
            <>
              <span>Click to enroll your first student!</span>
              <button onClick={() => Nav('/student-onboard')}>Add a Student</button>
            </>
          )}
        </div>
      ) : (
        <table>
          <thead>
              <th>S/N</th>
              <th>Student ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date & Time</th>
            
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="profile">
                    <img
                      src={student.studentProfile}
                      onClick={() => Nav(`/studentInfo/${student.studentID}`)}
                      alt="profile"
                    />
                  </div>
                  {student.studentID}
                </td>
                <td>{student.fullName}</td>
                <td>{student.gender}</td>
                <td>{getDate()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Staffdashboard;
