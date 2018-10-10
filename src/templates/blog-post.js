import React from "react";
import Helmet from "react-helmet";
import Layout from '../components/layout';
import ContentBlock from '../components/contentblock';

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <ContentBlock>
      <div className="blog-post-container">
        <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          {/* <img src={post.frontmatter.image} /> */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      </ContentBlock>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;