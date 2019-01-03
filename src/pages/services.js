import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContentBlock from "../components/contentblock";
import QuoteBlock from "../components/quoteblock";
import HowWeWork from "../components/howwework";
import HireUsFooter from "../components/Footer/hireusfooter";
import { StaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import Helmet from "react-helmet";
import buttonStyles from "../styles/components/button.module.scss";
import Button from "gatsby-link";
import { Animated } from "react-animated-css";
import Tools from "../components/tools";

const blueWideButtonClasses = `${buttonStyles.button__blue} ${
  buttonStyles.button__wide
}`;

export default () => (
  <StaticQuery
    query={graphql`
      fragment fluidTool on File {
        childImageSharp {
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      query {
        hero: file(relativePath: { eq: "images/hero/hero1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              src
            }
          }
        }
        toolUnity: file(relativePath: { eq: "images/tools/unity.png" }) {
          ...fluidTool
        }
        toolWP: file(relativePath: { eq: "images/tools/wordpress.png" }) {
          ...fluidTool
        }
        toolAWS: file(relativePath: { eq: "images/tools/aws.png" }) {
          ...fluidTool
        }
        toolReact: file(relativePath: { eq: "images/tools/react.png" }) {
          ...fluidTool
        }
        toolRails: file(relativePath: { eq: "images/tools/rails.png" }) {
          ...fluidTool
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet title="Services | Apsis Labs" />
        <Navigation blue={false} />
        <Hero displayname="Hero" imgSrc={data.hero.childImageSharp.fluid.src}>
          <Animated animationIn="fadeInUp">
            <h1>Simply Software.</h1>
            <h3>
              They say: do one thing and do it well. Our thing is software.
            </h3>
          </Animated>
          <Button className={blueWideButtonClasses} to="/team">
            Meet the Team
          </Button>
        </Hero>
        <ContentBlock vertical={false} title="More partners, less clients.">
          Over the years we’ve built software in a variety of industries at
          every scale from startups to enterprise applications. While the
          specfics change, one thing always remains constant: our commitment to
          doing the right thing.
          <p />
          That’s why we like to think of our customers less as clients and more
          as partners. We’re in this together, every step of the way. From
          initial specs to final deployment, you can trust that we will be there
          to do what we do best: deliver quality software that meets your
          business’s needs.
        </ContentBlock>
        <QuoteBlock />
        <Tools
          toolOne={data.toolUnity.childImageSharp.fluid}
          toolOneAlt="Unity"
          toolOneUrl="https://www.webershandwick.com/"
          toolTwo={data.toolWP.childImageSharp.fluid}
          toolTwoAlt="Wordpress"
          toolTwoUrl="https://www.natera.com/"
          toolThree={data.toolAWS.childImageSharp.fluid}
          toolThreeAlt="AWS"
          toolThreeUrl="https://tray.io/"
          toolFour={data.toolReact.childImageSharp.fluid}
          toolFourAlt="React"
          toolFourUrl="https://www.boku.com/"
          toolFive={data.toolRails.childImageSharp.fluid}
          toolFiveAlt="Ruby on Rails"
          toolFiveUrl="https://www.boku.com/"
        />
        <HowWeWork />
        <HireUsFooter />
      </Layout>
    )}
  />
);
