import React,{useState, useEffect } from 'react'
import axios from 'axios';
import './Verify.css'
import { useParams, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
const Verifyteacher = () => {
  const { token } = useParams()
  // console.log(token)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(''); // Message to show to the user

    const handleSubmit = async () => {
      setLoading(true); 
        const response = await axios.post(`https://edutrack-jlln.onrender.com/api/v1/teacher/verify/${token}`)
        if (response.status === 200) {
          setLoading(false)
          setMessage (response.data.message)
          if (response.data.message === 'teacher verified successfully') {
            setTimeout(() => {
              navigate('/login'); 
            }, 3000);
           }
           
         }
         else if (response.status === 400) {
          setLoading(false)
           setMessage(response.data.message,'Redirecting to login...')
           setTimeout(() => {
             navigate('/login'); 
           }, 3000);
         }
         else if (response.status == 404) {
          setLoading(false)
           setMessage(response.data.message)
         }
         else{
          setLoading(false)
           setMessage('something came up please recheck your email :)')
         }
    }
    useEffect(() => {
      handleSubmit()
    }, [])


    const style = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#003B31',
    }
  return (
    <div  className='verify'>
     {!loading ? (
        <h1>{message || 'Please wait'} <BeatLoader color='white' /></h1> 
      ) : (
        <h1>{message}</h1>
      )}
  </div >
  )
}

export default Verifyteacher