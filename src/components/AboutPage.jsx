import React, { Component } from "react";
import "./style.css";

const AboutPage = () => (
  <React.Fragment>
    <div>
      <div className="about-head">
        <p>About Me</p>
      </div>
      <div className="about-body">
        <div className="col-md-3" />
        <div className="col-md-6">
          <p>
            My name is Jed Rojas and I study Computer Science at the University
            of Florida. My primary language is Java, but I have been diving
            deeper into HTML/CSS/Javascript along with React as I have started
            working with web development.
          </p>
        </div>
        {/* <div className="col-md-4">
          <p>
            Integer pulvinar mauris sit amet accumsan tempus. Ut bibendum velit
            lectus, maximus posuere tellus pretium elementum.
          </p>
        </div> */}
        {/* <div className="col-md-2" /> */}
      </div>
    </div>
  </React.Fragment>
);

export default AboutPage;
