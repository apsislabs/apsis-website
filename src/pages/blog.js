import React from "react"
import Layout from "../components/layout"
import ContentBlock from "../components/contentblock"
import { graphql, Link } from 'gatsby'
import HireUsFooter from "../components/Footer/hireusfooter"
import Navbar from "../components/navbar"
import BlogPostStyles from "../styles/templates/blog-post.module.scss"
import Helmet from "react-helmet";
import Img from "gatsby-image"

export default (props) => {
  const { edges: posts } = props.data.blogPosts;
  return (
    <Layout>
      <Navbar
        blue={true}
      />
      <Helmet title="Blog" />
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
              <ContentBlock vertical={true} key={post.id} >
                <div className="blog-post-preview">
                  <Img
                    className={BlogPostStyles.post__headerImage}
                    fluid={post.frontmatter.image.childImageSharp.fluid} alt="this is the real image"
                  />
                  <h1>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
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
        fields {
          slug
        }
        frontmatter {
          title
          path
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
  }
}
`;
