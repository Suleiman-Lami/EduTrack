import React, { useEffect } from 'react';
import './Allteachers.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';
import TeacherList from './TeacherList';

const Allteachers = () => {
    const Nav = useNavigate();
    const teachers = [];

    useEffect(()=>{
      Aos.init();
    },[])
    return (
      <div className='allTeachers'>
        {
          teachers.length === 0 ? 
          <div className="emptyModal" data-aos="zoom-in" data-aos-duration="3000">
            <h2>No staff added yet </h2>
            <span>Click to add your first staff member!</span>
            <button onClick={()=>Nav('/staffs')}>Add a Staff</button>
          </div> : 
          <div className="teachersBox">
           <div className="teachersBox-Header"><button>Add new teacher</button></div>
            <TeacherList teachers={teachers}/>
          </div>
        }
      </div>
    );
}

export default Allteachers;
