import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import ContentBlock from "../components/contentblock"
import { graphql, Link } from 'gatsby'
import HireUsFooter from "../components/Footer/hireusfooter"
import Navigation from "../components/navigation"
import BlogPostStyles from "../styles/templates/blog-post.module.scss"
import Helmet from "react-helmet";

const NavLink = props => {
  if (!props.test) {
    return <Link to={`blog/` + props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const BlogPage = ({pageContext}) => {
  const { group, index, first, last } = pageContext; //can also get pageCount from here
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <Layout>
      <Navigation blue={true} />
      <Helmet title="Blog | Apsis Labs" />
      <Header
        title="Collecting Our Thoughts"
      >
        <h3>We think it's important to share and reflect what we've learned over the years.  Here's a collection of posts around who we are and what we've done.</h3>
      </Header>
      <div className="blog-posts">
        {group
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node }) => {
            return (
              <ContentBlock vertical={true} key={node.id} >
                <Link to={node.fields.slug} className={BlogPostStyles.preview__link}>
                  <div className={BlogPostStyles.preview__imageWrapper}>
                    <img
                      className={BlogPostStyles.preview__headerImage}
                      src={node.frontmatter.image.childImageSharp.fluid.src} alt="generic stock of something semi related to blog post"
                    />
                  </div>
                  <div className={BlogPostStyles.preview__title}>
                    <h1>{node.frontmatter.title}</h1>
                  </div>
                <p>{node.excerpt}</p>
                </Link>
              </ContentBlock>
            );
          })}
        </div>
        <div className={BlogPostStyles.paginator}>
          { !first &&
            <div className={BlogPostStyles.paginator__previous}>
              <NavLink test={first} url={previousUrl} text="prev" />
            </div>
          }
          { !last &&
            <div className={BlogPostStyles.paginator__next}>
              <NavLink test={last} url={nextUrl} text="next" />
            </div>
          }
        </div>
      <HireUsFooter />
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
query {
  blogPosts : allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC},    
  ) {
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
          date
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
