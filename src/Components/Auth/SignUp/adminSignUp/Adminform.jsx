import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { z } from 'zod';
import axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import ScrollToTop from '../../../../Layout/ScrollToTop';
import Swal from 'sweetalert2'; 

const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const Nav = useNavigate();
  const dispatch = useDispatch();

  const User = z.object({
    schoolName: z.string().min(1, { message: "School name is required" }),
    schoolEmail: z.string().email({ message: 'Must be a valid email' }),
    schoolAddress: z.string().min(1, { message: "School address is required" }),
    schoolPicture: z.custom((val) => {
      if (val && val.length > 0 && val[0] instanceof File) {
        return true;
      }
      return false;
    }, { message: "Please upload a valid file" }), 
    schoolPassword: z.string()
     .min(8,{message: "Password must be 8 characters long"})
    .regex(
       /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
       {message: "uppercase and special character (!@#$%^&*)."}
    ),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(User),
  });

  useEffect(() => {
    Aos.init();
  }, []);

  const Onsubmit = async (data, e) => {
      e.preventDefault();
      setLoading(true);
    const FormData ={
      schoolName: data.schoolName,
      schoolEmail: data.schoolEmail,
      schoolAddress: data.schoolAddress,
      schoolPicture: data.schoolPicture[0],
      schoolPassword: data.schoolPassword,
    }

    console.log(FormData);
    
    try {
      const url = "https://edutrack-jlln.onrender.com/api/v1/school/sign_up";
      
      const res = await axios.post(url, FormData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setLoading(false);
      if (res.data.newData.isVerified === true) {
        Swal.fire({
          title: 'Success!',
          text: res.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          Nav('/login'); 
        });
      } else {
    
        Swal.fire({
          title: 'Sign up successful!',
          text: 'Please verify your email.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          Nav('/'); 
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
      <ScrollToTop />
      <h2>Sign up</h2>

      <section>
        <label>Institute Name</label>
        <input type="text" placeholder="Doblin High School" {...register("schoolName")} required />
        {errors.schoolName && <span style={{ color: 'red' }}>{errors.schoolName.message}</span>}
      </section>

      <section>
        <label>Institute Email</label>
        <input type="email" placeholder="Doblinhighschool@gmail.com" {...register("schoolEmail")} required />
        {errors.schoolEmail && <span style={{ color: 'red' }}>{errors.schoolEmail.message}</span>}
      </section>

      <section>
        <label>Institute Location</label>
        <input type="text" {...register("schoolAddress")} required />
        {errors.schoolAddress && <span style={{ color: 'red' }}>{errors.schoolAddress.message}</span>}
      </section>

      <section>
        <label>Institute Logo</label>
        <div className="inputDiv">
          <input type="file" {...register("schoolPicture")} />
        </div>
        {errors.schoolPicture && <span style={{ color: 'red' }}>{errors.schoolPicture.message}</span>}
      </section>

      <section>
        <label>Password</label>
        <div className='inputPasswordDiv'>
          <input type={showPassword ? "password" : "text"} placeholder="********" {...register("schoolPassword")} />
          {showPassword ? (
            <FaRegEye onClick={togglePasswordVisibility} style={{ fontSize: "15px", cursor: "pointer", marginRight: "5px" }} />
          ) : (
            <FaRegEyeSlash onClick={togglePasswordVisibility} style={{ fontSize: "15px", cursor: "pointer" }} />
          )}
        </div>
        {errors.schoolPassword && <span style={{ color: 'red' }}>{errors.schoolPassword.message}</span>}
      </section>

      {/* <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
      </div> */}

      <button type="submit">
        {loading ? <ClipLoader color="#ffffff" /> : 'Sign up'}
      </button>

      <footer>
        <span>Already on Edutrack? <h4 onClick={() => Nav('/login')}>Login</h4></span>
      </footer>

      <Toaster/>
    </form>
  );
};

export default AdminForm;
