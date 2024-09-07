import React from 'react';
import './Allteachers.css';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={()=>Nav('/dashboard/admin/staffs')}>Add a Staff</button>
          </div> : 
          <div className="teachersBox">
          </div>
        }
      </div>
    );
}

export default Allteachers;
