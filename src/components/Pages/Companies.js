import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../../assets";

export const Companies=()=>{
    return (
        <>
        <div className="Companies-outer">
            <div >
                <img src={binance} className="companies-img"/>
            </div>
            <div>
                <img src={airbnb} className="companies-img"/>
            </div>
            <div>
                <img src={coinbase} className="companies-img"/>
            </div>
            <div>
                <img src={dropbox} className="companies-img"/>
            </div>

        </div>
        </>
    )
}
