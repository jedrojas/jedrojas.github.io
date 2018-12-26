import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

class App extends Component {
  handleHomeClick = () => {
    console.log("click happened");
    this.refs.homeRef.scrollIntoView({ behavior: "smooth" });
  };
  handleAboutClick = () => {
    this.refs.aboutRef.scrollIntoView({ behavior: "smooth" });
  };
  handleContactClick = () => {
    this.refs.contactRef.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <main>
        <NavigationBar
          // className="navbar"
          onHomeClick={this.handleHomeClick}
          onAboutClick={this.handleAboutClick}
          onContactClick={this.handleContactClick}
        />
        <section className="home" id="home" ref="homeRef">
          <HomePage onAboutClick={this.handleAboutClick} />
        </section>
        <section className="about" id="about" ref="aboutRef">
          <AboutPage />
        </section>
        <section className="contact" id="contact" ref="contactRef">
          <ContactPage />
        </section>
      </main>
    );
  }
}

export default App;
