import React from 'react'
import './StudentOnboard.css'

const StudentForm = () => {
  return (
    <form>
    <h2>Onboard your student</h2>
    <section>
        <label>Student's Full name</label>
        <input type="name" placeholder='Asake Anuoluwa joy'/>
    </section>
    <section>
        <label>Student's Address</label>
        <input type="address"/>
    </section>
    <section>
        <label>Parent's email</label>
        <input type="email" placeholder='example@gmail.com'/>
    </section>
    <section>
        <label>Student's image</label>
        <input type="text" />
    </section>
    <section>
        <label>Student's class</label>
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
    </form>
  )
}

export default StudentForm