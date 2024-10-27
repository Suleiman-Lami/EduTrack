import React, { useState } from 'react';
import './Allstudent.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import values from '../../../assets/WOMAN_WRITING.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

const StudentList = ({ student }) => {
  const isLoggedIn = useSelector((state)=>state.eduTrack.user)
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [studentId, setStudentId] = useState(null)

  console.log(student);
  
  
  const Nav = useNavigate();

  const currentDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return daysOfWeek[today.getDay()];
  };

  const getCurrentWeek = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - startOfYear) / (1000 * 60 * 60 * 24);
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const handleAttendance = async (index, status, studentID) => {
    
    setSelectedAttendance((prev) => ({ ...prev, [index]: status }));
    setDropdownIndex(null); 
    setLoading(true)
    setStudentId(studentID)
    const schoolID = localStorage.getItem('schoolID');
    const teacherID = localStorage.getItem('teacherID');    

    try {
      const response = await axios.post(`https://edutrack-jlln.onrender.com/api/v1/attendance/mark-attendance/${studentID}`, {
        studentID: studentID,
        status: status,
        week: getCurrentWeek(),
        day: currentDay(),
        schoolID: schoolID,
        teacherID: teacherID,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      setLoading(false)
      setStudentId(null)
      toast.success('attendance taken successfully')
    
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      setLoading(false)
      setStudentId(null)
      // toast.error(`Failed to update attendance for student name: ${fullName}`);
      console.error('Error updating attendance:', error);
      
    }
  };

  const handleProfile = (studentID) => {
    if (isLoggedIn.schoolInfo.isLoggedIn) {
      Nav(`/childProfile/${studentID}`);
    } else {
      Nav(`/studentInfo/${studentID}`);
    }
  };


console.log(student);

  return (
    <div className='StudentList'>
      <table>
        <thead>
            <th>S/N</th>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Attendance</th>
        </thead>
        <tbody>
          {student.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img 
                    src={e?.studentProfile} 
                    onClick={() => handleProfile(e?.studentID)} 
                    alt="profile" 
                  />
                </div>
                {e?.studentID}
                
              </td>
              <td>{e?.fullName}</td>
              <td>{e?.gender}</td>
              <td>
                <button onClick={() => setDropdownIndex(dropdownIndex === index ? null : index)}>
                 {
                  Loading && studentId === e?._id? 
                  <ClipLoader color='white'  /> :
                 ' Action'
                 }
                </button>

                {dropdownIndex === index && (
                  <div className="dropdown">
                    <div onClick={() => handleAttendance(index, 'present', e?._id)}>
                      <FaCheckCircle color='#003B31'/> Present
                    </div>
                    <div onClick={() => handleAttendance(index, 'absent', e?._id)}>
                      <MdCancel color='#F4B400'/> Absent
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster position="top-center" />
    </div>
  );
};

export default StudentList;
