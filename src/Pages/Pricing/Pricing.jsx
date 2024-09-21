import React, { useState } from 'react';
import './Pricing.css';
import SignModal from '../LandingPage/SignModal';
import { toast, Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [Loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const { user, isLoggedIn } = useSelector((state) => state.eduTrack);
  const Nav = useNavigate();
  const schoolID = localStorage.getItem('schoolID');
  const payKorapay = (amount, planName) => {
    console.log('clicked');
    setLoading(true);
    setSelectedPlan(planName);

    if (isLoggedIn && user.schoolInfo.role === 'admin') {
      const paymentData = {
        amount: amount * 100,
        currency: 'NGN',
        reference: `S & R_${Date.now()}`,
        customer: {
          name: user.schoolInfo.schoolName,
          email: user.schoolInfo.schoolEmail,
        },
      };

      window.Korapay.initialize({
        key: import.meta.env.VITE_Public_Key,
        reference: paymentData.reference,
        amount: paymentData.amount,
        currency: paymentData.currency,
        customer: paymentData.customer,
        onSuccess: (response) => {
          setLoading(false);
          console.log('Payment successful:', response);
          sendToBackend(paymentData, planName);
        },
        onError: (error) => {
          setLoading(false);
          console.error('Payment error:', error);
          toast.error('Payment failed. Please try again.');
        },
      });
    } else {
      setLoading(false);
      toast.error('You must be logged in as an admin to activate a plan.');
    }
  };

  const sendToBackend = (paymentData, planName) => {
    const userToken = localStorage.getItem('userToken');

    const backendData = {
      ...paymentData,
      newPlan: planName,
    };

    axios
      .post(
        'https://edutrack-jlln.onrender.com/api/v1/school/upgrade-plan',
        backendData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        setLoading(false);
        if (data.success) {
          toast.success('Plan upgraded successfully!');
          Nav(`/admin/${schoolID}`)
        } else {
          toast.error('Failed to upgrade plan. Please try again later.');
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error upgrading plan:', error);
        toast.error(
          error.response.message || 'Error upgrading plan. Please try again.'
        );
      });
  };

  return (
    <div className='Pricing'>
      <div className='intro'>
        <div className='textArea'>
          <div className='h1div'>
            <h3>EDUTRACK</h3>
            <p>helps schools meet and exceed their Attendance</p>
            <h3>NEEDS</h3>
          </div>
          <span>
            You decide what modules and features you need most at your school,
            so you only pay for what you need. Modules are tiered and priced on
            a per student basis per Term.
          </span>
        </div>
      </div>
      <div className='TextArea'>
        <h2>Pick Your Ideal Plan!</h2>
        <span>
          Choose from our best options to fit your needs. Want to change it? You
          can easily adjust your plan for the perfect experience.
        </span>
      </div>
      <div className='firstOptionbox'>
        <div className='starterBox'>
          <h3>Starter Plan</h3>
          <span>For small schools or classes.</span>
          <h1>₦95,000</h1>
          <button onClick={() => payKorapay(95000, 'starter')}>
            {Loading && selectedPlan === 'starter' ? (
              <ClipLoader color='white' />
            ) : (
              'Activate plan'
            )}
          </button>
          <div className='textArea'>
            <li>Teacher: Up to 5</li>
            <li>Student:Up to 100</li>
          </div>
        </div>
        <div className='Basicbox'>
          <h3>Basic Plan</h3>
          <span>For schools with growing needs.</span>
          <h1>₦ 240,000</h1>
          <button onClick={() => payKorapay(240000, 'basic')}>
            {Loading && selectedPlan === 'basic' ? (
              <ClipLoader color='white' />
            ) : (
              'Activate plan'
            )}
          </button>
          <div className='textArea'>
            <li>Teacher: Up to 10</li>
            <li>Student:Up to 250</li>
          </div>
        </div>
        <div className='proBox'>
          <h3>Pro Plan</h3>
          <span>For medium-sized schools.</span>
          <h1>₦ 480,000</h1>
          <button onClick={() => payKorapay(480000, 'pro')}>
            {Loading && selectedPlan === 'pro' ? (
              <ClipLoader color='white' />
            ) : (
              'Activate plan'
            )}
          </button>
          <div className='textArea'>
            <li>Teacher: Up to 25</li>
            <li>Student:Up to 500</li>
          </div>
        </div>
      </div>
      <div className='secondOptionbox'>
        <div className='PremiumBox'>
          <h3>Premium Plan</h3>
          <span>For larger schools.</span>
          <h1>₦ 970,000</h1>
          <button onClick={() => payKorapay(970000, 'premium')}>
            {Loading && selectedPlan === 'premium' ? (
              <ClipLoader color='white' />
            ) : (
              'Activate plan'
            )}
          </button>
          <div className='textArea'>
            <li>Teacher: Up to 25</li>
            <li>Student:Up to 500</li>
          </div>
        </div>
        <div className='proBox'>
          <h3>Enterprise</h3>
          <span>For large school systems.</span>
          <h1>XXXX</h1>
          <button>Contact us</button>
          <div className='textArea'>
            <li>Teacher: Unlimited</li>
            <li>Student: Unlimited</li>
            <li>Price: Custom pricing (Contact us)</li>
          </div>
        </div>
      </div>

      <div className='PricingInfo'>
        <div className='fistInfo'>
          <h3>Need more information?</h3>
          <h4>Contact Us:</h4>
          <div className='text'>
            <span>
              <h5>Email:</h5>asemudarglory@gmail.com
            </span>
            <span>
              <h5>Phone Number:</h5> +234 82135435
            </span>
            <span>
              <h5>Address:</h5> 162/163 muyibi Street, Olodi-apapa, Nigeria
            </span>
          </div>
        </div>

        <div className='secondInfo'>
          <h3>Note:</h3>
          <div className='Sispan'>
            <span>Prices are subject to change.</span> Please contact us for the
            most up-to-date pricing information.
          </div>
        </div>
      </div>
      <SignModal />
      <Toaster position='top-center' />
    </div>
  );
};

export default Pricing;
