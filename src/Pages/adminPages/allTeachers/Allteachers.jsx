import React, { useEffect, useState } from 'react';
import './Allteachers.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import TeacherList from './TeacherList';
import axios from 'axios';
import {ClipLoader} from 'react-spinners'


const Allteachers = () => {
  const [teachers, setTeachers] = useState([])
  const [Loading, setLoading] = useState(false)
    const Nav = useNavigate();

  const getAllTeachers = async() =>{
    setLoading(true)
    const userToekn = localStorage.getItem('userToken')
    try{
      const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-teachers', {
        headers: {
          "Authorization": `Bearer ${userToekn}`
        }
      })
      const teachersData = res?.data?.data?.teachers ; 
      console.log( res?.data?.data?.teachers);
      
      setTeachers(teachersData);
      setLoading(false)
    }
    catch (error){
      console.log(error);
      setLoading(false)
    }
  }

    useEffect(()=>{
      Aos.init();
      getAllTeachers();
    },[])
    return (
      <div className='allTeachers'>
        {
          Loading ? <ClipLoader color=' #003B31' size={40}  /> :
          teachers?.length === 0 ? 
          <div className="emptyModal" data-aos="zoom-in" data-aos-duration="3000">
            <h2>No staff added yet </h2>
            <span>Click to add your first staff member!</span>
            <button onClick={()=>Nav('/staffs')}>Add a Staff</button>
          </div> : 
          <div className="teachersBox">
           <div className="teachersBox-Header"><button onClick={()=>Nav('/staffs')} >Add new teacher</button></div>
            <TeacherList teachers={teachers} getAllTeachers={getAllTeachers}/>
          </div>
        }
      </div>
    );
}

export default Allteachers;
