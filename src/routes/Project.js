import React from 'react';
import Contents from '../components/Contents';
import Navbar from "../components/Navbar";
import Work from '../components/Work';

const Project = () => {
  return (<>
         <div>
    <Navbar/>
    <Contents heading="PROJECTS" text="Some Of My Small Projects."/>
    <Work/>
    </div>
  </>
  )
}

export default Project;