import React from "react";
import "./Hero.css";
import Form from "../Components/Hero/Form"



const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content-wrapper">
          <div className="hero-content">
          <div className="hero-text">
            <h1>Replace Your Shearch Box with our Intel-bot</h1>
            <h2>Get a Chatbot for your Website in 5 minutes</h2>
          </div>
         <Form/>
          </div>
        </div>
        <div className="hero-content-wrapper">
          <video autoPlay={true} muted loop={true}>
            <source src="hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Hero;
