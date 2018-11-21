import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import ContentBlock from '../components/contentblock';
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import BlogPostStyles from "../styles/templates/blog-post.module.scss"

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
          <img
            className={BlogPostStyles.post__headerImage}
            src={post.frontmatter.image.childImageSharp.fluid.src}
            alt="generic stockphoto"
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
    fields {
      slug
    }
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