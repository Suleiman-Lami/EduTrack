import React, { useState } from 'react';
import './Allstudent.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import values from '../../../assets/WOMAN_WRITING.png';
import { useNavigate } from 'react-router-dom';

const StudentList = ({ student }) => {
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [showDropdown, setShowDropdown] = useState(null);
  
  const Nav = useNavigate();

  const handleAttendance = (index, status) => {
    setSelectedAttendance((prev) => ({ ...prev, [index]: status })); 
    setShowDropdown(null); 
  };

  return (
    <div className='StudentList'>
      <table>
        <thead>
          {/* <tr> */}
            <th>S/N</th>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Attendance</th>
          {/* </tr> */}
        </thead>
        <tbody>
          {student.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img src={values} onClick={() => Nav('/childProfile')} alt="profile"/>
                </div>
                edu{35 + index}
              </td>
              <td>{e.fullName || 'Full Name'}</td>
              <td>{e.gender || 'Unknown'}</td>
              <td>
                <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                  Action
                </button>

                {showDropdown === index && (
                  <div className="dropdown">
                    <div onClick={() => handleAttendance(index, 'Present')}>
                      <FaCheckCircle color='#003B31'/> Present
                    </div>
                    <div onClick={() => handleAttendance(index, 'Absent')}>
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
    </div>
  );
};

export default StudentList;
