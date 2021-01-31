import React from "react";

import "../css/profile.css";
// import { Link } from "gatsby";
const Profile = props => {
  // console.log(props);
  // console.log("hi");
  const {
    name,
    school,
    employedAt,
    company,
    resumeImage,
    email,
    github,
    linkedin,
    profilePicture
  } = props.teamMember;
  // console.log(name);
  return (
    <div className="profile split">
      <div className="left">
        <div className="wrapper">
          <img
            className="headshot"
            src={require(`../images/${profilePicture}`)}
            alt="me"
          />
          <h1>{name}</h1>
          <p>School: {school}</p>
          <p>Degree: {employedAt}</p>
          <p>Company: {company}</p>
          <br></br>
          <p>
            <a
              className="hire-button"
              href={`https://www.linkedin.com/in/${linkedin}`}
            >
              Hire Me!
            </a>
          </p>
        </div>
      </div>
      <div className="right light">
        {/* <h2>Software Developer</h2>
        <small></small> */}

        {/* <img className="header-image" src={require("./comp-clear.png")} /> */}
        <img
          className="header-image"
          src={require(`../images/${resumeImage}`)}
          alt="background"
        />

        <ul className="socialmedia">
          {/* <li>
            <a href="/" className="twitter">
              Twitter
            </a>
          </li> */}

          <li>
            <a className="github" href={`https://github.com/${github}`}>
              Github
            </a>
          </li>

          <li>
            <a
              className="linkedin"
              href={`https://www.linkedin.com/in/${linkedin}`}
            >
              Linkedin
            </a>
          </li>

          <li>
            <a className="mail" href={`mailto:${email}`}>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
