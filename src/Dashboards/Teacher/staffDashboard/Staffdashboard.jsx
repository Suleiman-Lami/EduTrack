import React, { useEffect } from 'react';
import './Staffdashboard.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import values from '../../../assets/WEPROVIDE.png'

const Staffdashboard = () => {
  const student = [];
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
  
  useEffect(()=>{
    Aos.init();
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
            <img src={values} />
          </div>
        </div>
        <div className="box" data-aos="fade-left" data-aos-duration="3000">
          <div className="icon"></div>
          <div className="calcStudent">
            <h4>Students</h4>
            <h4>{student.length}</h4> 
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
        student.length === 0 ? 
        <div className="emptyModal" data-aos="zoom-in" data-aos-duration="3000">
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
          {student.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img src={values} onClick={() => Nav('/StudentProfile')} alt="profile"/>
                </div>
                edu{35 + index}
              </td>
              <td>{e.fullName || 'Full Name'}</td>
              <td>{e.gender || 'Unknown'}</td>
              <td>{getCurrentDateTime()} </td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

export default Staffdashboard;
