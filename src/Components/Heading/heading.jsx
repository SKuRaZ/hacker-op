import React from 'react'
import './heading.css'
export default function Heading() {
    return (
        <>
            <div className="header">
                <div className="profileImage">
                    <div className="photo">
                    <img src="./Images/profile.png" alt="" />
                    </div>

                    <div className="text">
                        <span className='text1'>Discover College & Universities For Your Abroad Education</span><br />
                        <span className='text2'>Everything you need for your abroad education is here. Discover global opportunities with us.</span>
                    </div>
                    <div className="searchBox">
                        <div className="searchArea">
                            <img src="./Images/searchIcon.png" alt="" />
                            <input type="text" placeholder='Search universities, courses' />
                            <div className="signin-btn"><span>Search</span>
                            </div>
                        </div>

                        <div className="searchBy">
                            <div className="searchByCountries">
                                <span>Countries</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>
                            <div className="searchByCourses">
                                <span>Courses</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>
                            <div className="searchByDegree">
                                <span>Degree</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>
                            <div className="searchByDuration">
                                <span>Duration</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>
                            <div className="searchByFees">
                                <span>Fees</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>
                            <div className="searchByIntake">
                                <span>Intake</span>
                                <img src="./Images/downIcon.png" alt="dropdown" />
                            </div>

                            <div className="filter">
                                <img src="./Images/filterIcon.png" alt="dropdown" />
                                <span>Apply Filter</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
