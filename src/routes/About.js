import React from 'react'
import Contents from '../components/Contents';
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
    <Navbar/>
    <Contents heading="ABOUT"  text="I Am Friendly With Front-End Languages."/>
    <AboutContent/>
    </div>
  )
}

export default About;