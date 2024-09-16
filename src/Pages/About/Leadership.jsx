import React, { useEffect } from 'react'
import './Leadership.css'
import Aos from 'aos';
import "aos/dist/aos.css"
// import lami from '../../assets/Lami.JPG'
import mode from '../../assets/mode.jpg'
import val from '../../assets/Valentine.jpeg'

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
                <div className="imageHolder">
                    {/* <img src={lami}/> */}
                </div>
                <div className="textArea">
                    <h3>Sueliman R lami</h3>
                    <span>Frontend Developer</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder">
                <img src={val}/>
                </div>
                <div className="textArea">
                    <h3>Valentine A peterson</h3>
                    <span>Frontend Developer</span> 
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Ibrahim O Hammed</h3>
                    <span>Backend Developer</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder"></div>
                <div className="textArea">
                    <h3>Christian Ogwuche</h3>
                    <span>Backend Developer</span>
                </div>
            </section>
            <section  data-aos="fade-up"
     data-aos-duration="3000">
                <div className="imageHolder">
                    <img src={mode}/>
                </div>
                <div className="textArea">
                    <h3>Modesolaoluwa. A </h3>
                    <span>Product Designer</span>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Leadership