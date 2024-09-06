import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const adminForm = () => {
    const [showPassword, setShowPassword] = useState(true)
    const Nav = useNavigate();
    const MyshowPassword = ()=> {
        setShowPassword(false)
     }
     
     
  const User = z.object({
    schoolName: z.string(),
    email: z.string().email({message: 'must be a valid email'}),
    place: z.string(),
    logo: z.instanceof(File, { message: "Please upload a valid file" }),
    password: z.string({message: 'must be a string'}).min(8, {message: 'password must be more than 8 characters'}).regex(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: " password must contain a special character"})
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async(data)=>{
    console.log("SuCCESS", data);
    Nav('/')
  }

  return (
   <form onSubmit={handleSubmit (Onsubmit)} >
    <h2>Sign up</h2>
    <section>
        <label>Institute name</label>
        <input type="school" placeholder='Doblin High school' {...register ("schoolName")} required />
        {errors.schoolName && <span style={{color: 'red'}}>{errors.schoolName.message}</span>}
    </section>
    <section>
        <label>Institute email</label>
        <input type="email" placeholder='Doblinhighschool@gmail.com' {...register ("email")} required />
        {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
    </section>
    <section>
        <label>Institute location</label>
        <input type="place" {...register("place")} required/>
        {errors.place && <span style={{color: 'red'}}>{errors.place.message}</span>}
    </section>
    <section>
        <label>Institute logo</label>
        <div className="inputDiv">
        <input type="file" {...register("logo")} />
        </div>
        {errors.logo && <span style={{color: 'red'}}>{errors.logo.message}</span>}
    </section>
    <section>
        <label>password</label>
        <div className='inputPasswordDiv'>
                <input type={showPassword ? "password" : "text"} placeholder='********' {...register("password")}/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
    </section>
    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button>Sign up</button>

    <footer>
        <span>Already on Edutrack? <h4 onClick={()=> Nav('/Login')}>Login</h4></span>
    </footer>

   </form>
  )
}

export default adminForm