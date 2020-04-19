import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import "../css/post.scss";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import "../css/left-right.css";
const IndexPage = props => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Fragment>
      <div className="side">
        <div className="side right" >
          <Layout>
            <Link to="/tags" className="topics">
              <div>
              <i className="fa-arrow-right" style={{ marginRight: "2rem"}} /> 
              Topics
               
              </div>
            </Link>

            {postList.edges.map(({ node }, i) => (
              <Link to={node.fields.slug} key={i} className="link">
                <div className="post-list">
                  <h1>{node.frontmatter.title}</h1>
                  <span>{node.frontmatter.date}</span>
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            ))}
          </Layout>
        </div>
        <div className="side left" >
          <Navbar></Navbar>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`;
