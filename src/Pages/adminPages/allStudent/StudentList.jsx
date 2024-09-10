import React, { useState } from 'react';
import './Allstudent.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import values from '../../../assets/WOMAN_WRITING.png'
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
      <div className="studentList-Header">
        <h4>S/N</h4>
        <h4>Student id</h4>
        <h4>Full name</h4>
        <h4>Gender</h4>
        <h4>Attendance</h4>
      </div>

      <main>
        {student.map((e, index) => (
          <section key={index}>
            <div className="sectionInfo">{index + 1}</div>
            <div className="sectionInfo">
              <div className="profile">
                <img src={values} onClick={ () => Nav('/StudentProfile')} />
              </div>
              <p>edu{35 + index}</p>
            </div>
         
            <div className="sectionInfoG">{e.fullName || 'Full Name'}</div>
            <div className="sectionInfoG">{e.gender || 'Unknown'}</div>

            <div className="sectionInfo">
              <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                Action
              </button>

              {showDropdown === index && (
                <div className="dropdown">
                  <div onClick={() => handleAttendance(index, 'Present')}><FaCheckCircle color='#003B31'/>Present</div>
                  <div onClick={() => handleAttendance(index, 'Absent')}><MdCancel color='#F4B400'/>Absent</div>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>

      <div className="studentList-Footer"></div>
    </div>
  );
};

export default StudentList;
