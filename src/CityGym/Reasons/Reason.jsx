import React from 'react'
import './Reason.css'
import image1 from "../Pic/image1.png"
import image2 from "../Pic/image2.png"
import image3 from "../Pic/image3.png"
import image4 from "../Pic/image4.png"
import nb from "../Pic/nb.png"
import adidas from "../Pic/adidas.png"
import nike from "../Pic/nike.png"
import tick from "../Pic/tick.png"
const Reason = () => {
  return (
    <div className='Reason' id='Why'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
          <span>Some Reasons</span>
          <div>
            <span className='stroke-text'>Why</span>
            <span> To Choose Us</span>
            </div>
            <div className="Detail">
              <div>
               <img src={tick} alt="" />
               <span>over40+ expert coaches</span>
              </div>
              <div>
              <img src={tick} alt="" />
              <span>train smarter and faster</span>
              </div>
              <div>
              <img src={tick} alt="" />
              <span>2free program for new member</span>
              </div>
              <div>
              <img src={tick} alt="" />
              <span>reliable partner</span>
              </div>
            </div>
            
                <span style={{color:'grey'}}> OUR PARTNERS</span>
          
            <div className="Partner">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
            </div>
        </div>
       
    </div> 
  )
}

export default Reason