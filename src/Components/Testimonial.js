import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Start with the visual aspect of the food. Talk about how the dishes were presented on the plate.
        Mention if there were any artistic or creative elements in the presentation.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The dishes served here are a true treat for the taste buds.
        The food is bursting with flavors that leave a lasting impression.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Shubham Upadhyay</h2>
      </div>
    </div>
  );
};

export default Testimonial;
