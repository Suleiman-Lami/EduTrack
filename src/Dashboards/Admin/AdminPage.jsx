import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import { Bar } from 'react-chartjs-2';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminPage = () => {
  const [attendanceData, setAttendanceData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Checkout Attendance Monthly update'
      },
      {
        label: 'Present',
        data: [30, 25, 40, 45, 50, 55, 60, 70, 65, 60, 55, 50],
        backgroundColor: '#003B31',
      },
      {
        label: 'Absent',
        data: [10, 5, 15, 5, 20, 15, 10, 5, 20, 25, 30, 40],
        backgroundColor: '#F4B400',
      },
    ],
  });

  useEffect(() => {
    Aos.init();
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch('/api/attendance');
        const data = await response.json();
        const { present, absent } = data;

        setAttendanceData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: present, 
            },
            {
              ...prevData.datasets[1],
              data: absent, 
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <div className='AdminPage'>
      <div className="boxHolder" data-aos="fade-up" data-aos-duration="3000">
        <section>
          <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>students</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
        <section className='TeacherResult'>
        <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>Teachers</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
        <section>
        <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>Classes</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
      </div>
      <div className="AnnouncementBox">
        <div className='AnnounceArticle'>
          <div className="articleHeading">
            <h3>Announcement</h3>
            <button>Send</button>
          </div>
          <input type="text" placeholder='What would like to announce today?'/>
        </div>
        <aside className='Adminaside' >
      <span>  You're on the <h4> freemium</h4> plan! </span>
      <span>  add up to <h4> 3 teachers,</h4> </span>
         <span> and each can add</span>
          <h5> 5 students.</h5>
        </aside>
      </div>
      <div className="Chart">
        <div className="Chartbox"  >
          <Bar
            data={attendanceData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                tooltip: {
                  callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Number of Students',
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: 'Months',
                  },
                },
              },
            }}
          />
        </div>

        <div className="upGrade" >
        <h3>Want unlimitted access?</h3>
        <span>
      Upgrade now to unlock all features 
        and enjoy a better experience. 
        Tap the button to upgrade!</span>
            <button>Upgrade</button>
      </div>
      </div>
      
    </div>
  );
};

export default AdminPage;
