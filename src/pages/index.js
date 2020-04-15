import React, { Fragment } from "react";
import { Link } from "gatsby";
import "../css/landing.css";
import Navbar from "../components/Navbar";
const Landing = () => {
  return (
    <Fragment>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Welcome!</h1>

            <div class="buttons">
              <Link to="/projects" class="btn edit " />
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </Fragment>
  );
};

export default Landing;
