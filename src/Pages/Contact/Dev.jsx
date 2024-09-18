import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import ola from '../../assets/ola.jpg'

const Dev = () => {

    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <div className='Dev' data-aos="fade-left" data-aos-duration="3000">
        <div className="DevHeader">
            <h2>Quick Contact</h2>
                <span>+2349029523034</span>
                <span>asemudaraglory@gmail.com</span>
        </div>
        <hr />
        <div className="keyContact">
            <h2>KEy contact</h2>
            <section>
                <div className="profile">
                    <img src={'https://res.cloudinary.com/djhuirix9/image/upload/v1726554215/lami_l39zov.jpg'}/>
                </div>
               <div className="DevInfo">
               <span>Suleiman Rahmotu O.</span>
               <span>Dreallami@gmail.com</span>
               </div>
            </section>
            <section>
                <div className="profile">
                <img src={'https://res.cloudinary.com/djhuirix9/image/upload/v1726554256/lanray_paizhp.jpg'}/>
                </div>
                <div className="DevInfo">
               <span>Ibrahim Hammed O.</span>
               <span>hammedlanre71@gmail.com</span>
               </div>
            </section>
        </div>
        <hr />
        <div className="Address">
        <h2>Address</h2>

        </div>
    </div>
  )
}

export default Dev