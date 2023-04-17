import React from "react";
import { apple, bill, google } from "../../assets";

export const Blog = () => {
  return (
    <div className="bill-outer" style={{marginTop:100}} >
     
        <img src={bill} className="bill-img" />
     
      
      <div className="business"  >
        <h2 className="business-head">Welcome to a world of convenient and accessible banking services</h2>
        <p className="business-intro" >Step into the world of convenience and security with ELITE BANK. From online banking to mobile payments, we've got you covered
        </p>
        <div className="download">
           <a href=""> <img src={google} style={{marginLeft:50,marginRight:50}} /></a>
           <a href=""> <img src={apple} style={{marginLeft:50,marginRight:50}}/></a>
        </div>
       
      
      </div>
    </div>
  );
};
