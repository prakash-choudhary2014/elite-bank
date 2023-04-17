import React from "react";
import { star,shield, arrowUp } from "../../assets";

export const About = () => {
  return (
    <div className="business-outer" id="about">
      <div className="business" >
        <h2 className="business-head">You do the business, we'll<br/> handle the money</h2>
        <p className="business-intro" >With the right credit card, you can improve your financial
          life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market
        </p>
        {/* <Button /> */}
      </div>

    <div className="feature-outer">
      <div className="feature-inner">
        <div className="feature" >
        <img src={star} style={{height:30}} />
          <h3 style={{fontSize:45, marginLeft:20, marginBottom:20}}>Rewards</h3>
          </div>
          <p className="feature-para" >The best credit cards offer some tantalizing combinations of promotions and prizes</p>    
          </div>

          <div className="feature-inner">
        <div className="feature" >
        <img src={shield} style={{height:30}}  />
          <h3 style={{fontSize:45, marginLeft:20, marginBottom:20}}>100% Secured</h3>
          </div>
          <p className="feature-para" >We take proactive steps make sure your information and transactions are secure.</p>    
          </div>

          <div className="feature-inner">
        <div className="feature" >
        <img src={arrowUp} style={{height:30}} />
          <h3 style={{fontSize:45, marginLeft:20, marginBottom:20}}>Balance Transfer</h3>
          </div>
          <p className="feature-para" >A balance transfer credit card can save you a lot of money in interest charges.</p>    
          </div>
          </div>

        </div>

  );
};
