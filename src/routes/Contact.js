import React from 'react'
import Contents from '../components/Contents';
import Form from '../components/Form';
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Contents heading="CONTACT
    " text="Lets have a chat."/>
    <Form/>
    </div>
  )
}

export default Contact;