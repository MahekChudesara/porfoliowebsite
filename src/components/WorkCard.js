import "./WorkCardsStyles.css";
import React from 'react';

const WorkCard = (props) => {
  return (
    <>
      <div className='cards'>
      <div className='card'>
      <img src={props.imgsrc} alt="mypic" className='card__img'/>
      <div className='card__info'>
      <span className='card__category'>{props.title}</span>
      <p className='card__text'>{props.text}</p>
      <a href={props.code} target="_blank">
        <button>View Source code</button>
      </a>
      </div>
      </div>
      </div>
    </>
  )
}

export default WorkCard