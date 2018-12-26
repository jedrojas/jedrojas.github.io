import React, { Component } from "react";
import "./style.css";

function myFunction() {
  var x = document.getElementById("navbar-container");
  if (x.className === "navbar-container") {
    x.className += " responsive";
  } else {
    x.className = "navbar-container";
  }
}

class NavigationBar extends Component {
  openDropDown = () => {
    console.log("dropdown");
    document.getElementById("myDropdown").classList.toggle("show");
  };
  render() {
    return (
      <div className="navbar-container" id="navbar-container">
        <p onClick={this.props.onHomeClick}>Home</p>
        <p onClick={this.props.onAboutClick}>About</p>
        <p onClick={this.props.onContactClick}>Contact</p>

        <div className="dropdown icon">
          <div onClick={this.openDropDown} className="dropbtn">
            <i className="fa fa-bars" />
          </div>
          <div className="dropdown-content" id="myDropdown">
            <p onClick={this.props.onHomeClick}>Home</p>
            <p onClick={this.props.onAboutClick}>About</p>
            <p onClick={this.props.onContactClick}>Contact</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
