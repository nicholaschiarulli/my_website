import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
// import "../css/app.css";
import "../css/post.scss";

function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges;
  const { tag } = props.pageContext;
  return (
    <Layout>
      <h1 className="sub-topic">{`Topic ${tag}`}</h1>
      <div className="tags">
        {posts.map(({ node }, i) => (
          <Link to={node.fields.slug} key={i} className="card-topic">
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
      <Navbar />
    </Layout>
  );
}

export default Tags;

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
