import React, { useEffect, useState } from 'react'
import './Studentprofile.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'
import values from '../../../../assets/WOMAN_WRITING.png'


const Studentprofile = ({ role,}) => {
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

  const handleGoBack = () => {
    if (role === 'admin') {
      Nav('/admin-dashboard'); 
    } else if (role === 'teacher') {
      Nav('/teacher-dashboard'); 
    } else {
      Nav(-1); 
    }
  };
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className='Studentprofile'>
      <h3>Student  information</h3>
    <div className='btnHolder'> 
    <button onClick={handleGoBack}>Go back</button>
         {role !== 'teacher' &&  role !== 'admin' ?
            <>
              <button onClick={() => Nav('/studentEdit')}>
                Edit Profile
              </button>
            </>: null
          }</div> 
      <div className="profileBody">
        <div className="imgHolder">
          <div className="imgBox">
            <img src={values} alt="Profile" />
          </div>
          <section>
            <label>Full Name:</label>
            <span>Suleiman Ramotu Lami Omoroh</span>
          </section>
          <section>
            <label>Email:</label>
            <span>Example@gmail.com</span>
          </section>
          <section>
            <label>Address:</label>
            <span>22 Wowo street</span>
          </section>
          <section>
            <label>Class:</label>
            <span>SSS 2</span>
            </section>
            {role !== 'teacher' &&  role !== 'admin' ?
              <section>
                <label>Password:</label>
                <h4>EDUs123</h4>
              </section> : null }
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
              <th>{totalPercentage}%</th> 
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentprofile;
