import React from 'react';
import "../styles/aboutus.css"


const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="title">About Us</h1>
      <hr className="separator" />
      <div className="main-image animated">
        <img src="https://i.imgur.com/XPCvLgf.jpeg" alt="Main Image" />
      </div>
      <div className="content">
        <hr className="separator" />
        <p>We are <span className="highlight animated">UniKart</span>!</p>
        <p>At our platform, we strive to make grocery shopping convenient and affordable for students. Our mission is to provide access to a wide range of high-quality groceries sourced from local supermarkets. We understand the challenges students face in balancing their studies and daily chores, which is why we aim to simplify the grocery shopping experience.</p>
        <p>Through our platform, students can easily compare prices, discover special offers, and make purchases from the comfort of their dorm rooms or apartments. Whether it's fresh produce, pantry staples, or snacks for late-night study sessions, we've got you covered.</p>
        <p>Thank you for choosing us as your grocery shopping destination. We look forward to serving you!</p>
      </div>
    </div>
  );
}

export default AboutUs;
