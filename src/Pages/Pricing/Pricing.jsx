import React from 'react'
import './Pricing.css'
import SignModal from '../LandingPage/SignModal'

const Pricing = () => {
  return (
    <div className='Pricing'>
        <div className="intro">
            <div className="textArea">
                <div className="h1div">
                    <h3>EDUTRACK  </h3>
                    <p>helps schools meet and exceed their Attendance </p>
                    <h3>NEEDS</h3>
                </div>
                <span>You decide what modules and features you need most at your school, 
so you only pay for what you need. Modules are tiered and priced on 
a per student basis.</span>
            </div>
        </div>
        <div className="TextArea">
            <h2>Pick Your Ideal Plan!</h2>
            <span> Choose from our best options to fit your needs. Want to change it? You can easily adjust your plan for the perfect experience.</span>
        </div>
        <div className="firstOptionbox">
            <div className="starterBox">
                <h3>Starter Plan</h3>
                <span>For small schools or classes.</span>
                <h1>₦95,000</h1>
                <button>Activate plan</button>
                schoolName: data.schoolName,
      schoolEmail: data.schoolEmail,
      schoolAddress: data.schoolAddress,
      schoolProfile: data.schoolProfile[0],
      schoolPassword: data.schoolPassword,
                <div className="textArea">
                    <li>Teacher: Up to 5</li>
                    <li>Student:Up to 100</li>
                </div>
            </div>
            <div className="Basicbox">
            <h3>Basic Plan</h3>
                <span>For schools with growing needs.</span>
                <h1>₦ 240,000</h1>
                <button>Activate plan</button>

                <div className="textArea">
                    <li>Teacher: Up to 10</li>
                    <li>Student:Up to 250</li>
                </div>
            </div>
            <div className="proBox">
            <h3>Pro Plan</h3>
                <span>For medium-sized schools.</span>
                <h1>₦ 480,000</h1>
                <button>Activate plan</button>

                <div className="textArea">
                    <li>Teacher: Up to 25</li>
                    <li>Student:Up to 500</li>
                </div>
            </div>
        </div>
        <div className="secondOptionbox">
            <div className="PremiumBox">
            <h3>Premium Plan</h3>
                <span>For larger schools.</span>
                <h1>₦ 970,000</h1>
                <button>Activate plan</button>

                <div className="textArea">
                    <li>Teacher: Up to 25</li>
                    <li>Student:Up to 500</li>
                </div>
            </div>
            <div className="proBox">
            <h3>Pro Plan</h3>
                <span>For large school systems.</span>
                <h1>XXXX</h1>
                <button>Contact us</button>

                <div className="textArea">
                    <li>Teacher: Unlimited</li>
                    <li>Student: Unlimited</li>
                    <li>Price: Custom pricing (Contact us)</li>
                </div>
            </div>
        </div>

        <div className="PricingInfo">
            <div className="fistInfo">
                <h3>Needmore information?</h3>
                <h4>Contact Us:</h4>
                <div className="text">
                <span><h5>Email:</h5>asemudarglory@gmail.com</span>
                <span><h5>Phone Number:</h5> +234 82135435</span>
                <span><h5>Address:</h5> 162/163 muyibi Street, Olodi-apapa, Nigeria</span>
                </div>
            </div>

            <div className="secondInfo">
                <h3>Note:</h3>
                <div className='Sispan'> <span>Prices are subject to change.</span> Please contact us for the most up-to-date pricing information.</div>
            </div>
        </div>
        <SignModal/>   
        </div> 
  )
}

export default Pricing