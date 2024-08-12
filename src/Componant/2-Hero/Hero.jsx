import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import { useRef } from "react";
import developerAnimation from "../../../src/animation/developer.json";
const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex ">
      <div className="left-section  ">
        <div className=" parent-avatar flex">
          <img src="./public/uploads/1.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="subtitle">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="allicon flex">
          <div className="icon-twitter"></div>
          <div className="icon-linkedin"></div>
          <div className="icon-github"></div>
          <div className="icon-facebook"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
        lottieRef={lottieRef}
onLoadedImages={() => {
  lottieRef.current.setSpeed(5);
}}
          style={{ height:309 }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
