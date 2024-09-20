import React, { useEffect, useState } from 'react'
import './Studentprofile.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'
import values from '../../../../assets/WOMAN_WRITING.png'
import { useSelector } from 'react-redux';
import { loginInfo } from '../../../../Global/Slice';


const Studentprofile = () => {
  const loginfo = useSelector((state)=>state.eduTrack.user)
    const [totalPercentage, setTotalPercentage] = useState(0);
  const weeklyPercentages =[ 20, 5,6,35, 10 ]
    const calculateTotalPercentage = (percentages) => {
      const total = percentages.reduce((sum, value) => sum + value, 0);
      setTotalPercentage(total);
    };
  
    useEffect(() => {
      if (weeklyPercentages && weeklyPercentages.length > 0) {
        calculateTotalPercentage(weeklyPercentages);
      }
    }, [weeklyPercentages]);


  const Nav = useNavigate();

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='Studentprofile'>
      <h3>Student  information</h3>
    <div className='btnHolder'> 
    <button onClick={()=>Nav(-1)}>Go back</button>
          </div> 
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={loginfo.studentInfo.studentProfile} alt="Profile" />
          </div>
          <section>
            <label>Full Name:</label>
            <span>{loginfo.studentInfo.fullName}</span>
          </section>
          <section>
            <label>Email:</label>
            <span>{loginfo.studentInfo.email}</span>
          </section>
          <section>
            <label>Address:</label>
            <span>{loginfo.studentInfo.address}</span>
          </section>
          <section>
            <label>Class:</label>
            <span>{loginfo.studentInfo.class}</span>
            </section>
            {loginfo.schoolInfo.role  === 'admin' &&  loginfo.teacherInfo.role === 'teacher' ?
              null :
             <section>
                <label>Password:</label>
                <h4>{loginfo.studentInfo.studentID}</h4>
              </section> }
        </div>
        <hr />
        <table>
            <thead >
                <td>Week</td>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thur</td>
                <td>Fri</td>
                <td>Total</td>
            </thead>
            <tbody>
                <tr>
                      <td>Wk1:</td>
              {weeklyPercentages.map((percentage, index) => (
                <td key={index}>{percentage}%</td>
              ))}
              <th>{totalPercentage}</th> 
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentprofile;
