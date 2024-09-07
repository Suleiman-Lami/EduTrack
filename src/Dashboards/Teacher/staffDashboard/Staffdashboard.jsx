import React from 'react'
import './Staffdashboard.css'

const Staffdashboard = () => {
  return (
    <div className='Staffdashboard'>
        <div className="Staffdashboard-Header">
            <div className='staffArticle'>
                <div className="textArea">
                    <h3>Welcome Back, Inspiring Educator!</h3>
                    <span>Empower your students today—every 
                    lesson is a chance to make a difference.</span>
                    <button>View Profile</button>
                </div>
                <div className="imageHolder"></div>
            </div>
            <div className="box">
                <div className="icon"></div>
                <div className="calcStudent">
                    <h4>Students</h4>
                    <h4>0</h4>
                </div>
            </div>
        </div>
        <div className='staffAside'>
            <h3>Classes</h3>
            <section>SChool name</section>
        </div >
        <main>
            <div className="mainHeader"></div>
            <div className="mainBody"></div>
            <div className="mainFoot"></div>
        </main>
    </div>
  )
}

export default Staffdashboard