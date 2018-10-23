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
      <ContentBlock>
        <Helmet title={post.frontmatter.title} />
        <div className={BlogPostStyles.postcontainer}>
          <div className={BlogPostStyles.title}>{post.frontmatter.title}</div>
          <img
            className={BlogPostStyles.featuredImage}
            src={post.frontmatter.featuredImage} alt=""
          />
          <div
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
        featuredImage
      }
    }
  }
`;