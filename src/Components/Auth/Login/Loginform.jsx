import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Aos from 'aos';
import "aos/dist/aos.css"
import {ClipLoader} from 'react-spinners'


const Loginform = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading , setLoading] = useState(false)

  const Nav = useNavigate();

  const MyshowPassword = () => {
    setShowPassword(false);
  };

  const User = z.object({
    email: z.string().email({ message: 'Must be a valid email' }),
  });

  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async (data, e) => {
    e.preventDefault();  
    console.log("Success", data);
    Nav('/admin');
  };

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
      <h2>Log in</h2>
      <section>
        <label>Email Address</label>
        <input type="email" placeholder='Example@gmail.com' {...register("email")} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
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
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
        <label className='Forgot' onClick={() => Nav('/Forgottenpassword')}>Forgot password ?</label>
      </section>
      <button type='submit'>
      { loading ? <ClipLoader color='#ffffff'/> : 'SIgn in'}
      </button>
      <footer>
        <span>Do not have an account? <h4 onClick={() => Nav('/signUp')}>Signup</h4></span>
      </footer>
    </form>
  );
};

export default Loginform;
