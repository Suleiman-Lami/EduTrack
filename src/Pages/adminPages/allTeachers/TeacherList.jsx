import React, { useState } from 'react'
import './Allteachers.css'
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import values from '../../../assets/Landing3.png'

const TeacherList = ({teachers}) => {
    const [selectedAttendance, setSelectedAttendance] = useState({});
    const [showDropdown, setShowDropdown] = useState(null);
    
    const Nav = useNavigate();
  
    const handleAttendance = (index, status) => {
      setSelectedAttendance((prev) => ({ ...prev, [index]: status })); 
      setShowDropdown(null); 
    };

  return (
    <div className='TeacherList'>
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
          {teachers.map((e, index) => (
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
              <td>
                <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                  Action
                </button>

                {showDropdown === index && (
                  <div className="dropdown">
                    <div onClick={() => handleAttendance(index, 'Suspend')}>
                      <FaCheckCircle color='#003B31'/> Suspend
                    </div>
                    <div onClick={() => handleAttendance(index, 'Delete')}>
                      <MdCancel color='#F4B400'/> Delete
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

  )
}

export default TeacherList