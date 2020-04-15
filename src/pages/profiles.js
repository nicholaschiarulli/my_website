import React, { Fragment } from "react";
import { Link } from "gatsby";
import "../css/profiles.scss";
import Navbar from "../components/Navbar";
import "../css/left-right.css";
const profiles = () => {
  return (
    <Fragment>
      <div className="side">
        <div className="side right">
          <h1 className="meet-team">Meet our team!</h1>
          <div className="container">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img
                    className="profile-display"
                    //400by650
                    src={require("../images/rsz_img_0128.jpg")}
                    alt="profile one"
                  />
                </div>

                <ul className="social-icons">
                  <li>
                    <Link className="view-profile" to="/profile">
                      View Profile
                    </Link>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Nicholas Chiarulli
                    <br />
                    <span className="job-title">Software Developer</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img
                    className="profile-display"
                    src={require("../images/rsz_img_0128.jpg")}
                    alt="profile one"
                  />
                </div>

                <ul className="social-icons">
                  <li>
                    <Link className="view-profile" to="/profile">
                      View Profile
                    </Link>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Jason Chiarulli
                    <br />
                    <span className="job-title">Electrical Engineer</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="card-image">
                  <img
                    className="profile-display"
                    src={require("../images/rsz_img_0128.jpg")}
                    alt="profile one"
                  />
                </div>

                <ul className="social-icons">
                  <li>
                    <Link className="view-profile" to="/christian">
                      View Profile
                    </Link>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Christian Chiarulli
                    <br />
                    <span className="job-title">Software Engineer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side left">
          <Navbar></Navbar>
        </div>
      </div>
    </Fragment>
  );
};

export default profiles;
