import React from 'react'
import './AdminPage.css'

const AdminPage = () => {
  return (
    <div className='AdminPage'>
      <div className="boxHolder">
        <section>
          <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>students</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
        <section className='TeacherResult'>
        <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>Teachers</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
        <section>
        <div className="color"></div>
          <div className="textArea">
            <div className="iconHolder"></div>
            <div className="calc">
              <span>Classes</span>
              <h3>0</h3>
            </div>
          </div>
        </section>
      </div>
      <div className="AnnouncementBox">
        <article>
          <div className="articleHeading">
            <h3>Announcement</h3>
            <button>Send</button>
          </div>
          <input type="text" placeholder='What would like to announce today?'/>
        </article>
        <aside className='Adminaside'>
        You're on the <h4> freemium</h4> plan! 
        add up to <h4> 3 teachers</h4>, 
        and each can add
          <h5> 5 students.</h5>
        </aside>
      </div>
      <div className="Chart">
        <div className="Chartbox">chartbox</div>
        
      </div>
    </div>
  )
}

export default AdminPage