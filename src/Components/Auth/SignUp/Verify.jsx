import React,{useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
const Verify = () => {
  const { token } = useParams()
  // console.log(token)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        const response = await axios.post(`https://edutrack-jlln.onrender.com/api/v1/school/verify/${token}`)
        // console.log(response)
        setLoading(true)
        setTimeout(() => {
        response.status === 200 ?  navigate('/login') : null
        }, 3000);
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
    <div style={style} className='verify'>
    {!loading ? <h1>Please Wait<BeatLoader color='white' /></h1> :
      <h1>Your verification was sucessful</h1>}
  </div >
  )
}

export default Verify