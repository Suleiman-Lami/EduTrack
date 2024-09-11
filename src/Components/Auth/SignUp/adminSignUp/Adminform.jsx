import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {z} from 'zod'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {toast, Toaster} from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { schoolSignUp } from '../../../../Global/Slice';
import {ClipLoader} from 'react-spinners'


const AdminForm = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [loading , setLoading] = useState(false)
    const Nav = useNavigate();
    const MyshowPassword = ()=> {
        setShowPassword(false)
     }
     
  const dispatch = useDispatch();   
  const User = z.object({
    schoolName: z.string(),
    schoolEmail: z.string().email({message: 'must be a valid email'}),
    schoolAddress: z.string(),
    schoolProfile: z.custom((val) => {
      if (val && val.length > 0 && val[0] instanceof File) {
        return true;
      }
      return false;
    }, { message: "Please upload a valid file" }), 
   schoolPassword: z.string({message: 'must be a string'}).min(8, {message: 'password must be more than 8 characters'}).regex(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {message: " password must contain a special character"})
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const onSubmit = async(data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('schoolName', data.schoolName);
    formData.append('schoolEmail', data.schoolEmail);
    formData.append('schoolAddress', data.schoolAddress);
    formData.append('schoolPicture', data.schoolPicture[0]); 
    formData.append('schoolPassword', data.schoolPassword);
    
    dispatch(schoolSignUp(data))
    console.log(data);
    // console.log(formData);
    console.log('clicked');
    setLoading(true)
    const url = "https://edutrack-jlln.onrender.com/api/v1/school/sign_up"
    console.log(url);
    const response = await axios.post(url, data)
    .then (res => {
      console.log(res);
      setLoading(false)
      toast.success('sign up successful please verify your email')
      Nav('/login')

    })
    .catch( Error => {
      console.log(Error);
      setLoading(false)
      toast.error('Verification failed')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
    <h2>Sign up</h2>
    <section>
        <label>Institute name</label>
        <input type="school" placeholder='Doblin High school' {...register ("schoolName")} required />
        {errors.schoolName && <span style={{color: 'red'}}>{errors.schoolName.message}</span>}
    </section>
    <section>
        <label>Institute email</label>
        <input type="email" placeholder='Doblinhighschool@gmail.com' {...register ("schoolEmail")} required />
        {errors.schoolEmail && <span style={{color: 'red'}}>{errors.schoolEmail.message}</span>}
    </section>
    <section>
        <label>Institute location</label>
        <input type="place" {...register("schoolAddress")} required/>
        {errors.schoolAddress && <span style={{color: 'red'}}>{errors.schoolAddress.message}</span>}
    </section>
    <section>
        <label>Institute logo</label>
        <div className="inputDiv">
        <input type="file" {...register("schoolPicture")} />
        </div>
        {errors.schoolPicture && <span style={{color: 'red'}}>{errors.schoolPicture.message}</span>}
    </section>
    <section>
        <label>password</label>
        <div className='inputPasswordDiv'>
                <input type={showPassword ? "password" : "text"} placeholder='********' {...register("schoolPassword")}/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
                {errors.schoolPassword && <span style={{color: 'red'}}>{errors.schoolPassword.message}</span>}
    </section>
    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button type='submit'>
      { loading ? <ClipLoader color='#ffffff'/> : 'SIgn up'}
      </button>

    <footer>
        <span>Already on Edutrack? <h4 onClick={()=> Nav('/Login')}>Login</h4></span>
    </footer>
    <Toaster/>            
   </form>
  )
}

export default AdminForm