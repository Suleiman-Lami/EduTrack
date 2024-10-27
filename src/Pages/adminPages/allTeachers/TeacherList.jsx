import React, { useState } from 'react';
import './Allteachers.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const TeacherList = ({ teachers, getAllTeachers }) => {
  const [selectedAttendance, setSelectedAttendance] = useState({});
  const [showDropdown, setShowDropdown] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teacherId, setTeacherId] = useState(null)

  const Nav = useNavigate();
  const userToken = localStorage.getItem('userToken');

  const handleAttendance = (index, status) => {
    setSelectedAttendance((prev) => ({ ...prev, [index]: status }));
    setShowDropdown(null);
  };

  const deleteTeacher = async (teacherID) => {
    setShowDropdown(null);

    try {
      setLoading(true);
      setTeacherId(teacherID)
      const response = await axios.delete(
        `https://edutrack-jlln.onrender.com/api/v1/school/delete-teacher/${teacherID}`,
        {
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success('Teacher deleted successfully');
        await getAllTeachers(); 
      }
    } catch (error) {
      console.error('Error deleting teacher:', error);
      toast.error(error.response?.data?.message || 'Error deleting teacher');
    } finally {
      setLoading(false);
    }
  };

  const suspendTeacher = async (teacherID) => {
    setShowDropdown(null);

    try {
      setLoading(true);
      const response = await axios.post(
        `https://edutrack-jlln.onrender.com/api/v1/school/suspend-teacher/${teacherID}`,{},
        {
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        toast.success('Teacher suspended successfully');
        await getAllTeachers();
        Nav('/Suspend'); 
      }
    } catch (error) {
      console.error('Error suspending teacher:', error);
      toast.error(error.response?.data?.message || 'Error suspending teacher');
    } finally {
      setLoading(false);
    }
  };

  const handleActionClick = (index, action, teacherID) => {
    if (action === 'Delete') {
      deleteTeacher(teacherID);
    } else if (action === 'Suspend') {
      suspendTeacher(teacherID);
    }
    handleAttendance(index, action);
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
            <tr key={ index}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img
                    src={e?.teacherProfile}
                    onClick={() => Nav(`/staffProfile/${e?.teacherID}`)}
                    alt="profile"
                  />
                </div>
              </td>
              <td>{e?.fullName}</td>
              <td>{e?.teacherClass}</td>
              <td>{e?.gender}</td>
              <td>
                <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                  {loading && teacherId === e?._id ? (
                    <ClipLoader color='#ffffff' size={15} />
                  ) : (
                    'Action'
                  )}
                </button>

                {showDropdown === index && (
                  <div className="dropdown">
                    <div onClick={() => handleActionClick(index, 'Suspend', e?.teacherID)}>
                      <FaCheckCircle color='#003B31' /> Suspend
                    </div>
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
