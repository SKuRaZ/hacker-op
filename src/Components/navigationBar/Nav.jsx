import React from 'react'
import './Nav.css'
function nav() {

    return (
        <>
            <div className="nav">
                <div className="logo"> <img src="./Images/Logo.png" alt="logo" />

                    <div className="navLink">
                        <ul>
                            <li className='active'>
                                Discover
                            </li>

                            <li>
                                Community
                            </li>
                            <li className='services_nav'>
                                Services <img src="./Images/downIcon.png" alt="" />
                            </li>
                            <li>
                                More<img src="./Images/downIcon.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="right-side">
                    <div className="signin-btn">
                        <span>Sign in</span>
                    </div>
                    <div className="download-btn">
                        <img src="./Images/plusIcon.png" alt="" /> <span> Download App</span>
                    </div>
                </div>
                <div className="hamburgerIcon">
                    <img src="./Images/hamburgerIcon.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default nav
