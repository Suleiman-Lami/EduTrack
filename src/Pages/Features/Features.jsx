import React, { useEffect } from 'react'
import './Features.css'
import values from '../../assets/WOMAN_WRITING.png'
import features1 from '../../assets/Features1.png'
import features2 from '../../assets/Features2.png'
import features3 from '../../assets/Features3.png'
import SignModal from '../LandingPage/SignModal'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'

const Features = () => {
    const Nav = useNavigate();

    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <div className='Features'>
        <div className="intro">
            <div className="textArea">
                <h2>Welcome to Edutrack!</h2>
                <span>We build school administration software 
                to make life easier for educators and families.</span>
                <button onClick={()=>Nav('/signup')}>Sign up- it’s free!</button>
            </div>
            <div className="ImageHolder"  data-aos="fade-left" data-aos-duration="3000">
                <img src={features1}/>
            </div>
        </div>

        <div className="Textarea">
            <h2>Our features</h2>
            <span data-aos="fade-up" data-aos-duration="3000"> Introducing our popular features for parents, teachers, and administrators, It's the ideal solution for any school or district ready to move beyond "the way we've always done it." .  </span>
        </div>
        <div className="firstSlide">
            <div className="imgHolder" data-aos="fade-right" data-aos-duration="3000">
                <img src={'https://res.cloudinary.com/djhuirix9/image/upload/v1726554033/bby_zarlqx.jpg'} alt='feature2'/>
            </div>
        <div className="textArea"  data-aos="fade-left" data-aos-duration="3000">
            <h2>Attendance Feature:</h2>
            <span>With our app, taking attendance has never been easier. Teacherscan instantly mark students present or absent with just a few taps. The app also provides detailed attendance records for each student, making it easy to monitor attendance trends and identify patterns.</span>
        </div>
        </div>
        <div className="secondSlide">
        <div className="textArea"  data-aos="fade-right" data-aos-duration="3000">
            <h2>Communication Features:</h2>
            <span>Our app goes beyond attendance by facilitating seamless communication between schools, teachers, and parents. Announcements for Important school updates, like events or schedule changes, can be broadcasted to all parents, ensuring no one misses vital information.</span>
        </div>
        <div className="imgHolder"  data-aos="fade-left" data-aos-duration="3000">
                <img src={features3}/>
            </div>
        </div>
        <SignModal/>
    </div>
  )
}

export default Features