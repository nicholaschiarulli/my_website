import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import "../css/about.css";

const About = () => {
  return (
    <Fragment>
      <h1 className="x-large">About Us</h1>
      <p className="x-large">Information about us</p>
      <Navbar />
    </Fragment>
  );
};

export default About;
