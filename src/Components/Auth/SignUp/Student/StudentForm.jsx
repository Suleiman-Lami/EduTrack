import React, { useEffect, useState } from 'react';
import './StudentOnboard.css';
import { z } from 'zod';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginInfo } from '../../../../Global/Slice';
import { toast, Toaster } from 'react-hot-toast';

const StudentForm = () => {
  const [loading, setLoading] = useState(false);
  const Nav = useNavigate();
  const dispatch = useDispatch();

  const User = z.object({
    Name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Must be a valid email' }),
    place: z.string().min(1, { message: 'Address is required' }),
    studentProfile: z.custom((val) => {
      if (val && val.length > 0 && val[0] instanceof File) {
        return true;
      }
      return false;
    }, { message: "Please upload a valid file" }),
    gender: z.enum(['male', 'female'], { message: 'Please select a valid gender' }),
    class: z.enum(['JSS 1', 'JSS 2', 'JSS 3','SS 1','SS 2','SS 3'], { message: 'Please select a valid class' }),
    terms: z.boolean().refine(val => val === true, { message: 'You must agree to the terms and conditions' })
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async (data) => {
    setLoading(true);
    const formData = {
      fullName : data.Name,
      address : data.place,
      email : data.email,
      gender : data.gender,
      class: data.class,
      studentProfile  : data.studentProfile[0] 
    }
    

    const userToken = localStorage.getItem('userToken');

    try {
      const url = "https://edutrack-jlln.onrender.com/api/v1/student/sign-up";
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${userToken}`
        }
      });
      setLoading(false);
      console.log(res);
      toast.success('you have successfully added a student');
      Nav(-1)
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message);
      
      if (error.response && error.response.data) {
        toast.error(error.response.message);
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
      <h3>Onboard your student</h3>
      <section>
        <label>Student's Full name</label>
        <input type="text" placeholder='Asake Anuoluwa joy' className='studentInput' {...register("Name")} />
        {errors.Name && <span style={{ color: 'red' }}>{errors.Name.message}</span>}
      </section>
      <section>
        <label>Student's Address</label>
        <input type="text" className='studentInput' {...register("place")} />
        {errors.place && <span style={{ color: 'red' }}>{errors.place.message}</span>}
      </section>
      <section>
        <label>Parent's email</label>
        <input type="email" placeholder='example@gmail.com' className='studentInput' {...register("email")} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </section>
      <section>
        <label>Student's image</label>
        <div className="inputDiv">
          <input type="file" className='studentInput' {...register("studentProfile")} />
        </div>
        {errors.studentProfile && <span style={{ color: 'red' }}>{errors.studentProfile.message}</span>}
      </section>
      <section>
        <label>Student's class</label>
        <select {...register("class")} defaultValue="">
          <option value="" disabled>Select class</option>
          <option value="JSS 1">JSS 1</option>
          <option value="JSS 2">JSS 2</option>
          <option value="JSS 3">JSS 3</option>
          <option value="SS 1">SSS 1</option>
          <option value="SS 2">SSS 2</option>
          <option value="SS 3">SSS 3</option>
        </select>
        {errors.class && <span style={{ color: 'red' }}>{errors.class.message}</span>}
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
        <input type="checkbox" {...register('terms')} />
        <span>I agree to terms and conditions</span>
        {errors.terms && <span style={{ color: 'red' }}>{errors.terms.message}</span>}
      </div>

      <button type='submit'>
        {loading ? <ClipLoader color='#ffffff' /> : 'Onboard'}
      </button>
      <Toaster position="top-right" />
    </form>
  )
};

export default StudentForm;
