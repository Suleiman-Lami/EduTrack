import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Loginform = () => {
    const [showPassword, setShowPassword] = useState(true)
    const Nav = useNavigate(); 

    const MyshowPassword = ()=> {
        setShowPassword(false)
     }
  return (
        <form>
        <h2>Log in</h2>
        <section>
            <label>Email Address</label>
            <input type="email" placeholder='Example@gmail.com'/>
        </section>
        <section>
            <label>password</label>
            <div className='inputPasswordDiv'>
                <input className ='loginInput' type={showPassword ? "password" : "text"} placeholder='********'/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
            <label className='Forgot' onClick={() => Nav('/Forgottenpassword')}>Forgot password ?</label>
        </section>
        <button>Sign up</button>
        <footer>
            <span>Do not have an account? <h4 onClick={()=> Nav('/signUp')}>Signup</h4></span>
        </footer>

    </form>
  
  )
}

export default Loginform