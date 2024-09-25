import React, { useEffect, useState } from 'react';
import './Studentprofile.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; 
import { toast, Toaster } from 'react-hot-toast'; 
import { FaCheck, FaTimes } from 'react-icons/fa'; 

const Studentprofile = () => {
  const loginfo = useSelector((state) => state.eduTrack.user);
  const [attendanceData, setAttendanceData] = useState([]);
  const Nav = useNavigate();
  const { studentID } = useParams();
  console.log('loginfo',loginfo);
  console.log('teacherInfo',loginfo.teacherInfo);
  

  const student = () => {
    if (loginfo.schoolInfo.isLoggedIn) {
      return loginfo.schoolInfo.students.find(s => String(s.studentID)=== studentID);
    } else if (loginfo.teacherInfo.isLoggedIn) {
      return loginfo.teacherInfo.school.students.find(s => String(s.studentID)=== studentID);
    }
    return null;
  };

  const foundStudent = student();

  const fetchStudentAttendance = async () => {
    try {
      const userToken = localStorage.getItem('userToken');
      const response = await axios.get(
        `https://edutrack-jlln.onrender.com/api/v1/attendance/student-attendance/${foundStudent._id}`
      );
      console.log(response);
      
      const studentAttendanceData = response.data.data.find(
        (record) => record.studentName === foundStudent.fullName
      );

      if (studentAttendanceData && studentAttendanceData.attendanceRecords.length > 0) {
        setAttendanceData(studentAttendanceData.attendanceRecords); 
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
    if (foundStudent) {
      fetchStudentAttendance(); 
    }
  }, [foundStudent]);

  if (!foundStudent) {
    return <div>Student not found</div>;
  }

  return (
    <div className='Studentprofile'>
      <h3>Student Information</h3>
      <div className='btnHolder'>
        <button onClick={() => Nav(-1)}>Go back</button>
      </div>
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={foundStudent.studentProfile} alt="Student Profile" />
          </div>
          <section>
            <label>Full Name:</label>
            <span>{foundStudent.fullName}</span>
          </section>
          <section>
            <label>Email:</label>
            <span>{foundStudent.email}</span>
          </section>
          <section>
            <label>Address:</label>
            <span>{foundStudent.address}</span>
          </section>
          <section>
            <label>Class:</label>
            <span>{foundStudent.class}</span>
          </section>
          <section>
            <label>Student ID:</label>
            <h4>{foundStudent.studentID}</h4>
          </section>
        </div>
        <hr />
        <table>
  <thead>
    {/* <tr> */}
      <td>Week</td>
      <td>Mon</td>
      <td>Tue</td>
      <td>Wed</td>
      <td>Thu</td>
      <td>Fri</td>
    {/* </tr> */}
  </thead>
  <tbody>
    {attendanceData.map((weekData, index) => (
      <tr key={index}>
        <td>{`Wk${weekData.week}`}</td>
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day, dayIndex) => (
          <td key={dayIndex}>
            {weekData.days[day] === 'present' ? (
              <FaCheck color="green" />
            ) : weekData.days[day] === 'absent' ? (
              <FaTimes color="#F4B400" />
            ) : (
              <span> </span> 
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>


      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Studentprofile;
