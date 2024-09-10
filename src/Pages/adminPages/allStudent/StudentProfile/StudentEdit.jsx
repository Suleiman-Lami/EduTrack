import React, { useState } from 'react'
import './StudentEdit.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import ImageUploader from '../../../../Dashboards/Teacher/teacherProfile/ImageUploader';

const StudentEdit = () => {
    const [showPassword, setShowPassword] = useState(true)
    const Nav = useNavigate();
    const MyshowPassword = ()=> {
        setShowPassword(false)
     }      
  const User = z.object({
    Name: z.string(),
    email: z.string().email({message: 'must be a valid email'}),
    place: z.string(),
    status: z.string(),
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async(data)=>{
    console.log("SuCCESS", data);
    Nav('/Student')
  }

  return (
    <div className='studentEdit'>
      <h3>Profile settings</h3>
      <div className="profileBody">
       <ImageUploader/>
        <form onSubmit={ handleSubmit(Onsubmit)}>
         <section>
          <label> fullName</label>
          <input type="name" />
          {errors.Name && <span style={{color: 'red'}}>{errors.Name.message}</span>}
          </section> 
         <section>
          <label>Email</label>
          <input type="email" placeholder='Example@gmail.com'/>
          {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
          </section> 
         <section>
          <label> address</label>
          <input type="text" />
          {errors.place && <span style={{color: 'red'}}>{errors.place.message}</span>}
          </section>
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

export default StudentEdit