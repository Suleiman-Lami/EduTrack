import React from 'react'
import './Value.css'
import VALUES from '../../assets/VALUES.png'
import { CiCircleCheck } from "react-icons/ci";

const Values = () => {
  return (
    <div className='Values'>
        <article>
            <div className="top">
                <h2>Values we add to  our users:</h2>
                <span>See how we transform your experience with added value, making every interaction smoother.</span>
            </div>
            <div className="bottom">
               <div className="Sections">
               <div className="icon"><CiCircleCheck  color='white' size={20} /></div>
                <section>
                    <h3>For Teachers:</h3>
                    <span>No more struggling with manual attendance. Our app makes it easy to track attendance accurately, giving teachers more time to focus on teaching.</span>
                </section>
               </div>
               <div className="Sections">
               <div className="icon"><CiCircleCheck  color='white' size={20}/></div>
                <section>
                    <h3>For Schools:</h3>
                    <span>No more struggling with manual attendance. Our app makes it easy to track attendance accurately, giving teachers more time to focus on teaching.</span>
                </section>
               </div>
               <div className="SectionsB">
               <div className="icon"><CiCircleCheck color='white' size={20}/></div>
                <section>
                    <h3>For parents:</h3>
                    <span>No more struggling with manual attendance. Our app makes it easy to track attendance accurately, giving teachers more time to focus on teaching.</span>
                </section>
               </div>
            </div>
        </article>
        <aside>
            <img src={VALUES} alt="" />
            {/* <div className="icon"></div>
            <div className="imageHolder"></div>
            <div className="chart"></div> */}
        </aside>
    </div>
  )
}

export default Values