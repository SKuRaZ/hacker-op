import React from 'react'
import './SearchResults.css'
import UniDetails from './uniDetails'
function SearchResults() {
  return (
    <>
      <div className="top">
        <span className='text1'>Showing results for</span>
        <span className='text2'>All Colleges and Universities</span>

        <div className="rightSide">
          <span>Sort By:</span>
          <div className="filterBox">
            <span>Fee (low - high)</span>
            <img src="./Images/downIcon.png" alt="dropdown" /></div>
        </div>

      </div>
      <div className="line"></div>
      <div className="resultView">
        <div className="results">
          <UniDetails
            name="Melbourne Institute of Technology" logo="./Images/uni/MIT.png" location="Sydney, Australia"
            course="Master of Technology (Enterprise Systems and Business Analytics)" fee="AUD 20,000" duration="2 Year"
          />
          <UniDetails
            name="Central Queensland University" logo="./Images/uni/CQ.png" location="New South Wales, Australia"
            course="Master of Business Administration (Coursework)" fee="AUD 39,500" duration="2 Year"
          />
          <UniDetails
            name="Swinburne University of Technology" logo="./Images/uni/swinburne.png" location="Vancouver, Canada"
            course="Graduate Diploma in Early Childhood Education (Extension)" fee="CAD 38,614" duration="1 Year" />
        </div>
        <div className="results">
          <UniDetails
            name="Central Queensland University" logo="./Images/uni/CQ.png" location="New South Wales, Australia"
            course="Master in Information and Communication Technology" fee="AUD 39,500" duration="2 Year" />
          <UniDetails
            name="Griffith University" logo="./Images/uni/giffen.png" location="Nova Scotia, Canada"
            course="Bachelor of Arts in Anthropology" fee="CAD 39,500" duration="4 Year" />
          <UniDetails
            name="Griffith University" logo="./Images/uni/giffen.png" location="Queensland, Australia"
            course="Master of Audio Engineering and Sound Production (Coursework)" fee="AUD 39,500" duration="2 Year" />
        </div>
        <div className="results">
          <UniDetails
            name="Melbourne Institute of Technology" logo="./Images/uni/MIT.png" location="Sydney, Australia"
            course="Master of Technology (Enterprise Systems and Business Analytics)" fee="AUD 20,000" duration="2 Year" />
          <UniDetails
            name="Central Queensland University" logo="./Images/uni/CQ.png" location="New South Wales, Australia"
            course="Master of Business Administration (Coursework)" fee="AUD 39,500" duration="2 Year" />
          <UniDetails
            name="Swinburne University of Technology" logo="./Images/uni/swinburne.png" location="Vancouver, Canada"
            course="Graduate Diploma in Early Childhood Education (Extension)" fee="CAD 38,614" duration="1 Year" />
        </div>
        <div className="results">
          <UniDetails
            name="University of Southern Queensland" logo="./Images/uni/southQueensland.png" location="Toronto, Canada"
            course="Master in Information and Communication Technology" fee="CAD 27,800" duration="2 Year" />
          <UniDetails
            name="University of the Sunshine Cost" logo="./Images/uni/southQueensland.png" location="Queensland, Australia"
            course="Bachelor of Arts in Anthropology" fee="AUD 50,500" duration="3 Year" />
          <UniDetails
            name="Griffith University" logo="./Images/uni/giffen.png" location="Queensland, Australia"
            course="Master of Audio Engineering and Sound Production (Coursework)" fee="AUD 39,500" duration="2 Year" />
        </div>

        
      <div className='mob_view'>
        <UniDetails
          name="Central Queensland University" logo="./Images/uni/CQ.png" location="Rockhampton, Australia"
          course="Master of Technology (Enterprise Systems and Business Analytics)" fee="AUD 20,000" duration="2 Year" type="Public" />

        <UniDetails
          name="Melbourne Institute of Technology" logo="./Images/uni/MIT.png" location="Sydney, Australia"
          course="Master of Technology (Enterprise Systems and Business Analytics)" fee="AUD 20,000" duration="2 Year" type="Public" />

        <UniDetails
          name="Griffith University" logo="./Images/uni/giffen.png" location="Queensland, Australia"
          course="Master of Audio Engineering and Sound Production (Coursework)" fee="AUD 39,500" duration="2 Year" type="Public" />

      </div>
      </div>

      <div className="nextPage_section">
        <span>Showing 1 to 12 of 100 results</span>
        <div className="right_side">
          <span className='text1'>Prev</span>
          <div className="text2">
            <span >1</span>
          </div>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <div className="icon">
            <img src="./Images/dots.png" alt="" />
            <span>100</span>
          </div>


          <span className='next_btn'>Next</span>

        </div>
      </div>


    </>
  )
}

export default SearchResults
