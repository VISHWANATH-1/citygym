import React from 'react'
import './Program.css'
import {programsData} from "./ProgramsData"
import rightArrow from "../Pic/rightArrow.png"
const Program = () => {
  return (
    <div className="Program" id="Prog">
      <div className="Program_header">
        <span className='stroke-text' >Explore Our</span>
        <span>Program</span>
        <span className='stroke-text' >To Shape You</span>
      </div>


      <div className="Program-catagory">
        {programsData.map((Program)=>(
        <div className="category">
          {Program.image}
          <span>{Program.heading}</span>
          <span>{Program.details}</span>
          <div className="Join-Now">
            <span>Join Now</span>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        
       ))}
      </div>
    </div>
  )
}

export default Program;