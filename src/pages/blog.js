import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
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
      <Helmet title="Blog | Apsis Labs" />
      <Header
        title="Collecting Our Thoughts"
      >
        <h3>We think it's important to share and reflect what we've learned over the years.  Here's a collection of posts around who we are and what we've done.</h3>
      </Header>

      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <ContentBlock vertical={true} key={post.id} >
                <Link to={post.fields.slug}>
                  <div className="blog-post-preview">
                      <div className={BlogPostStyles.preview__imageWrapper}>
                        <Img
                          className={BlogPostStyles.preview__headerImage}
                          fluid={post.frontmatter.image.childImageSharp.fluid} alt="generic stock of something semi related to blog post"
                        />
                      </div>
                      <p className={BlogPostStyles.preview__title}>
                        {post.frontmatter.title}
                      </p>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
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
