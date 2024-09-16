import React, { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import Ola from '../../assets/ola.jpg'

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
                    <img src={Ola}/>
                </div>
                <span>Suleiman Rahmotu O.</span>
            </section>
            <section>
                <div className="profile">
                    <img src= {Ola}/>
                </div>
                <span> Ibrahim H</span>
            </section>
        </div>
        <hr />
        <div className="Address">
        <h2>Address</h2>
            <h4>Email:</h4>
            <span>
                <p>Dreallami@gmail.com</p>
                <p>ibrahim@gmail.com</p>
            </span>

    
        </div>
    </div>
  )
}

export default Dev