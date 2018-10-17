import React from "react"
import Layout from "../components/layout"
import ContentBlock from "../components/contentblock"
// import Img from "gatsby-image"
import { graphql, Link } from 'gatsby'
import HireUsFooter from "../components/hireusfooter"
import Navbar from "../components/navbar"


export default (props) => {;
  const { edges: posts } = props.data.blogPosts;
  return (
    <Layout>
      <Navbar
        blue={true}
      />
      <ContentBlock
        vertical={true}
      >
        <h1>We wrote these.</h1>
        <h3>Maybe you want to read them. Maybe not. Your choice.</h3>
      </ContentBlock>

      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <ContentBlock vertical={true} >
                <div className="blog-post-preview" key={post.id}>
                {/* <Img fluid={post.frontmatter.image.childImageSharp.fluid} /> */}
                  <h1>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <p>{post.excerpt}</p>
                </div>
              </ContentBlock>
            );
          })}
      </div>
      <HireUsFooter />

    </Layout>
  );
}

export const pageQuery = graphql`
query {
    blogPosts : allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
