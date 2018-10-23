import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ContentBlock from "../components/contentblock"
import QuoteBlock from "../components/quoteblock"
import HowWeWork from "../components/howwework"
import HireUsFooter from "../components/Footer/hireusfooter"
import Button from 'gatsby-link';
import buttonStyles from "../styles/components/button.module.scss"
import { StaticQuery, graphql } from 'gatsby'
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

const blueWideButtonClasses = `${buttonStyles.blue} ${buttonStyles.wide}`;

export default () => (
  <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { eq: "images/hero/hands_laptops.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        `}
        render={data => (
        <Layout>
          <Helmet title="Services" />
          <Navbar
              blue={false}
          />
          <Hero
            displayname="Hero"
            img={data.hero.childImageSharp.fluid}
          >
            <h1>Simply Software.</h1>
            <h3>They say do one thing and do it well. Our thing is software.</h3>
            <span className={buttonStyles.herobuttoncontainer}>
              <Button
                  className={blueWideButtonClasses}
                  to="/services"
              >
                Our Process.
              </Button>
              </span>
          </Hero>
          <ContentBlock
            vertical={false}
            title="More partners, less clients."
          >
              Over the years we’ve built software in a variety of industries at every scale from startups to enterprise applications. While the specfiics change, one thing always remains constant: our commitment to doing the right thing.
              <p/>
              That’s why we like to think of our customers less as clients and more as partners. We’re in this together, every step of the way. From initial specs to final deployment, you can trust that we will be there to do what we do best: deliver quality software that meets your business’s needs."
          </ContentBlock>
          <QuoteBlock />
          <HowWeWork />
          <HireUsFooter />
        </Layout>
      )
    }
    />
)