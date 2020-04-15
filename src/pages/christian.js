import React, { Fragment } from "react";
// import Helmet from "react-helmet";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
const christian = () => {
  const christian = {
    name: "Christian Chiarulli",
    school: "Temple",
    employedAt: "Comcast",
    company: "Code Monkeys",
    resumeImage: "resume.jpg",
    email: "nicholasrachiarulli@gmail.com",
    github: "nicholaschiarulli",
    linkedin: "nicholas-chiarulli-599182133/",
    profilePicture: "me.jpeg"
  };
  return (
    <Fragment>
      <Profile teamMember={christian} />
      <Navbar />
    </Fragment>
  );
};

export default christian;
