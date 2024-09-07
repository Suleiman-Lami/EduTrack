import React from 'react'
import './StudentOnboard.css'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const StudentForm = () => {
    const User = z.object({
        Name: z.string(),
        email: z.string().email({message: 'must be a valid email'}),
        place: z.string(),
        Image: z.instanceof(File, { message: "Please upload a valid file" }),
        gender: z.string(),
        class: z.union([
            z.string().min(1, { message: "Class cannot be an empty string" }),
            z.number({ message: "Class must be a valid number" })
          ])
      });
    
      const {register, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: zodResolver(User),
      });
    
      const Onsubmit = async(data)=>{
        console.log("SuCCESS", data);
        Nav('/')
      }
  return (
    <form onSubmit={handleSubmit(Onsubmit)}>
    <h3>Onboard your student</h3>
    <section>
        <label>Student's Full name</label>
        <input type="name" placeholder='Asake Anuoluwa joy' className='studentInput' {...register("Name")}/>
        {errors.Name && <span style={{color: 'red'}}>{errors.Name.message}</span>}
    </section>
    <section>
        <label>Student's Address</label>
        <input type="address" className='studentInput' {...register("place")}/>
        {errors.place && <span style={{color: 'red'}}>{errors.place.message}</span>}
    </section>
    <section>
        <label>Parent's email</label>
        <input type="email" placeholder='example@gmail.com' className='studentInput' {...register("email")}/>
        {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
    </section>
    <section>
        <label>Student's image</label>
        <div className="inputDiv"> <input type="file" className='studentInput' {...register("Image")}/> </div>
        {errors.Image && <span style={{color: 'red'}}>{errors.Image.message}</span>}
    </section>
    <section>
        <label>Student's class</label>
        <input type="text" className='studentInput' {...register("class")} />
        {errors.class && <span style={{color: 'red'}}>{errors.class.message}</span>}
    </section>
    <section>
        <label>Gender</label>
        <input type="text" className='studentInput' {...register("gender")}/>
        {errors.gender && <span style={{color: 'red'}}>{errors.gender.message}</span>}
    </section>

    <div className="terms">
        <input type="checkbox" />
        <span>I agree to terms and conditions</span>
    </div>
    
    <button type='submit'>Sign up</button>
    </form>
  )
}

export default StudentForm