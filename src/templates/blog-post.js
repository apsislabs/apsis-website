import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import ContentBlock from '../components/contentblock';
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import BlogPostStyles from "../styles/templates/blog-post.module.scss"
import Img from "gatsby-image"

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Navbar
          blue={true}
      />
      <ContentBlock vertical={true}>
        <Helmet title={post.frontmatter.title} />
        <div className={BlogPostStyles.post}>
          <Img
            className={BlogPostStyles.post__headerImage}
            fluid={post.frontmatter.image.childImageSharp.fluid} alt="this is the real image"
          />
          <h1><div className={BlogPostStyles.post__title}>{post.frontmatter.title}</div></h1>
          <div
            className={BlogPostStyles.post__content}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </ContentBlock>
    </Layout>
  );
}

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    html
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;