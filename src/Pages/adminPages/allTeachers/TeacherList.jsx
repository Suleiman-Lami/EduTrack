import React, { useState } from 'react'
import './Allteachers.css'
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import values from '../../../assets/Landing3.png'

const TeacherList = ({teachers}) => {
    const [selectedAttendance, setSelectedAttendance] = useState({});
    const [showDropdown, setShowDropdown] = useState(null);
    
    const Nav = useNavigate();
    const {teacherID} = useParams()
    console.log(teacherID);
    
  
    const handleAttendance = (index, status) => {
      setSelectedAttendance((prev) => ({ ...prev, [index]: status })); 
      setShowDropdown(null); 
    };
    console.log(teachers);
    

  return (
    <div className='TeacherList'>
      <table>
        <thead>
          {/* <tr> */}
            <th>S/N</th>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Attendance</th>
          {/* </tr> */}
        </thead>
        <tbody>
          {teachers?.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img src={e?.teacherProfile} onClick={() => Nav(`/staffProfile/${e?.teacherID}`)} alt="profile"/>
                </div>
              </td>
              <td>{e?.fullName}</td>
              <td>{e?.teacherClass}</td>
              <td>{e?.gender}</td>
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