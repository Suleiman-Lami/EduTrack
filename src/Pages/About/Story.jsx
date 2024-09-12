import React, { useEffect } from 'react'
import './Story.css'
import Aos from 'aos';
import "aos/dist/aos.css"


const Story = () => {
  
useEffect(()=>{
  Aos.init();
},[])
  return (
    <div className='storyComponent'>
       <div className="storyHead">
        <h3>Our story</h3>
        <span  data-aos="fade-left"  data-aos-duration="3000"> We’ve seen firsthand the challenges schools face in getting students back into classrooms.
 It’s a problem that many districts have struggled with, and it’s affecting the quality of education. 
We  realized early on that every single school day matters in a student’s academic journey. 
Research shows how vital a great teacher is to a student’s success, 
but even the most skilled teachers can’t make an impact if their students aren’t showing up.
This is where we saw an opportunity to make a difference. We noticed that many schools were still relying on 
outdated systems and methods that weren’t engaging students or families in a meaningful way. 
That’s why we created EduTrack, an app designed to tackle this issue head-on by providing a smarter, 
more efficient solution to track attendance and keep students on the path to success.</span>
       </div>
       <div className="storyBody">
        <article data-aos="fade-right"  data-aos-duration="3000">
            <div className="Head">Our mission</div>
            <div className="body"></div>
            <div className="text">
            Our goal is to support schools, teachers, andparents by offering smart, simple attendance tools that keep track 
of students and help them stay engaged. We use technology to make communication easier and give real-time updates, creating a better learning environment 
for everyone.
            </div>
        </article>
        <article data-aos="fade-left"  data-aos-duration="3000">
            <div className="Head">Our vision</div>
            <div className="Visionbody"></div>
            <div className="text">
            To be the leading platform in transforming school attendance management by ensuring that every student’s presence is accounted for, every parent is informed,and every school is equipped with the tools to maximize student success and well-being.
            </div>
        </article>
       </div>
    </div>
  )
}

export default Story