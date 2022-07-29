import "./FormStyles.css";
import React from 'react'

const Form = () => {

  function clickHandler(){
    alert("Form Submitted.");
  }
  return (
    <>
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"></textarea>
                <button className="btn" onClick={clickHandler}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Form