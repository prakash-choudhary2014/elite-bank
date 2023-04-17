import React from "react";
import { robot } from "../../assets";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-Head">
      <p className="intro-Head">The Next Generation <br/> Payment Method</p>
      <p className="intro">Welcome to ELITE BANK, where we are dedicated to providing you with exceptional banking services. We understand 
      that banking is more than just a transaction, it's about building relationships with our customers. </p>
      </div>
      <div >
        <img src={robot} className="robot" />

      </div>
    </div>
  );
};
