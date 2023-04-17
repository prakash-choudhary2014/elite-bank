import React from "react";
import { people01, quotes,people02, people03 } from "../../assets";


export const Clients=()=>{
    return (
        <>
    <div id="client">
        <div className="client-top">
            <h2>What people are saying about us</h2>
        </div>
        <div className="client-outer">
        <div className="client-card">
        <div>
            <img src={quotes}/>
            <p className="client-para">Thanks to this banking website, I am able to manage my finances seamlessly from the comfort of my home. Highly recommend it to anyone looking for a reliable online banking platform.</p>
        </div>
        <div className="client-people">
            <img src={people01}/>
            <p className="client-head">Garry Wilson(Founder)</p>
        </div>
        </div>

        <div className="client-card">
        <div >
            <img src={quotes}/>
            <p className="client-para">I absolutely love the user-friendly interface of this banking website. It has made my banking experience so much easier and hassle-free</p>
        </div>
        <div className="client-people">
            <img src={people02}/>
            <p className="client-head">Ray Dalio(Co-Founder)</p>
        </div>
        </div>

        <div className="client-card">
        <div>
            <img src={quotes}/>
            <p className="client-para">As a business owner, I rely on this banking website for daily transactions and monitoring of my accounts. The website's advanced security measures and efficient navigation have given me peace of mind and helped me stay on top of my finances.</p>
        </div>
        <div className="client-people">
            <img src={people03}/>
            <p className="client-head">George Soros(CFO)</p>
        </div>
        </div>

        

        </div>
    </div>

        </>

    )
}