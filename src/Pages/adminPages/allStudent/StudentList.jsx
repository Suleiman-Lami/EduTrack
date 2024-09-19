import React, { useState } from 'react';
import './Allstudent.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import values from '../../../assets/WOMAN_WRITING.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const StudentList = ({ student }) => {
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [Loading, setLoading] = useState(false);

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
    const schoolID = localStorage.getItem('schoolID');
    const teacherID = localStorage.getItem('teacherID');
    console.log(teacherID);
    console.log(schoolID);
    console.log('clicked');
    

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
      toast.success(`Attendance marked as ${status} for student name: ${fullName}`);
    } catch (error) {
      setLoading(false)
      toast.error(`Failed to update attendance for student name: ${fullName}`);
      console.error('Error updating attendance:', error);
    }
  };



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
                    onClick={() => Nav(`/childProfile/${e?.studentID}`)} 
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
                  Loading ? 
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
      <div className="studentList-Footer"></div>
      <Toaster position="top-center" />
    </div>
  );
};

export default StudentList;
