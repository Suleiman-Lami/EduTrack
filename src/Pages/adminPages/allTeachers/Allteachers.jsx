import React from 'react';
import './Allteachers.css';
import { useNavigate } from 'react-router-dom';
import TeacherList from './TeacherList';

const Allteachers = () => {
    const Nav = useNavigate();
    const teachers = [];
  
    return (
      <div className='allTeachers'>
        {
          teachers.length === 0 ? 
          <div className="emptyModal">
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
