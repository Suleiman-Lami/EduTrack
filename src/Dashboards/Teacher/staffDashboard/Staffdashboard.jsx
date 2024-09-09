import React from 'react';
import './Staffdashboard.css';
import { useNavigate } from 'react-router-dom';

const Staffdashboard = () => {
  const student = [1, 2, 3, 4, 5, 5, 5];
  const Nav = useNavigate();

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    return `${date} / ${time}`;
  };

  const getDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    return `${date}`;
  };
  
  

  return (
    <div className='Staffdashboard'>
      <div className="Staffdashboard-Header">
        <div className='staffArticle'>
          <div className="textArea">
            <h3>Welcome Back, Inspiring Educator!</h3>
            <span>Empower your students today—every 
              lesson is a chance to make a difference.</span>
            <button>View Profile</button>
          </div>
          <div className="imageHolder"></div>
        </div>
        <div className="box">
          <div className="icon"></div>
          <div className="calcStudent">
            <h4>Students</h4>
            <h4>{student.length}</h4> 
          </div>
        </div>
      </div>

      <div className='staffAside'>
        <h3>Classes</h3>
        <section>School name</section>
      </div>

      <main>
        <div className="mainHeader">
          <h4 className='serial'>S/N</h4>
          <h4>Student ID</h4>
          <h4>Full Name</h4>
          <h4>Gender</h4>
          <h4><p>Date & Time</p> <p className='smallScreen'>Date</p></h4>
        </div>

        <div className="mainBody">
          {
            student.length === 0 ? 
            <div className="emptyModal">
              <h2>No student added yet</h2>
              <span>Click to enroll your first student!</span>
              <button onClick={() => Nav('/dashboard/teacher/Student')}>Add a Student</button>
            </div> 
            : student.map((e, index) => (
              <section key={index}>
                <div className="sectionInfo">{index + 1}</div>
                <div className="sectionInfoS">
                  <div className="studentProfile"></div>
                  <span>edu{35 + index}</span> 
                </div>
                <div className="sectionInfos">Suleiman Ramotu </div>
                <div className="sectionInfoG">Female</div>
                <div className="sectionInfoP"><p>{getCurrentDateTime()}</p> <p className='smallScreen'>{getDate()}</p></div>
              </section>
            ))
          }
        </div>
        <div className="mainFoot">
          <h5>Classess</h5>
          <div className="numbers">
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Staffdashboard;
