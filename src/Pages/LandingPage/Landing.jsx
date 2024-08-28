import React from 'react'
import './Landing.css'
import { NavLink } from 'react-router-dom'
import { LuCalendarClock } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { LiaStar } from "react-icons/lia";
import SignModal from './SignModal';
const Landing = () => {
  return (
    <div className='landingPage'>
      <div className="landingWrap">
          <div className="intro">
          <div className="introText">
            <h3> We Effortlessly Simplify Attendance, Boost Communication, and Enhance Learning</h3>
            <span>We Are Your Complete Solution for Easy School Management</span>
            <button><NavLink to={'signUp'}>Sign up - it’s free!</NavLink></button>
          </div>
        </div>

        <div className="whyEduTrack">
            <h2>Why EduTrack Student Management Software</h2>
            <div className="info">
              <div className="infoText">
                <span>We make managing your school easier with EduTrack! This all-in-one software 
                  helps you track attendance, communicate better, without hassle. It saves 
                  you time by handling your attendance effectively so you can focus more on 
                  helping your students learn and succeed. With easy-to-use features and 
                  helpful insights, EduTrack is the best choice for keeping your school running 
                  smoothly. Choose EduTrack and see how it can simplify your school 
                  management!"</span>
              </div>
              <div className="infoImage"></div>
            </div>
          </div>

          <div className="Feature1">
            <div className="f1Textarea">
              <div className="top">
                <h3>Easy-to-Understand</h3>
                <span> descriptions of different modules or features that could be included in a system to help manage a school more effectively</span>
              </div>
              <div className="bottom">
                <span>Check out awesome features Edutrack has to offer</span>
                <button>See all features</button>
              </div>
            </div>
            <div className="f1Boxholder">
              <section>
                <div className="iconHolder">
                <LuCalendarClock size={60} color='orange'/>
                </div>
                  <div className="textArea">
                    <h3>Timetable & Attendance</h3>
                      <span>Quickly mark attendance and create a mistake-free timetable. Assign classrooms and subjects to teachers easily.</span>
                  </div>
              </section>
              <section>
                <div className="iconHolder">
                <FaPeopleRoof size={60} color ='orange'/>
                  </div>
                  <div className="textArea">
                    <h3>Parents Collaboration</h3>
                      <span>Parents can easily track their child's attendance and academic progress, and get instant alerts about upcoming events."</span>
                  </div>
              </section>
            </div>
          </div>
          <div className="Feature2">
            <div className="f2Wrap">
            <h3>Find the Perfect School Management System Designed Just for Your School's Needs!</h3>
            <div className="f2BoxHolder">
            <section>
                <div className="iconHolder">
                <LuCalendarClock size={60} color='orange'/>
                </div>
                  <div className="textArea">
                    <h3>Simple and Easy for Teachers to Use:</h3>
                      <span>Designed to help teachers and parents easily complete tasks without needing any special skills.</span>
                  </div>
              </section>
            <section>
                <div className="iconHolder">
                <LuCalendarClock size={60} color='orange'/>
                </div>
                  <div className="textArea">
                    <h3>Track Attendance Subject  or Day wise</h3>
                      <span>According to your institution prefe-rence, student attendance type can be set up either day-wise or subject-wise. Teachers can mark student attendance for a half day or full day with/without reason in just a click. </span>
                  </div>
              </section>
            </div>
            </div>
          </div>

          <div className="starBoxes">
            <h3>Benefits of Attendance Management System Software</h3>
            <div className="boxHolder">
              <div className="starBox">
                <div className="firstCircle">
                  <div className="secondCircle">
                    <div className="iconHolder">
                    <LiaStar size={80} color='orange' />
                    </div>
                    <div className="textArea">
                      <span>Eliminate the mundane paperwork, data redundancy & incorrect data entry</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="starBox">
                <div className="firstCircle">
                  <div className="secondCircle">
                    <div className="iconHolder">
                    <LiaStar size={80} color='orange' />
                    </div>
                    <div className="textArea">
                      <span>Improve discipline & punctuality of students, teachers & other staff members</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="starBox">
                <div className="firstCircle">
                  <div className="secondCircle">
                    <div className="iconHolder">
                    <LiaStar size={80} color='orange' />
                    </div>
                    <div className="textArea">
                      <span>Parents receive instant  updates about their child's location via SMS, push notifications, and more.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <SignModal/>
    </div>
  )
}

export default Landing