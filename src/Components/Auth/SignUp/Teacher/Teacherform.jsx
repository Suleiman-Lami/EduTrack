import React from 'react'
import './TeacherSignUp.css'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Teacherform = () => {
         
  const User = z.object({
    Name: z.string(),
    email: z.string().email({message: 'must be a valid email'}),
    place: z.string(),
    Image: z.instanceof(File, { message: "Please upload a valid file" }),
    status: z.string(),
    gender: z.string()
  });

  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: zodResolver(User),
  });

  const Onsubmit = async(data)=>{
    console.log("SuCCESS", data);
    Nav('/')
  }
  return (
    <form onSubmit={handleSubmit (Onsubmit)} >
    <h2>Onboard your staff</h2>
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
    
    <button type='submit'> Sign up</button>

   </form>
  )
}

export default Teacherform