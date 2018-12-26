import React, { Component } from "react";
import "./style.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="text-container">
          <div className="text">
            <div>
              <img className="headshot" />
            </div>
            <br />
            <p2>Hello there. </p2>
            <p1>I'm</p1>
            <p3> Jed Rojas,</p3>
            <br />
            <p1>a</p1>
            <p4> software developer </p4>
            <p1>from</p1>
            <p4> Miami, Florida.</p4>
            <div onClick={this.props.onAboutClick} className="about-link">
              Learn more about me!
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
