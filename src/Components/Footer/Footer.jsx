import React from 'react'
import './footer.css'
function Footer() {
    return (
        <>
            <div className="Box_container">
                <div className="section1">
                    <div className="left_side">
                        <img src="./Images/LogoWhite.png" alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur. Nibh
                            leo amet sed orci ipsum lectus pretium diam.
                            Placerat ipsum volutpat commodo sodales.</span>
                    </div>

                    <div className="right_side">
                        <div className="links">
                            <span className='Heading'>Quick Links</span>
                            <span>Discover</span>
                            <span>Community</span>
                            <span>Apply Visa</span>
                            <span>Success Stories</span>
                        </div>
                        <div className="legal">
                            <span className='Heading'>Legals</span>
                            <span>Cookies Policy</span>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>

                        <div className="download_app">
                            <span className='Heading'>Get App</span>
                            <img src="./Images/Google Play Badge.png" alt="" />
                            <img src="./Images/AppleDownloadBadge.png" alt="" />
                        </div>
                    </div>
                    <div className="footer_mob_view">
                        <div className="download_app">
                            <span className='Heading'>Get App</span>
                            <img src="./Images/Google Play Badge.png" alt="" />
                            <img src="./Images/AppleDownloadBadge.png" alt="" />
                        </div>
                    </div>


                </div>
                <div className="footerLine">
                </div>
                <div className="last_Footer_Section">
                    <span>Copyright © 2024 Cloud Education. All rights reserved.</span>
                    <div className="socialMedia">
                        <img src="./Images/facebook.png" alt="facebook" />
                        <img src="./Images/twitter.png" alt="twitter" />
                        <img src="./Images/youtube.png" alt="youtube" />
                        <img src="./Images/linkedin.png" alt="linkedin" />
                    </div>
                </div>
                <span className='mob_view_copyright'>Copyright © 2024 Cloud Education. All rights reserved.</span>

            </div>
        </>
    )
}

export default Footer
