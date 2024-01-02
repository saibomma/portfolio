import React from "react";
import Instagram from "./images/instagram.png"
import Twitter from "./images/twitter.png"
import Facebook from "./images/facebook.png"
import Gmail from "./images/gmail.png"
export default function Footer(){
    return(
        <>
        <div className="footer">
        <div className="footer-images">
        <img src={Instagram} height={50} width={50} alt="instgram logo"/>
        </div>
        <div className="footer-images">
        <img src={Twitter} height={50} width={50}  alt= "twitter logo" />
        </div>
        <div className="footer-images">
        <img src={Facebook} height={50} width={50}  alt= "facebook logo" />
        </div>

        <h1 className="footer-content">Copyrights@ Sai Kiran Bomma</h1>

        <div className="footer-images">
        <a href="mailto:saikiranreddy.b1995@gmail.com">
        <img src={Gmail} height={50} width={50}  alt= "Gmail logo" />
        </a>
        </div>
        </div>
        </>

    );
}