import React from "react";
import {card} from "../../assets"


export const Card = () => {
return (
    
        <div className="card-outer" id="feature">
        <div className="card-inner" >
        <h2 className="card-head">Experience the power of purchasing <br/>freedom with our credit card </h2>
        <p className="card-para" >Debit and credit cards are essential financial tools for managing your money in today's digital age. With a debit card, you can access your funds at ATMs and make purchases directly from your checking account, while a credit card allows you to make purchases and pay off the balance over time
        </p>
        </div>
        <div className="card-img">
        <img src={card}  className="card-mobile" />
        </div>
    </div>


)

}