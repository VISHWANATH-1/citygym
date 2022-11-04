import React from "react";
import "./Foot.css";
import Git from "../Pic/github.png";
import Inst from "../Pic/instagram.png";
import Lin from "../Pic/linkedin.png";
import City from "../Pic/City.png";
const Foot = () => {
  return (
    <div className="Foot">
      <hr />
      <div className="footer">
        <div className="Social">
          <img src={Git} alt="" />
          <img src={Inst} alt="" />
          <img src={Lin} alt="" />
        </div>
        <div className="Cit">
          <img src={City} alt="" />
        </div>
      </div>
      <div /*className="blur blur-f-1"*/></div>
      <div /*className="blur blur-f-2"*/></div>
    </div>
  );
};

export default Foot;
