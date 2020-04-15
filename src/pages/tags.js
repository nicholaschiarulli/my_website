import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
// import "../css/app.css";
import "../css/post.scss";

function TagsPage(props) {
  const data = props.data.allMarkdownRemark.group;

  return (
    <Layout>
      <h1 className="all-topics">All Topics</h1>
      <div style={userStyle}>
        {data.map(tag => (
          <Link
            to={`/${tag.fieldValue}`}
            className=" my-1 card-topic text-center card-header"
          >
            {tag.fieldValue} {`(${tag.totalCount})`}
          </Link>
        ))}
      </div>
      <Navbar />
    </Layout>
  );
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
