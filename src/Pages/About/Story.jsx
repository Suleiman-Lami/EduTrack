import React from 'react'
import './Story.css'

const Story = () => {
  return (
    <div className='storyComponent'>
        <div className="wrap">
            <div className="storyHead">
            <h2>Our story</h2>
            <span>Innovative Education Technology</span>
            </div>
            <div className="storyBoxholder">
                <div className="rightStoryBox">
                    <div className="storyBox">
                        <div className="imgHolder">
                            <div className="imgBox"></div>
                        </div>
                        <div className="textArea"></div>
                    </div>
                    <div className="storyBox">
                        <div className="imgHolder">
                            <div className="imgBox"></div>
                        </div>
                        <div className="textArea"></div>
                    </div>
                </div>
                <div className="leftStoryBox">
                <div className="storyBox">
                        <div className="imgHolder">
                            <div className="imgBox"></div>
                        </div>
                        <div className="textArea"></div>
                    </div>
                <div className="storyBox">
                        <div className="imgHolder">
                            <div className="imgBox"></div>
                        </div>
                        <div className="textArea"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story