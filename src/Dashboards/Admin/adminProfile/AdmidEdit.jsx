import React, { useEffect, useState } from 'react'
import './AdminEdit.css'
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import Aos from 'aos';
import "aos/dist/aos.css"
import { zodResolver } from '@hookform/resolvers/zod'
import ImageUploader from '../../Teacher/teacherProfile/ImageUploader';

const AdmidEdit = () => {
    const [showPassword, setShowPassword] = useState(true)
    const Nav = useNavigate();
    const MyshowPassword = ()=> {
        setShowPassword(false)
     }      
  const User = z.object({
    Name: z.string(),
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async(data)=>{
    console.log("SuCCESS", data);
    Nav('/profile')
  }

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='AdmidEdit'>
              <h3>Profile settings</h3>
      <div className="profileBody">
       <ImageUploader/>
        <form onSubmit={ handleSubmit(Onsubmit)} data-aos="fade-left" data-aos-duration="3000">
         <section>
          <label>Change password</label>
          <div className='inputPasswordDiv'>
                <input type={showPassword ? "password" : "text"} placeholder='********' {...register("password")}/>
                  {
                    showPassword ?
                    <FaRegEye onClick={MyshowPassword} style={{fontSize: "15px",cursor: "pointer", marginRight: "5px" }}/>:
                    <FaRegEyeSlash onClick={()=>setShowPassword(true)} style={{fontSize: "15px", cursor: "pointer" }}/>
                  }
                </div>
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
          </section> 
          <button type='submit'>Save changes</button>
        </form>
      </div>
    </div>
  )
}

export default AdmidEdit