import React, { useEffect, useState } from 'react';
import './Studentprofile.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; 
import { toast, Toaster } from 'react-hot-toast'; 

const Studentprofile = () => {
  const loginfo = useSelector((state) => state.eduTrack.user);
  const [attendanceData, setAttendanceData] = useState([]);
  const Nav = useNavigate();

  const fetchStudentAttendance = async () => {
    try {
      const userToken = localStorage.getItem('userToken'); 
      const response = await axios.get(
        `https://edutrack-jlln.onrender.com/api/v1/attendance/student-attendance/${loginfo.studentInfo._id}`, // Replace with your API endpoint
        {
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }
      );
      
      const fetchedAttendance = response.data.attendance; 
      if (fetchedAttendance && fetchedAttendance.length > 0) {
        setAttendanceData(fetchedAttendance);
      } else {
        toast.info('No attendance data available for this student.');
      }
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    Aos.init(); 
    fetchStudentAttendance(); 
  }, []);

  return (
    <div className='Studentprofile'>
      <h3>Student Information</h3>
      <div className='btnHolder'>
        <button onClick={() => Nav(-1)}>Go back</button>
      </div>
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={loginfo.studentInfo.studentProfile} alt="Profile" />
          </div>
          <section>
            <label>Full Name:</label>
            <span>{loginfo.studentInfo.fullName}</span>
          </section>
          <section>
            <label>Email:</label>
            <span>{loginfo.studentInfo.email}</span>
          </section>
          <section>
            <label>Address:</label>
            <span>{loginfo.studentInfo.address}</span>
          </section>
          <section>
            <label>Class:</label>
            <span>{loginfo.studentInfo.class}</span>
          </section>
          {/* Show Password only if user is not admin or teacher */}
          {loginfo.schoolInfo.role !== 'admin' && loginfo.teacherInfo.role !== 'teacher' && (
            <section>
              <label>Password:</label>
              <h4>{loginfo.studentInfo.studentID}</h4>
            </section>
          )}
        </div>
        <hr />
        <table>
          <thead>
            {/* <tr> */}
              <td>Week</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thur</td>
              <td>Fri</td>
              <td>Total</td>
            {/* </tr> */}
          </thead>
          <tbody>
            {attendanceData.map((weekData, index) => {
              const total = weekData.percentages.reduce((sum, value) => sum + value, 0);
              return (
                <tr key={index}>
                  <td>{`Wk${weekData.week}:`}</td>
                  {weekData.percentages.map((percentage, dayIndex) => (
                    <td key={dayIndex}>{percentage}%</td>
                  ))}
                  <th>{total}%</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Studentprofile;
