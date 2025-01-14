import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import { Bar } from 'react-chartjs-2';
import Aos from 'aos';
import "aos/dist/aos.css"
import axios from 'axios'
import { BsPersonRolodex } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi"
import { ClipLoader } from 'react-spinners';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminPage = () => {
 const  loginInfo = useSelector((state)=> state.eduTrack.user.schoolInfo)
  console.log(loginInfo);
  
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [attendanceData, setAttendanceData] = useState({
      labels: ['wk1', 'wk2', 'wk3', 'wk4', 'wk5', 'wk6', 'wk7', 'wk8', 'wk9', 'wk10', 'wk11', 'wk12'],
      datasets: [
        {
          label: 'Present',
          data: Array(12).fill(0), 
          backgroundColor: '#003B31',
        },
        {
          label: 'Absent',
          data: Array(12).fill(0), 
          backgroundColor: '#F4B400',
        },
      ],
    });

    const Nav = useNavigate();
  
    const fetchStudents = async () => {
      setLoading(true);
      const userToken = localStorage.getItem('userToken');
      try {
        const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-students',{
          headers: {
            "Authorization": `Bearer ${userToken}`
          },
        });
        setStudents(res.data.data.students);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching students:', error);
      }
    };
  
    const fetchTeachers = async () => {
      setLoading(true);
      const userToken = localStorage.getItem('userToken');
      try {
        const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/get-teachers',{
          headers: {
            "Authorization": `Bearer ${userToken}`
          },
        });
        setTeachers(res.data.data.teachers);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching teachers:', error);
      }
    };
  
    const calculateAttendance = async () => {
      setLoading(true);
      const userToken = localStorage.getItem('userToken');
      try {
        const res = await axios.get('https://edutrack-jlln.onrender.com/api/v1/school/percentage-record',{
          headers: {
            "Authorization": `Bearer ${userToken}`
          },
        });
        const attendance = res.data.data;
        console.log(attendance);
        
        const presentPercentages = [];
        const absentPercentages = [];

        attendance.forEach((record) => {
          const presentPercentage = parseFloat(record.presentPercentage.replace('%', '')); 
          const absentPercentage = parseFloat(record.absentPercentage.replace('%', '')); 
    
          presentPercentages.push(presentPercentage);
          absentPercentages.push(absentPercentage);
        });
        setAttendanceData(prevData => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: presentPercentages,
            },
            {
              ...prevData.datasets[1],
              data: absentPercentages,
            },
          ],
        }));
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching attendance data:', error);
      }
    };

    useEffect(() => {
      Aos.init();
      fetchStudents();
      fetchTeachers();
      calculateAttendance();
    }, []);

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.raw.toFixed(1)}%`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100, 
          title: {
            display: true,
            text: 'Percentage of Students (%)',
          },
          ticks: {
            callback: function(value) {
              return `${value}%`; 
            },
          },
        },
        x: {
          title: {
            display: true,
            text: 'Weeks',
          },
        },
      },
    };

    return (
        <div className='AdminPage'>
          <div className="boxHolder" data-aos="fade-up" data-aos-duration="3000">
            <section>
              <div className="color"></div>
              <div className="textArea">
                <div className="iconHolder"><PiStudentDuotone size={70} color='#003B31'/></div> 
                <div className="calc">
                  <span>Students</span>
                  {
                      Loading ? 
                      <ClipLoader color='#003B31' />
                      :
                     <h3>{students.length}</h3>
                    }
                </div>
              </div>
            </section>
            <section className='TeacherResult'>
              <div className="color"></div>               
              <div className="textArea">
                <div className="iconHolder"><BsPersonRolodex size={70} color='F4B400'/> </ div>
                <div className="calc">
                  <span>Teachers</span>
                  {
                      Loading ? 
                      <ClipLoader color='#003B31' />
                      :
                      <h3>{teachers.length}</h3>
                    }
                </div>
              </div>
            </section>
            <section>
              <div className="color"></div>
              <div className="textArea">
                <div className="iconHolder"><PiStudentDuotone size={70} color='#003B31'/></div>
                <div className="calc">
                  <span>Classes</span>
                  {
                      Loading ? 
                      <ClipLoader color='#003B31' />
                      :
                     <h3>{students.length}</h3>
                    }
                </div>
              </div>
            </section>
          </div>
          <div className="AnnouncementBox">
            <div className='AnnounceArticle'>
              <textarea type="text" placeholder='What would like to announce today?'/>
              <div className="articleHeading">
                <h3>Announcement</h3>
                <button>Send</button>
              </div>
            </div>
            <aside className='Adminaside'>
              <span>You're on the <h4>{loginInfo.subscriptionPlan}</h4> plan!</span>
              <span>Add up to <h4>{loginInfo.maxTeachers} teachers</h4></span>
              <span>and</span>
              <h5>{loginInfo.maxStudents} students.</h5>
            </aside>
          </div>
          <div className="Chart">
            <div className="Chartbox">
             {
              Loading ? 
              <ClipLoader color='#003B31' size={40}/>
              :<Bar
              data={attendanceData}
              options={chartOptions}
            />
             }
            </div>
    
            <div className="upGrade">
              <h3>Want unlimited access?</h3>
              <span>
                Upgrade now to unlock all features and enjoy a better experience.
                Tap the button to upgrade!
              </span>
              <button onClick={()=>Nav('/Pricing')}>Upgrade</button>
            </div>
          </div>
        </div>
      )  
  };
  
export default AdminPage;
