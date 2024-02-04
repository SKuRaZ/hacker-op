import React from 'react'
import './uniDetails.css'
function UniDetails({ name, logo, location, course, fee, duration ,type }) {
    return (
        <>
            <div className="box">

                <div className="container">
                    <div className="logo">
                        <div className="logoBox">
                        <img src={logo} alt="UniversityLogo" />
                        </div>

                    </div>
                    <div className="heading">
                        <span className='text1'>{name}</span>
                        <span className='text2'>{location}</span>
                    </div>
                    <div className="heart_icon">
                        <img src="./Images/saveIcon.png" alt="saveIcon" />
                    </div>
                </div>
                <div className="line">
                </div>
                <div className="description__one">
                    <span className='text1'>Course Name</span>
                    <span className='text2'>{course}</span>
                </div>
                <div className="description__two">
                    <div className="fee">
                        <span className='title'>Fee per year</span>
                        <span className='title_value'>{fee}</span>
                    </div>
                    <div className="duration">
                        <span className='title'>Duration</span>
                        <span className='title_value'>{duration}</span>
                    </div>
                    <div className="type">
                        <span className='title'>Type</span>
                        <span className='title_value'>{type}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UniDetails
