import React, { useEffect } from 'react'
import './Leadership.css'
import Aos from 'aos';
import "aos/dist/aos.css"

const Leadership = () => {

    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <div className='Leadership-component'>
        <h2>Meet the team</h2>
        <div className="text" data-aos= "fade-left"  data-aos-duration="3000">
        Our success is rooted in building teams of outstanding individuals with diverse backgrounds and perspectives. 
We believe we are a better company when all of us are able to bring our full authentic selves to work. 
Together, we’re committed to building a team and culture that’s diverse, equitable and inclusive.
        </div>
        <div className="boxHolder">
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend</span>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Leadership