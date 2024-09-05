import React from 'react'
import './SignModal.css'

const SignModal = () => {
  return (
    <div className='signModal'>
     <main>
     <div className="infoBox">
        <h2>Transform your school with Edutrack.</h2>
        <span>Empower your school with smarter attendance tracking, improved student safety, and seamless communication, all in one easy-to-use platform.</span>
        <button>Sign up- it’s free!</button>
      </div>
     </main>
      <div className="boxHolder">
        <section></section>
        <section className='green'></section>
        <section className='orange'></section>
      </div>
    </div>
  )
}

export default SignModal