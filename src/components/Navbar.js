import React, { Fragment } from "react";
// import Home from "./Home";
import "../css/navbar.css";
const Navbar = () => {
  return (
    // <Home>
    <Fragment>
      {/* <ul className="menu">
        <li title="home">
          <a href="/" className="home">
            <div className="expanded">home</div>
          </a>
        </li>

        <li title="team">
          <a href="/profiles" className="pencil">
            the team
          </a>
        </li>
        <li title="blog">
          <a href="/blog" className="blog">
            blog
          </a>
        </li>
        <li title="github">
          <a href="#" className="archive">
            github
          </a>
        </li>
        <li title="youtube">
          <a href="#" className="projects">
            about
          </a>
        </li>
        <li title="social_media">
          <a href="#" className="social_media">
            about
          </a>
        </li>

        <li title="about">
          <a href="#" className="about">
            about
          </a>
        </li>
        <li title="contact">
          <a href="mailto:codemonkeysYT@gmail.com" className="contact">
            contact
          </a>
        </li>
      </ul>
 */}

      <ul className="menu">
        <li title="home">
          <a href="/" className="home">
            <div className="expanded">home</div>
          </a>
        </li>

        <li title="resume">
          <a href="/profile" className="resume">
          resume
          </a>
        </li>
        <li title="blog">
          <a href="/blog" className="blog">
            blog
          </a>
        </li>
        <li title="projects">
          <a href="/projects" className="projects">
            projects
          </a>
        </li>

        <li title="github">
          <a href="https://github.com/nicholaschiarulli" className="archive">
            github
          </a>
        </li>
        <li title="linkedin">
          <a
            href="https://www.linkedin.com/in/nicholas-chiarulli-599182133/"
            className="linkedin"
          >
            about
          </a>
        </li>
      

        {/* <li title="about">
          <a href="/about" className="about">
            about
          </a>
        </li> */}
        <li title="contact">
          <a href="mailto:codemonkeysYT@gmail.com" className="contact">
            contact
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
