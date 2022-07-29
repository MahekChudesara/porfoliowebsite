import '../components/HometwoStyles.css'
import IntroImg from "../images/Homeimage.jpg"
import React from 'react'
import { Link } from "react-router-dom";


const Hometwo = () => {
  return (
    <>
    <div className="hometwo">
    <div className="mask">
    <img className="intro-img"
    src={IntroImg} alt="homeimage"/>
    </div>
    <div className="content">
        <p>HI , MY NAME IS MAHEK CHUDESARA</p>
        <h1>Reactjs Devloper</h1>
        <div >
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hometwo