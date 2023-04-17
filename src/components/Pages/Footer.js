import React from "react";
import { bank, facebook, instagram, linkedin, twitter } from "../../assets";


export const Footer=()=>{
    return(
        < div id="footer">
        <div className="Footer-outer">
        <div className="banklogo-outer">
            <img src={bank} className="bank-logo"/>
            <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="footer-link">
            <ul className="footer-list"><p className="Footer-para">Useful links</p>
                <li>Content</li>
                <li>How it works</li>
                <li>Create</li>
                <li>Explore</li>
                <li>Terms & conditions</li>
            </ul>

        </div>

        <div className="footer-link">
            <ul className="footer-list"><p className="Footer-para">Community</p>
                <li>Help Centers</li>
                <li>Partners</li>
                <li>Suggestions</li>
                <li>Blog</li>
                <li>Newsletters</li>
            </ul>

        </div>


        <div className="footer-link">
            <ul className="footer-list">
                <p className="Footer-para">Partner</p>
                <li>Our Partners</li>
                <li>Become a Partner</li>
                
            </ul>

        </div>

        </div>
           <div className="footer-end" >
        <div className="border-end">
            <p>2023, ELITE bank, All rights reserved</p>
        </div>
        <div className="footer-logo">
            <div>
               <a href=" "> <img src={twitter} className="footer-img"/></a>
            </div>
            <div>
            <a href=" "> <img src={linkedin} className="footer-img"/></a>
            </div>
            <div>
            <a href=" "> <img src={facebook} className="footer-img"/></a>
            </div>
            <div>
            <a href=" "> <img src={instagram} className="footer-img"/></a>
            </div>
        </div>

        </div> 
        </div>
    )
}