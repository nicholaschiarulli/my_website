import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import "../css/layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: "description", content: "My fav blog" }]}
        >
          <script src="https://kit.fontawesome.com/68097771c6.js" />
          <html lang="en" />
        </Helmet>

        <div className="blog-container">{children}</div>
      </>
    )}
  />
);

export default Layout;
