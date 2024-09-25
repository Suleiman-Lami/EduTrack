import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import './Verify.css';
import toast from 'react-hot-toast';

const Verify = () => {
  const { token } = useParams();  // Get token from URL params
  const navigate = useNavigate(); // Use for navigation
  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState(''); // Message to show to the user

  const handleSubmit = async () => {
    setLoading(true); 

    
      const response = await axios.post(
        `https://edutrack-jlln.onrender.com/api/v1/school/verify/${token}`
      );
      if (response.status === 200) {
        setLoading(false)
       setMessage (response.data.message)
       if (response.data.message === 'school verified successfully') {
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
  };

  useEffect(() => {
    handleSubmit();
  }, []); 

  return (
    <div className='verify'>
      {!loading ? (
        <h1>{message || 'Please wait'} <BeatLoader color='white' /></h1> 
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
};

export default Verify;
