import React, { useEffect, useState } from 'react'
import './TeacherSignUp.css'
import {z} from 'zod'
import Aos from 'aos';
import "aos/dist/aos.css"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const Teacherform = () => {
  const [loading, setLoading]= useState();
  const Nav = useNavigate();       
  const User = z.object({
    Name: z.string(),
    email: z.string().email({message: 'must be a valid email'}),
    place: z.string(),
    schoolProfile: z.custom((val) => {
      if (val && val.length > 0 && val[0] instanceof File) {
        return true;
      }
      return false;
    }, { message: "Please upload a valid file" }),     status: z.string(),
    gender: z.string()
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async(data)=>{
    setLoading(true)
    console.log("SuCCESS", data);
    Nav('/admin/teachers')
    setLoading(false)
  }

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <form onSubmit={handleSubmit (Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
    <h3>Onboard your staff</h3>
    <section>
        <label>Teacher's Full name</label>
        <input type="name" placeholder='Asake Anuoluwa joy' {...register('Name')}/>
        {errors.Name && <span style={{color: 'red'}}>{errors.Name.message}</span>}
    </section>
    <section>
        <label>Teacher's Address</label>
        <input type="address" {...register('place')}/>
        {errors.place && <span style={{color: 'red'}}>{errors.place.message}</span>}
    </section>
    <section>
        <label>Teacher's email</label>
        <input type="email" placeholder='example@gmail.com' {...register("email")}/>
        {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
    </section>
    <section>
        <label>Teacher's image</label>
        <div className="inputDiv"><input type="file" {...register('Image')}/></div>
        {errors.Image && <span style={{color: 'red'}}>{errors.Image.message}</span>}
    </section>
    <section>
        <label>Teacher's Marital status</label>
        <input type="text" {...register("status")}/>
        {errors.status && <span style={{color: 'red'}}>{errors.status.message}</span>}
    </section>
    <section>
        <label>Gender</label>
        <input type="text" {...register("gender")} />
        {errors.gender && <span style={{color: 'red'}}>{errors.gender.message}</span>}
    </section>

    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button type='submit'>
    { loading ? <ClipLoader color='#ffffff'/> : 'Onboard'}
    </button>

   </form>
  )
}

export default Teacherform