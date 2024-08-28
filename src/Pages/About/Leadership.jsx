import React from 'react'
import './Leadership.css'

const Leadership = () => {
  return (
    <div className='Leadership-component'>
        <div className="LeadershipHead">
            <h2>The Leadership Team</h2>
            <span>Know the people who leads team Edutrack to achieve the vision & goals</span>
        </div>
        <div className="Executive">
            <div className="textArea"><h2>Executive Team</h2></div>
            <div className="boxHolder">
                <div className="executiveBox">
                    <div className="imgHolder">
                        <div className="imgBox"></div>
                    </div>
                    <div className="textArea"></div>
                </div>
                <div className="executiveBox">
                    <div className="imgHolder">
                        <div className="imgBox"></div>
                    </div>
                    <div className="textArea"></div>
                </div>
            </div>
        </div>
        <div className="LeadershipFooter">
            <div className="boxHolder">
                <div className="imgHolder">
                    <div className="imgBox"></div>
                </div>
                <div className="textArea"></div>
            </div>
            <div className="boxHolder">
                <div className="imgHolder">
                    <div className="imgBox"></div>
                </div>
                <div className="textArea"></div>
            </div>
            <div className="boxHolder">
                <div className="imgHolder">
                    <div className="imgBox"></div>
                </div>
                <div className="textArea"></div>
            </div>
            <div className="boxHolder">
                <div className="imgHolder">
                    <div className="imgBox"></div>
                </div>
                <div className="textArea"></div>
            </div>
        </div>
    </div>
  )
}

export default Leadership