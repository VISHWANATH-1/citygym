import React from "react";
import "../Gym/Gym.css";
import Head from "../Head/Head";
import "./Hero.css";
import Bod from "../Pic/hero_image.png";
import Backg from "../Pic/Backg.png";
import Hear1 from "../Pic/Hear1.png";
import Calorie from "../Pic/Calorie.png";
import {motion} from 'framer-motion'
import CountUp from "react-countup";
const Hero = () => {
  const transition={type: 'spring', duration: 3}
  const mobile =Window.innerWidth<=768 ? true: false;
  return (
    <div className="Hero" id="Home">
      <div /*className="blur Hero-blur"*/></div>
      <div className="left-h">
        <Head />

        <div className="city-top-ad">
          <motion.div
                    initial={{left: mobile? "165": '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type:'tween'}}>
         </motion.div>

         
          <span>Dhanbad cities top gym club </span>
        </div>

        <div className="Hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Body Ideal</span>
          </div>
          <div>
            <span>
              Here We Will Help You To Shape Your Body And Also In Build It As
              Hard As Rock
            </span>
          </div>
        </div>

        <div className="figures">
        
         <div>
            <span>
              <CountUp end={40} start={10} prefix="+" />
              </span>
            <span>expert coache's</span>
          </div>
          <div>
            <span>
            <CountUp end={550} start={520}  prefix="+" />
            </span>
            <span>member's joined</span>
          </div>
          <div>
            <span>
            <CountUp end={30} start={0}  prefix="+" />
            </span>
            <span>fitness program's</span>
          </div>
        </div>

        <div className="Hero-buttons">
          <buttons className="bt">Get Started</buttons>
          <buttons className="bt">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="bt">Join Now</button>
        <motion.div
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={{...transition, type:"spring"}}
          className="heart-rate">
          <img src={Hear1} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        <img src={Bod} alt="" className="Bod" />
        <motion.img
         initial={{right:'11rem'}}
         whileInView={{right:'20rem'}}
         transition={{transition}}
         src={Backg} alt="" className="Backg" />

        <motion.div 
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          className="Calorie">
          <img src={Calorie} alt="" />
             <div>
              <span>Calories Burned</span>
              <span>333 kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
