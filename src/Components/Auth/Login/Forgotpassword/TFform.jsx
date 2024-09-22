import React, { useEffect, useState } from 'react'
import './Forgot.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const TFform = () => {
    const [loading , setLoading] = useState(false)
    const Nav = useNavigate();

    const User = z.object({
        email: z.string().email({ message: 'Must be a valid email' }),
    })

      const { register, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: zodResolver(User),
      });
    
      const Onsubmit = async (data, e) => {
        e.preventDefault(); 
        setLoading(true)
        const url = 'https://edutrack-jlln.onrender.com/api/v1/teacher/forget-password'
        const FormData ={
            email: data.email
        }
        console.log(FormData);
        await axios.post(url, FormData)
        .then( res =>{
            console.log(res);
            setLoading(false)
            toast.success(res.data.message) 
            Nav('/')
        })
        .catch( Error => {
            console.log(Error);
            setLoading(false)
            toast.error(Error.response.message)
        })
      }

    useEffect(()=>{
        Aos.init();
      },[])

    return (
        <>
        <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000" >
            <header>
                <div className="Icon"></div>
                <h2>Forgot Password?</h2>
                <span>
                    Enter the email address you were registered with. We will send you an email with instructions to reset your password.
                </span>
            </header>
            <section>
                <label>Email Address</label>
                <input type="email" placeholder='Example@gmail.com' {...register('email')}/>
                { errors?.email && <span style={{ color: 'red' }}>{errors?.email?.message}</span>}
            </section>
            <button type="submit">
            { loading ? <ClipLoader color='#ffffff'/> : 'Continue'}
            </button>
            <Toaster position="top-center" />
        </form>
        </>
    );
}

export default TFform