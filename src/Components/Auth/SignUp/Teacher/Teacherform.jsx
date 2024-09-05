import React from 'react'
import './TeacherSignUp.css'

const Teacherform = () => {
  return (
    <form>
    <h2>Onboard your staff</h2>
    <section>
        <label>Teacher's Full name</label>
        <input type="name" placeholder='Asake Anuoluwa joy'/>
    </section>
    <section>
        <label>Teacher's Address</label>
        <input type="address"/>
    </section>
    <section>
        <label>Teacher's email</label>
        <input type="email" placeholder='example@gmail.com'/>
    </section>
    <section>
        <label>Teacher's image</label>
        <input type="text" />
    </section>
    <section>
        <label>Teacher's Marital status</label>
        <input type="text"/>
    </section>
    <section>
        <label>Gender</label>
        <input type="text" />
    </section>

    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button>Sign up</button>

    {/* <footer>
        <span>Already on Edutrack? <h4>Login</h4></span>
    </footer> */}

   </form>
  )
}

export default Teacherform