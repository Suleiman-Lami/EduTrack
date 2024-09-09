import React from 'react'
import './Allstudent.css'

const StudentList = ({student}) => {
    
  return (
    <div className='StudentList'>
        <div className="studentList-Header">
            <h4>S/N</h4>
            <h4>Student id</h4>
            <h4>Full name</h4>
            <h4>gender</h4>
            <h4>Attendance</h4>
              <h5>S/N</h5>
            <h5>id</h5>
            <h5>Name</h5>
            <h5>sex</h5>
            <h5>Actions</h5>
        </div>
        <main>
           {
            student.map((e, index)=>(
                <section key={index}>
                    <div className="sectionInfo">{index + 1}</div>
                    <div className="sectionInfo">
                        <div className="profile"></div>
                      <p>  edu{ 35 + index}</p>
                        </div>
                        <span>Ramotu</span>
                    <div className="sectionInfoG">Suleiman Ramotu Lami</div>
                    <div className="sectionInfoG">Female</div>
                    <span>F</span>
                    <div className="sectionInfo"><button>Action</button></div>
                </section> 
            ))
           }
        </main>
        <div className="studentList-Footer"></div>
    </div>
  )
}

export default StudentList