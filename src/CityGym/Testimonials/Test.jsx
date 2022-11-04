import React, { useState } from 'react'
import './Test.css'
import { testimonialsData } from './Testimonials'
import leftArrow from "../Pic/leftArrow.png"
import rightArrow from "../Pic/rightArrow.png"
import { motion } from 'framer-motion'
const Test = () => {
    const transition={type:"spring", duration: 3}
    const[select, setSelect]=useState(0)
    const tLength=testimonialsData.length
  return (
    <div className='Test' id='testimonials' >
        <div className="left-t">
            <span>Testimonials </span>
            <span className='stroke-text'> What They </span>
            <span> Say About Us</span>
            <motion.span 
                         key={select}
                         initial={{opacity:0, x:-100}}
                         animate={{opacity:1, x:0}}
                         exit={{opacity:0, x:100}}
                         transition={{transition}}
                      >
                {testimonialsData[select].review}
            </motion.span>
            <span>
                <span style={{color:"orange"}}>
                    {testimonialsData[select].name}
                </span>{" "}
                -{testimonialsData[select].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                 initial={{opacity: 0, x: -100}}
                 transition={{...transition, duration: 2}}
                 whileInView={{opacity:1, x:0}}
            >
            </motion.div>
            <motion.div
                 initial={{opacity: 0, x: 100}}
                 transition={{...transition, duration: 2}}
                 whileInView={{opacity:1, x:0}}
            >
            </motion.div>


            <motion.img 
                key={select}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={{transition}}
                src={testimonialsData[select].image} alt="" />
    
            
            <div className="arrows">
                <img             
                     onClick={()=>{select===0?setSelect(tLength -1):
                      setSelect((prev)=>prev -1)}}
                    src={leftArrow} alt="" />
                <img
                               onClick={()=>{select===tLength -1?setSelect(0):
                                setSelect((prev)=>prev +1)}}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Test