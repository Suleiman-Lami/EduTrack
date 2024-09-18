import React, { useEffect, useState } from 'react';
import './TeacherSignUp.css';
import { z } from 'zod';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';

const Teacherform = () => {
  const [loading, setLoading] = useState(false);
  const Nav = useNavigate(); 
  const dispatch = useDispatch();      

  const User = z.object({
    Name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: 'Must be a valid email' }),
    place: z.string().min(1, { message: "Address is required" }),
    teacherClass: z.union([
      z.string().min(1, { message: "Class cannot be an empty string" }),
      z.number({ message: "Class must be a valid number" })
    ]),
    teacherProfile : z.custom((val) => {
      if (val && val.length > 0 && val[0] instanceof File) {
        return true;
      }
      return false;
    }, { message: "Please upload a valid file" }),
    status: z.enum(['single', 'married', 'divorced'], { message: 'Please select a valid marital status' }),
    gender: z.enum(['male', 'female'], { message: 'Please select a valid gender' })
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(User),
  });

  const onSubmit = async (data) => {
    // e.preventDefault();
    console.log('clicked');
    setLoading(true);
    const FormData = {
      fullName : data.Name,
      address : data.place,
      email : data.email,
      gender : data.gender,
      maritalStatus: data.status,
      teacherClass: data.teacherClass,
      teacherProfile : data.teacherProfile[0] ,
    }
    console.log(FormData);
    const userToekn = localStorage.getItem('userToken')
    try {
      const url = "https://edutrack-jlln.onrender.com/api/v1/teacher/sign-up";
      
      const res = await axios.post(url, FormData, {
        headers: {
          "Content-Type": "multipart/form-data",
           "Authorization": `Bearer ${userToekn}`
        }
      });
      setLoading(false);
      toast.success(res.data.message);
      if ( res.data.isVerified === true) {
        Nav('/teachers')
      } else {
        Nav('/admin')
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.data.message);
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-left" data-aos-duration="3000">
      <h3>Onboard your staff</h3>
      <section>
        <label>Teacher's Full Name</label>
        <input type="text" placeholder='Asake Anuoluwa Joy' {...register('Name')} />
        {errors.Name && <span style={{ color: 'red' }}>{errors.Name.message}</span>}
      </section>

      <section>
        <label>Teacher's Address</label>
        <input type="text" {...register('place')} />
        {errors.place && <span style={{ color: 'red' }}>{errors.place.message}</span>}
      </section>

      <section>
        <label>Teacher's Email</label>
        <input type="email" placeholder='example@gmail.com' {...register("email")} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </section>

          <section>
      <label>Teacher's Class</label>
      <select {...register("teacherClass")} defaultValue="">
        <option value="" disabled>Select class</option>
        <option value="JSS 1">JSS 1</option>
        <option value="JSS 2">JSS 2</option>
        <option value="JSS 3">JSS 3</option>
        <option value="SS 1">SSS 1</option>
        <option value="SS 2">SSS 2</option>
        <option value="SS 3">SSS 3</option>
      </select>
      {errors.teacherClass && <span style={{ color: 'red' }}>{errors.teacherClass.message}</span>}
      </section>

      <section>
        <label>Teacher's Image</label>
        <div className="inputDiv"><input type="file" {...register('teacherProfile')} /></div>
        {errors.teacherProfile && <span style={{ color: 'red' }}>{errors.teacherProfile.message}</span>}
      </section>

      <section>
        <label>Teacher's Marital Status</label>
        <select {...register('status')} defaultValue="">
          <option value="" disabled>Select marital status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
        {errors.status && <span style={{ color: 'red' }}>{errors.status.message}</span>}
      </section>

      <section>
        <label>Gender</label>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <span style={{ color: 'red' }}>{errors.gender.message}</span>}
      </section>

      <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
      </div>

      <button type='submit'>
        {loading ? <ClipLoader color='#ffffff' /> : 'Onboard'}
      </button>
      <Toaster position="top-center" />
    </form>
  );
};

export default Teacherform;
