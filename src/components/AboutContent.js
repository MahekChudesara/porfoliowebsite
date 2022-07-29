import "./AboutContentStyles.css";
import {Link} from "react-router-dom"
import React from 'react'
import React1 from "../images/mypic.jpg"

const AboutContent = () => {
    
  return (
    <>
        <div className="about"> 
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hii There, I'm Mahek chudesra .<br/> 
            I Completed My Diploma In Year 2020 From GPG college.<br/>
            Currently I Am In B.E , I Learn Different Languages In Past Years .<br/> 
            <br/>
            My Technical Skills :-
            <ul>
                <li>HTML</li>
                <li>CSS </li>
                <li>JAVASCRIPT</li>
                <li>Reactjs</li>
                <li>Android</li>
            </ul>
             </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}
                        className="img"
                        alt="true"
                    />
                </div>
                
            </div>
        </div>
           </div>
    </>
  )
}

export default AboutContent