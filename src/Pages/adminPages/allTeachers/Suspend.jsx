import React, { useState, useEffect } from 'react';
import './Allteachers.css';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const SuspendedTeacherList = () => {
  const [suspendedTeachers, setSuspendedTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const Nav = useNavigate();
  const userToken = localStorage.getItem('userToken');
  const teacherID = localStorage.getItem('teacherID')

  const getSuspendedTeachers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/the-suspended', {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      console.log(res?.data.teachers);
      
      setSuspendedTeachers(res?.data.teachers );
      setLoading(false);
    } catch (error) {
      console.error('Error fetching suspended teachers:', error);
      toast.error('Error fetching suspended teachers');
      setLoading(false);
    }
  };

  const unsuspendTeacher = async (teacherID) => {
    setShowDropdown(null);

    try {
      setActionLoading(true);
      const response = await axios.post(
        `https://edutrack-jlln.onrender.com/api/v1/school/unsuspend-teacher/${teacherID}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${userToken}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success('Teacher unsuspended successfully');
        await getSuspendedTeachers(); 
      }
    } catch (error) {
      console.error('Error unsuspending teacher:', error);
      toast.error(error.response?.data?.message || 'Error unsuspending teacher');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteTeacherPermanently = async (teacherID) => {
    if (window.confirm('Are you sure you want to permanently delete this teacher?')) {
      setShowDropdown(null);
      try {
        setActionLoading(true);
        const response = await axios.delete(
        `https://edutrack-jlln.onrender.com/api/v1/school/delete-teacher/${teacherID}`, {
            headers: {
              'Authorization': `Bearer ${userToken}`,
            },
          }
        );
        if (response.status === 200) {
          toast.success('Teacher deleted permanently');
          await getSuspendedTeachers(); 
        }
      } catch (error) {
        console.error('Error deleting teacher:', error);
        toast.error(error.response?.data?.message || 'Error deleting teacher');
      } finally {
        setActionLoading(false);
      }
    }
  };

  
  useEffect(() => {
    getSuspendedTeachers();
    
  }, []);

  return (
    <div className='TeacherList'>
      {loading ? (
        <ClipLoader color='#003B31' />
      ) : (
        <>
          {suspendedTeachers?.length === 0 ? (
            <div className="emptyModal">
              <h2>No Suspended Teachers </h2>
            </div>
          ) : (
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
                {suspendedTeachers?.map((e, index) => (
                  <tr key={e?.teacherID || index}>
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
                    <td>{e?.id}</td>
                    <td>
                      <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                        {actionLoading && showDropdown === index ? (
                          <ClipLoader color='#ffffff' size={15} />
                        ) : (
                          'Action'
                        )}
                      </button>

                      {showDropdown === index && (
                        <div className="dropdown">
                          <div onClick={() => unsuspendTeacher(e?.teacherID)}>
                            <FaCheckCircle color='#003B31' /> Unsuspend
                          </div>
                          <div onClick={() => deleteTeacherPermanently(e?.teacherID)}>
                            <MdCancel color='#F4B400' /> Delete
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
      <Toaster position="top-center" />
    </div>
  );
};

export default SuspendedTeacherList;
