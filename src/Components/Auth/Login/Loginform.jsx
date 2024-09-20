import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Aos from 'aos';
import "aos/dist/aos.css"
import {ClipLoader} from 'react-spinners'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginInfo, loginSuccess } from '../../../Global/Slice';



const Loginform = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading , setLoading] = useState(false)

  const Nav = useNavigate();
  const dispatch = useDispatch();
  const  schoolID = useParams()

  const MyshowPassword = () => {
    setShowPassword(false);
  };

  const User = z.object({
    email: z.string().email({ message: 'Must be a valid email' }),
    password: z.string()
    .min(8, { message: 'Password must be more than 8 characters' })
    .regex( /^(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.\s).{6,}$/,{ message: "Password must contain a special character" })
  });

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async (data, e) => {
    e.preventDefault(); 
    setLoading(true) 
    const url = 'https://edutrack-jlln.onrender.com/api/v1/school/log-in'
    const FormData ={
      schoolEmail: data.email,
      schoolPassword: data.password,
    }
    console.log(FormData);
    
     await axios.post(url, FormData)
    .then( res => {
      console.log(res.data.data);
      localStorage.setItem('userToken', res.data.userToken);
      localStorage.setItem('schoolID', res.data.data.schoolID);
      dispatch(loginInfo(res?.data?.data))
      dispatch(loginSuccess(res?.data?.data))
      setLoading(false)
      toast.success('login successfull')
      console.log(res.data.data.schoolID);
     if (res.data.data.isVerified === true) {
        Nav(`/admin/${res?.data?.data?.schoolID}`)
     }
     else{
      toast.error('Please Verify your email :)')
     }
    })
    .catch( Error => {
      console.log(Error);
      setLoading(false)
      toast.error(Error.data.message)
    })
  
  };

  useEffect(()=>{
    Aos.init();
  },[]);

  return (

    <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
      <h2>Log in</h2>
      <section>
        <label>Email Address</label>
        <input type="email" placeholder='Example@gmail.com' {...register("email")} />
        {errors?.email && <span style={{ color: 'red' }}>{errors?.email?.message}</span>}
      </section>
      <section>
        <label>Password</label>
        <div className='inputPasswordDiv'>
          <input className='loginInput' type={showPassword ? "password" : "text"} placeholder='********' {...register('password')} />
          {
            showPassword ?
              <FaRegEye onClick={MyshowPassword} style={{ fontSize: "15px", cursor: "pointer", marginRight: "5px" }} /> :
              <FaRegEyeSlash onClick={() => setShowPassword(true)} style={{ fontSize: "15px", cursor: "pointer" }} />
          }
        </div>
        {errors?.password && <span style={{ color: 'red' }}>{errors?.password?.message}</span>}
        <label className='Forgot' onClick={() => Nav('/Forgottenpassword')}>Forgot password ?</label>
      </section>
      <button type='submit'>
      { loading ? <ClipLoader color='#ffffff'/> : 'SIgn in'}
      </button>
      <footer>
        <span>Do not have an account? <h4 onClick={() => Nav('/signUp')}>Signup</h4></span>
      </footer>
      <Toaster position="top-center" />
    </form>
  );
};

export default Loginform;
