import React, { useEffect, useState } from 'react';
import './Forgot.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useParams } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {ClipLoader} from 'react-spinners'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';


const Reset = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [loading , setLoading] = useState(false)

    const Nav = useNavigate();
    const{ token} = useParams();

    const MyshowPassword = () => {
        setShowPassword(false);
      };

    const User = z.object({
        password: z.string()
        .min(1,{message: "Password is required"})
       .regex(
          /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
          {message: "Password must be 8 characters long, uppercase and special character (!@#$%^&*)."}
       ),    })

      const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: zodResolver(User),
      });
    
      const Onsubmit = async (data, e) => {
        e.preventDefault(); 
        setLoading(true)
        const url = `https://edutrack-jlln.onrender.com/api/v1/school/reset-password/${token}`
        const FormData ={
            schoolPassword: data.password
        }
        console.log(FormData);
        await axios.post(url, FormData)
        .then( res =>{
            console.log(res);
            setLoading(false)
            toast.success(res.data.data.message) 
            Nav('/')
        }) 
        .catch( Error => {
            console.log(Error);
            setLoading(false)
            toast.error(Error.response.data.message)
        })
      }

     useEffect(()=>{
        Aos.init();
      },[])

    return (
        <div className='Reset-Component'>
        <form onSubmit={handleSubmit(Onsubmit)} className='form' data-aos="zoom-in-down">
            <header>
                <h2>Reset Password</h2>
                <span> 
                    Input your new password below so that you can login and access all features.
                </span>
            </header>
            <section className='resetSection'>
                <label>New password</label>
                <div className='inputPasswordDiv'>
                <input type={showPassword ? "password" : "text"} placeholder='********'{...register('password')}/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
                </section>
            <button type="submit">
            { loading ? <ClipLoader color='#ffffff'/> : 'Submit'}
                </button>
        </form>
        <Toaster position="top-center" />
        </div>
    );
};

export default Reset;
