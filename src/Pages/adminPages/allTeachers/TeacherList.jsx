import React, { useState } from 'react';
import './Allteachers.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import {ClipLoader} from 'react-spinners'

const TeacherList = ({ teachers,getAllTeachers }) => {
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [showDropdown, setShowDropdown] = useState(null);
  const [loading, setLoading] = useState(false);

  const Nav = useNavigate();

  const handleAttendance = (index, status) => {
    setSelectedAttendance((prev) => ({ ...prev, [index]: status }));
    setShowDropdown(null);
  };
  const userToken = localStorage.getItem('userToken'); 
  console.log(userToken);
  
  const deleteTeacher = async (teacherID) => {
    setShowDropdown(null);
    
    try {
      setLoading(true); 
      const response = await axios.delete(`https://edutrack-jlln.onrender.com/api/v1/school/delete-teacher/${teacherID}`, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      if (response.status === 200) {
        toast.success('Teacher deleted successfully');
        await getAllTeachers(); 
      }
    } catch (error) {
      console.error('Error deleting teacher:', error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false); 
    }
  };

  const handleActionClick = (index, action, teacherID) => {
    if (action === 'Delete') {
      deleteTeacher(teacherID);
    } else {
      handleAttendance(index, action); 
    }
  };

  return (
    <div className='TeacherList'>
      <table>
        <thead>
            <th>S/N</th>
            <th>Profile</th>
            <th>Full Name</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Actions</th>
        </thead>
        <tbody>
          {teachers?.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img src={e?.teacherProfile} onClick={() => Nav(`/staffProfile/${e?.teacherID}`)} alt="profile" />
                </div>
              </td>
              <td>{e?.fullName}</td>
              <td>{e?.teacherClass}</td>
              <td>{e?.gender}</td>
              <td>
                <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                 {
                  loading ? 
                  <ClipLoader color='#ffffff'/>
                  :' Action'
                 }
                </button>

                {showDropdown === index && (
                  <div className="dropdown">
                    {/* <div onClick={() => handleActionClick(index, 'Suspend', e?._id)}>
                      <FaCheckCircle color='#003B31' /> Suspend
                    </div> */}
                    <div onClick={() => handleActionClick(index, 'Delete', e?.teacherID)}>
                      <MdCancel color='#F4B400' /> Delete
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

export default TeacherList;
