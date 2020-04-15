import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
// import "../css/app.css";

const Home = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/68097771c6.js" />
          <html lang="en" />
        </Helmet>
      </>
    )}
  />
);

export default Home;
