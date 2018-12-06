import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import ContentBlock from '../components/contentblock';
import { graphql } from "gatsby"
import Navigation from "../components/navigation"
import BlogPostStyles from "../styles/templates/blog-post.module.scss"
import AuthorBlock from "../components/author_block"

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Navigation blue={true} />
      <ContentBlock vertical={true}>
        <Helmet title={post.frontmatter.title} />
        <div className={BlogPostStyles.post}>
          <img
            className={BlogPostStyles.post__headerImage}
            src={post.frontmatter.image.childImageSharp.fluid.src}
            alt="generic stockphoto"
          />
          <small className={BlogPostStyles.post__credit}>Image by: {post.frontmatter.credit}</small>
          <div className={BlogPostStyles.post__content}>
            <h1><div className={BlogPostStyles.post__title}>{post.frontmatter.title}</div></h1>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
        <AuthorBlock
          name={post.frontmatter.author}
        />
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
      author
      credit
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