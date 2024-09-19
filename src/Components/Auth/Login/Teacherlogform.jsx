import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Aos from 'aos';
import "aos/dist/aos.css";
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginInfo } from '../../../Global/Slice';

const Teacherlogform = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teacherID } = useParams(); 

  const MyshowPassword = () => {
    setShowPassword(false);
  };

  const User = z.object({
    email: z.string().email({ message: 'Must be a valid email' }),
    password: z.string().min(1, { message: 'Password is required' }),
  });

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async (data, e) => {
    e.preventDefault(); 
    setLoading(true); 
    const url = "https://edutrack-jlln.onrender.com/api/v1/teacher/sign-in";
    
    const FormData = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(url, FormData);
      setLoading(false);
      toast.success(res.data.message);
      localStorage.setItem('teacherID', res.data.data.teacherID);
      
      dispatch(loginInfo(res.data.data));
      console.log(res.data.data.teacherID);
      
      if (res.data.data.isVerified === true) {
        navigate(`/teacher/${res.data.data.teacherID}`);
      } else {
        toast.error('Please Verify your email :)');
      }
    } catch (error) {
      setLoading(false);
      console.error('Login error:', error);
      toast.error(error.res?.data?.message);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
      <h2>Log in</h2>
      <section>
        <label>Email Address</label>
        <input type="email" placeholder='Example@gmail.com' {...register("email")} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </section>
      <section>
        <label>Teacher password</label>
        <div className='inputPasswordDiv'>
          <input
            className='loginInput'
            type={showPassword ? "password" : "text"}
            placeholder='********'
            {...register('password')}
          />
          {showPassword ?
            <FaRegEye onClick={MyshowPassword} style={{ fontSize: "15px", cursor: "pointer", marginRight: "5px" }} /> :
            <FaRegEyeSlash onClick={() => setShowPassword(true)} style={{ fontSize: "15px", cursor: "pointer" }} />}
        </div>
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        <label className='Forgot' onClick={() => navigate('/Forgottenpassword')}>Forgot password?</label>
      </section>
      <button type='submit'>
        {loading ? <ClipLoader color='#ffffff' size={20}/> : 'Sign in'}
      </button>
      <Toaster />
    </form>
  );
};

export default Teacherlogform;
