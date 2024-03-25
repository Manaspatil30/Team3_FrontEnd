import React, { useState } from 'react';
import "../styles/contactus.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const contactData = {
    "name" : name, 
    "email" : email, 
    "message" : message
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("contact-us", contactData)
    .then(toast.success("Thank you for contacting us!"))

    setName('');
    setEmail('');
    setMessage('');
    window.location.reload();
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={(e)=>{setMessage(e.target.value)}}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;