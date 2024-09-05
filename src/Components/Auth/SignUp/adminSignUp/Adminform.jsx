import React from 'react'
import './SignUp.css'

const adminForm = () => {
  return (
   <form>
    <h2>Sign up</h2>
    <section>
        <label>Institute name</label>
        <input type="school" placeholder='Doblin High school'/>
    </section>
    <section>
        <label>Institute email</label>
        <input type="school" placeholder='Doblinhighschool@gmail.com'/>
    </section>
    <section>
        <label>Institute location</label>
        <input type="place"/>
    </section>
    <section>
        <label>Institute logo</label>
        <input type="text" />
    </section>
    <section>
        <label>password</label>
        <input type="password" placeholder='********'/>
    </section>
    <section>
        <label>confirm Password</label>
        <input type="password" placeholder='********'/>
    </section>

    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button>Sign up</button>

    <footer>
        <span>Already on Edutrack? <h4>Login</h4></span>
    </footer>

   </form>
  )
}

export default adminForm