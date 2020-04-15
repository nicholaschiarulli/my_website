import React, { Fragment } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import PrevNext from "../components/prevnext";
import MetaTags from "../components/Metatags";
import Share from "../components/share";
import "../css/markdown.css";
import "katex/dist/katex.min.css";
import "../css/themes/prism-darcula.css";
import "../css/layout.css";
import Navbar from "../components/Navbar";
import "../css/left-right.css";
function BlogPost(props) {
  const url = props.data.site.siteMetadata.siteUrl;
  const thumbnail =
    props.data.markdownRemark.frontmatter.image &&
    props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src;
  const { title, image, tags } = props.data.markdownRemark.frontmatter;
  const { prev, next } = props.pageContext;
  return (
    <Fragment>
      <div className="side">
        <div className="side right">
          <Layout>
            <MetaTags
              title={title}
              description={props.data.markdownRemark.excerpt}
              thumbnail={thumbnail && url + thumbnail}
              url={url}
              pathname={props.location.pathname}
            />
            <div>
              <h1 className="blog-header">{title}</h1>
              {image && <Img fluid={image.childImageSharp.fluid} />}
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.markdownRemark.html
                }}
                className="markdown-body"
              />
              <div className="blog-spacing">
                <span className="blog-topic">Topic in: </span>
                {tags.map((tag, i) => (
                  <a
                    href={`/${tag}`}
                    key={i}
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      color: "#66fcf1"
                    }}
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <PrevNext prev={prev && prev.node} next={next && next.node} />
            <Share title={title} url={url} pathname={props.location.pathname} />
          </Layout>
        </div>
        <div className="side left">
          <Navbar />
        </div>
      </div>
    </Fragment>
  );
}

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
