import React, { useEffect } from 'react'
import './Provide.css'
import { MdCircleNotifications } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Aos from 'aos';
import "aos/dist/aos.css"

const Provide = () => {
    useEffect(()=>{
        Aos.init();
      },[]) 
  return (
    <div className='whatWeProvide'>
        <h2>See How EduTrack Makes Attendance Easy</h2>
        <main>
            <aside data-aos="fade-right"></aside>
            <article>
                <h2>We provide: </h2>
                <div className="boxHolder" data-aos="fade-left">
                    <section>
                        <div className="icon"><MdCircleNotifications size={40} color='white'/></div>
                        <div className="sectionInfo">
                            <h2>Automated notifications:</h2>
                            <span>Parents get automated alerts every time their child is absent in the school. So you never have to worry about their peace of mind.</span>
                        </div>
                    </section>
                    <section className='coloredBox'>
                    <div className="icon"><MdConnectWithoutContact size={40} color='white'/></div>
                        <div className="sectionInfo">
                            <h2>Contactless Check-in:</h2>
                            <span>Go paperless and save time with ourattendance app by streamlining check-in and check-out processes.</span>
                        </div>
                    </section>
                    <section className='lightgreen'>
                    <div className="icon"><FaPeopleGroup  size={40} color='white'/></div>
                        <div className="sectionInfo">
                            <h2>Real-time Ratio:</h2>
                            <span>As a Teacher, School and Parent, you caneasily access a student attendance records as at when needed. </span>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    </div>
  )
}

export default Provide