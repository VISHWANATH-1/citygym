import React from "react";
import { PlansData } from "./PlansData";
import whiteTick from "../Pic/whiteTick.png";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="Plans-container" id='Plan'>
      <div /*className="blur Plans-blur-1"*/></div>
      <div /*className="blur Plans-blur-2"*/></div>
      <div className="Programs_header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START </span>
        <span> YOUR JOURNEY </span>
        <span className="stroke-text"> WITH US</span>
      </div>

      <div className="Plans">
        {PlansData.map((Plans, i) => (
          <div className="Plan" key={i}>
            {Plans.icon}
            <span>{Plans.name} </span>
            <span> $ {Plans.price}</span>
            <div className="features">
              {Plans.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span style={{ fontSize: '0.8rem',
    fontWeight: "bold"}}>See More Benifits -> </span>
            </div>
            <button className="bt">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
