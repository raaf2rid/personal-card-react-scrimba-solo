import React from "react"
import ProfilePic from "./assets/pro.jpg"


export default function Info() {
    
    return(
       <div className="header">
       
       <img src = {ProfilePic} className="pro-pic" />
       
       <div className="info">
       <h3 className="title"> Tamzid Ridwan Rafi</h3>
       <p className="subtitle">Front-End Developer</p>
       <a href="#" className="website">https://github.com/raaf2rid</a>
 
       <div className="buttons">
       <a className="btn email" href="#"><i className="fa-solid fa-envelope"></i>Email</a>
       <a className ="btn linkedin" href="#"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
       </div>
       
       </div>
 
       </div>
    )
}