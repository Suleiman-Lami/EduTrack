import React, { useEffect, useState } from 'react';
import './Staffdashboard.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import values from '../../../assets/Landing2.png'
import { BsPersonRolodex } from "react-icons/bs";
import { ClipLoader } from 'react-spinners';
import axios from 'axios';


const Staffdashboard = () => {
  const [student, setStudent] = useState([]);
  const [Loading, setLoading] = useState(false);
  const Nav = useNavigate();

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    return `${date} / ${time}`;
  };

  const getDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    return `${date}`;
  };

  const getAllStudents = async () => {
    setLoading(true);
    const userToken = localStorage.getItem('userToken');

    try {
      const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-students', {
        headers: {
          "Authorization": `Bearer ${userToken}`
        },
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
  
  useEffect(()=>{
    Aos.init();
    getAllStudents();
  },[])

  return (
    <div className='Staffdashboard'>
      <div className="Staffdashboard-Header">
        <div className='staffArticle'  data-aos="fade-right" data-aos-duration="3000">
          <div className="textArea">
            <h3>Welcome Back, Inspiring Educator!</h3>
            <span>Empower your students today—every 
              lesson is a chance to make a difference.</span>
            <button onClick={()=>Nav('/profile')}>View Profile</button>
          </div>
          <div className="imageHolder">
          </div>
        </div>
        <div className="box" data-aos="fade-left" data-aos-duration="3000">
          <div className="icon"><BsPersonRolodex size={50} color = '#F4B400' /></div>
          <div className="calcStudent">
            <h4>Students</h4>
            {
              Loading ? 
              <ClipLoader color='white' />
              :
              <h4>{student.length}</h4> 
            }
          </div>
        </div>
      </div>

      <div className='staffAside'>
        <h3>Classes</h3>
        <section>
          <button>Junior secondary school</button>
          <hr />
          <button>Senior Secondary school</button>
        </section>
      </div>
      {
        Loading ? <ClipLoader color='#003B31' size={40} /> :
        student.length === 0 ? 
        <div className="emptyModal" >
          <h2>No student added yet</h2>
          <span>Click to enroll your first student!</span>
          <button onClick={() => Nav('/onboard')}>Add a Student</button>
        </div>
       :<table>
        <thead>
            <th>S/N</th>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date & Time</th>
        </thead>
        <tbody>
          {
          student.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img src={e?.studentProfile} onClick={() => Nav(`/childProfile/${e?.studentID}`)} alt="profile"/>
                </div>
                {e?.studentID}
              </td>
              <td>{e?.fullName}</td>
              <td>{e?.gender}</td>
              <td>{getCurrentDateTime()} </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default Staffdashboard;
