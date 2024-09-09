import React from 'react'
import './Allteachers.css'

const TeacherList = ({teachers}) => {
  return (
    <div className='TeacherList'>
    <div className="teacherList-Header">
        <h4>S/N</h4>
        <h4>Profile Image</h4>
        <h4>Full name</h4>
        <h4>gender</h4>
        <h4>Attendance</h4>
        <h5>S/N</h5>
        <h5>Profile</h5>
        <h5>Name</h5>
        <h5>sex</h5>
        <h5>Attendance</h5>
    </div>
    <main>
       {
        teachers.map((e, index)=>(
            <section key={index}>
                <div className="sectionInfoP">{index + 1}</div>
                <div className="sectionInfoP">
                    <div className="profile"></div>
                    </div>
                <div className="sectionInfo">Suleiman Ramotu Lami</div>
                <span>Mrs Ramotu</span>
                <div className="sectionInfo">Female</div>
                <span>F</span>
                <div className="sectionInfoP"><button>Action</button></div>
            </section> 
        ))
       }
    </main>
    <div className="TeacherList-Footer"></div>
</div>

  )
}

export default TeacherList