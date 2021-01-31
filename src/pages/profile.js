import React, { Fragment } from "react";
// import Helmet from "react-helmet";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
const profile = () => {
  const nick = {
    name: "Nicholas Chiarulli",
    school: "Rutgers New Brunswick",
    employedAt: "Computer Science",
    company: "Software Engineer",
    resumeImage: "Nicholas_Chiarulli_Resume.png",
    email: "nicholasrachiarulli@gmail.com",
    github: "nicholaschiarulli",
    linkedin: "nicholas-chiarulli-599182133/",
    profilePicture: "nickYT.jpg"
  };
  return (
    <Fragment>
      <Profile teamMember={nick} />
      <Navbar />
    </Fragment>
  );
};

export default profile;
