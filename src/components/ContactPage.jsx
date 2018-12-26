import React, { Component } from "react";
import "./style.css";

const ContactPage = () => (
  <React.Fragment>
    <div className="contact-head">
      <p>Contact Me</p>
    </div>
    <div className="contact-body">
      <a href="javascript:void(0);" className="fb-icon" onClick="goToFb()">
        <i className="fa fa-facebook" />
      </a>
      <a href="javascript:void(0);" className="li-icon" onClick="goToLi()">
        <i className="fa fa-linkedin" />
      </a>
      <a href="javascript:void(0);" className="ig-icon" onClick="goToIg()">
        <i className="fa fa-instagram" />
      </a>
      <a href="javascript:void(0);" className="gh-icon" onClick="goToGh()">
        <i className="fa fa-github" />
      </a>
    </div>
  </React.Fragment>
);

export default ContactPage;
