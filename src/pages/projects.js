import React, { Fragment } from "react";
import Layout from "../components/layout";
import "../css/projects.css";
// import "../css/left-right.css";
import Project from "../components/Project";
import Navbar from "../components/Navbar";

const projects = () => {
  return (
    <Fragment>
      <div class="side">
        {/* <div className="side right"> */}
        <section class="hero">
          <div class="dark-back">
            {/* <div class="landing-inner"> */}
            <h1></h1>
            <article>
              <a class="link-project" href="#list">
                Browse Projects
              </a>
            </article>
            {/* </div> */}
          </div>
        </section>
        <section class="project" id="list">
          <ul>
          <Project
              imageName="gatsbyPic.jpg"
              title="Gatsby Website"
              description="The website you are currently viewing is built with Gatsby, React, Javascript, and CSS!"
              projectLink="blog"
            ></Project>
            <Project
              imageName="screenshot-from-2020-01-26-23-40-12.png"
              title="Code Connector"
              description="Social media application for coders/devs. Built using Javascript, 
              React, Nodejs, Redux, MongoDB"
              projectLink="blog"
            ></Project>
            <Project
              imageName="screenshot-from-2020-01-26-23-39-24.png"
              title="Github Finder"
              description="Basic application for finding Github users and listing their top repos
              and information about them."
              projectLink="blog"
            ></Project>
            <Project
              imageName="arch.png"
              title="Arch Linux & I3 setup"
              description="Guide for how to setup my Arch linux environment
              and my I3 config. 
              Arch linux is a linux distribution with rolling releases and I3 is a window manager."
              projectLink="blog"
            ></Project>
            <Project
              imageName="screenshot-from-2020-01-26-23-39-56.png"
              title="Ebay application"
              description="Auction based webapp that allows users to buy and sell
              items in an auction style. No real money involved. Built using Java, JSP, HTML, CSS, AWS MySQL. 
              Hosted on AWS EC2."
              projectLink="blog"
            ></Project>
            <Project
              imageName="acl.jpg"
              title="Simple Access Control List"
              description="A custom access control list written in python that uses pickling
              to store access data for users, groups, and operations."
              projectLink="blog"
            ></Project>
            {/* <Project
              imageName="hue.jpg"
              title="Project I am currently working on"
              description="The idea for this project is a mobile app that listens to my
              voice using DeepSpeech and Spacey. It will then make REST requests to a Flask Server
              that will control the hue lighting in my home."
              projectLink="blog"
            ></Project> */}
          
            {/* <Project
              imageName="monkey-computer.jpg"
              title="Drone Project"
              description="Made in the interiors of collapsing stars star stuff harvesting
                star light venture billions upon billions Drake Equation brain
                is the seed of intelligence?"
              projectLink="blog"
            ></Project>
            <Project
              imageName="monkey-computer.jpg"
              title="Drone Project"
              description="Made in the interiors of collapsing stars star stuff harvesting
                star light venture billions upon billions Drake Equation brain
                is the seed of intelligence?"
              projectLink="blog"
            ></Project> */}
          </ul>
        </section>
        {/* </div> */}
        {/* <div className="side left"> */}
        <Navbar></Navbar>
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default projects;
