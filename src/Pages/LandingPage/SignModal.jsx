import React, { useEffect } from 'react'
import './SignModal.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom';

const SignModal = ({loginInfo}) => {
  const Nav = useNavigate();


  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='signModal'>
     <main>
     <div className="infoBox">
        <h2>Transform your school with Edutrack.</h2>
        <span>Empower your school with smarter attendance tracking, improved student safety, and seamless communication, all in one easy-to-use platform.</span>
        { 
          loginInfo === false ?
          <button onClick={()=>Nav('/signup')}>Sign up- it’s free!</button>
            :
            null
        }
      </div>
      <div className="boxHolder">
        <section>
        <section className='orange' >
        <section className='green'></section>
        </section>
        </section>
      
      </div>
     </main>
     
    </div>
  )
}

export default SignModal