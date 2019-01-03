import { graphql } from "gatsby";
import Button from "gatsby-link";
import React from "react";
import { Animated } from "react-animated-css";
import Helmet from "react-helmet";
import Clients from "../components/clients";
import ContentBlock from "../components/contentblock";
import DiagonalBackground from "../components/diagonalbackground";
import About from "../components/Footer/about";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import OpenSource from "../components/OpenSource/OpenSource";
import ServiceList from "../components/Services/servicelist";
import buttonStyles from "../styles/components/button.module.scss";
import indexStyles from "../styles/pages/index.module.scss";

const blueWideButtonClasses = `${buttonStyles.button__blue} ${
  buttonStyles.button__wide
}`;

const grayWideButtonClasses = `${buttonStyles.button__gray} ${
  buttonStyles.button__wide
}`;

const HomeHero = props => (
  <Hero displayname="Hero" imgSrc={props.data.hero.childImageSharp.fluid.src}>
    <Animated animationIn="fadeInUp">
      <h1>Need an app? We can help.</h1>
      <h3>
        We are developers focused on efficient solutions to real world problems.
      </h3>
    </Animated>
    <span className={indexStyles.heroButton}>
      <Button className={blueWideButtonClasses} to="/services">
        Our Process
      </Button>
      <Button className={grayWideButtonClasses} to="/contact">
        Hire Us
      </Button>
    </span>
  </Hero>
);

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Apsis Labs | A Seattle Software Development Company" />
        <Navigation blue={false} />
        <HomeHero {...this.props} />

        <Clients
          clientOne={this.props.data.clientWeber.childImageSharp.fluid}
          clientOneAlt="Weber Shandwick"
          clientOneUrl="https://www.webershandwick.com/"
          clientTwo={this.props.data.clientNatera.childImageSharp.fluid}
          clientTwoAlt="Natera"
          clientTwoUrl="https://www.natera.com/"
          clientThree={this.props.data.clientTray.childImageSharp.fluid}
          clientThreeAlt="Tray.io"
          clientThreeUrl="https://tray.io/"
          clientFour={this.props.data.clientBoku.childImageSharp.fluid}
          clientFourAlt="Boku"
          clientFourUrl="https://www.boku.com/"
        />

        <ContentBlock title="Your industry is our business." vertical={false}>
          Our craft is software development but our specialty is understanding
          your business, your processes, and your priorities. A robust
          understanding of your business goals is crucial for us to determine
          how to serve you best. We take the time to ensure you’re not paying
          extra for something that’s over-engineered. We want to strike the
          right balance among the factors that are important to you: effective
          features and functionality, budget, speed, technology maintenance
          costs, and more.
          <ServiceList />
        </ContentBlock>

        <DiagonalBackground>
          <OpenSource />
        </DiagonalBackground>

        <ContentBlock title="Idea. Implement. Iterate." vertical={false}>
          <div>
            At Apsis we embrace a process we call “almost agile.” Based on the
            idea that the best proving ground for new software is real-world
            users, we focus on rapid development and deployment followed by
            iteration based on user feedback. Our small project teams of 2-3
            developers are organized based on your project needs, and work in
            small, focused sprints to maximize adaptability.
          </div>

          <div className={indexStyles.serviceButton}>
            <Button className={blueWideButtonClasses} to="/services">
              Our Services
            </Button>
          </div>
        </ContentBlock>

        <Clients
          clientOne={this.props.data.clientCascade.childImageSharp.fluid}
          clientOneAlt="Cascade Bicycle Club"
          clientOneUrl="https://www.cascade.org/"
          clientTwo={this.props.data.clientDragonFoundry.childImageSharp.fluid}
          clientTwoAlt="Dragon Foundry"
          clientTwoUrl="http://www.dragonfoundry.com/"
          clientThree={this.props.data.clientColumbia.childImageSharp.fluid}
          clientThreeAlt="Columbia University"
          clientThreeUrl="https://www.columbia.edu/"
          clientFour={this.props.data.clientCallidus.childImageSharp.fluid}
          clientFourAlt="Callidus Cloud"
          clientFourUrl="https://www.calliduscloud.com/"
        />

        <Clients
          clientOne={this.props.data.clientPicturiffic.childImageSharp.fluid}
          clientOneAlt="Picturiffic"
          clientOneUrl="https://picturiffic.apsis.io/"
          clientTwo={this.props.data.clientArkatechture.childImageSharp.fluid}
          clientTwoAlt="Arkatechture"
          clientTwoUrl="https://www.arkatechture.com/"
          clientThree={
            this.props.data.clientThinkingBaseball.childImageSharp.fluid
          }
          clientThreeAlt="Thinking Baseball"
          clientThreeUrl="https://www.thinkingbaseball.com/"
          clientFour={this.props.data.clientCoverMyTest.childImageSharp.fluid}
          clientFourAlt="Cover My Test"
          clientFourUrl="https://covermytest.com/"
        />

        <About
          fluid={this.props.data.building.childImageSharp.fluid}
          alt="Our Seattle Office"
        />
      </Layout>
    );
  }
}

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 140) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const fluidHero = graphql`
  fragment fluidHero on File {
    childImageSharp {
      fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    clientBoku: file(relativePath: { eq: "images/clients/boku.png" }) {
      ...fluidImage
    }
    clientNatera: file(relativePath: { eq: "images/clients/natera.png" }) {
      ...fluidImage
    }
    clientCallidus: file(relativePath: { eq: "images/clients/callidus.png" }) {
      ...fluidImage
    }
    clientWeber: file(relativePath: { eq: "images/clients/weber.png" }) {
      ...fluidImage
    }
    clientArkatechture: file(
      relativePath: { eq: "images/clients/arkatechture.png" }
    ) {
      ...fluidImage
    }
    clientCascade: file(relativePath: { eq: "images/clients/cascade.png" }) {
      ...fluidImage
    }
    clientColumbia: file(relativePath: { eq: "images/clients/columbia.png" }) {
      ...fluidImage
    }
    clientCoverMyTest: file(
      relativePath: { eq: "images/clients/covermytest.png" }
    ) {
      ...fluidImage
    }
    clientDragonFoundry: file(
      relativePath: { eq: "images/clients/dragonfoundry.png" }
    ) {
      ...fluidImage
    }
    clientPicturiffic: file(
      relativePath: { eq: "images/clients/picturiffic.png" }
    ) {
      ...fluidImage
    }
    clientThinkingBaseball: file(
      relativePath: { eq: "images/clients/thinkingbaseball.png" }
    ) {
      ...fluidImage
    }
    clientTray: file(relativePath: { eq: "images/clients/trayio.png" }) {
      ...fluidImage
    }
    hero: file(relativePath: { eq: "images/hero/hero3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          src
        }
      }
    }
    building: file(relativePath: { eq: "images/posts/jack-straw-office.jpg" }) {
      ...fluidHero
    }
  }
`;
