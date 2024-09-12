import React, { useEffect } from 'react'
import './SignModal.css'
import Aos from 'aos';
import "aos/dist/aos.css"

const SignModal = () => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='signModal'>
     <main>
     <div className="infoBox">
        <h2>Transform your school with Edutrack.</h2>
        <span>Empower your school with smarter attendance tracking, improved student safety, and seamless communication, all in one easy-to-use platform.</span>
        <button>Sign up- it’s free!</button>
      </div>
      <div className="boxHolder">
        <section data-aos="fade-down"  data-aos-duration="3000">
        <section className='orange' data-aos="fade-right"  data-aos-duration="3000">
        <section className='green'data-aos="fade-left"  data-aos-duration="3000"></section>
        </section>
        </section>
      
      </div>
     </main>
     
    </div>
  )
}

export default SignModal