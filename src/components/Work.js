import "./WorkCardsStyles.css";
import React from 'react';
import WorkCardData from "./WorkCardData"
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <>
        <h1 className="heading_style">Projects</h1>
          {WorkCardData.map((val,index)=>{
            return(
                <WorkCard 
                    key={index}
                    title={val.title}
                    imgsrc={val.imgsrc}
                    text={val.text}
                    code={val.code}
                />
            )
          })}
    </>
  )
}

export default Work;