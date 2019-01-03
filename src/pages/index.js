import cn from "classnames";
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

const HomeHero = props => {
  return (
    <Hero displayname="Hero" imgSrc={props.data.hero.childImageSharp.fluid.src}>
      <Animated animationIn="fadeInUp">
        <h1>Need an app? We can help.</h1>
        <h3>
          We are developers focused on efficient solutions to real world
          problems.
        </h3>
      </Animated>
      <span className={indexStyles.heroButton}>
        <Button className={buttonStyles.button} to="/services">
          Our Process
        </Button>
        <Button
          className={cn(buttonStyles.button, buttonStyles.buttonPrimary)}
          to="/contact"
        >
          Hire Us
        </Button>
      </span>
    </Hero>
  );
};

class IndexPage extends React.Component {
  render() {
    const {
      clientWeber,
      clientNatera,
      clientTray,
      clientBoku,
      clientCascade,
      clientDragonFoundry,
      clientColumbia,
      clientCallidus,
      clientPicturiffic,
      clientArkatechture,
      clientThinkingBaseball,
      clientCoverMyTest
    } = this.props.data;

    const topClients = [
      {
        alt: "Weber Shandwick",
        fluid: clientWeber.childImageSharp.fluid,
        url: "https://www.webershandwick.com/"
      },
      {
        alt: "Natera",
        fluid: clientNatera.childImageSharp.fluid,
        url: "https://www.natera.com"
      },
      {
        alt: "tray.io",
        fluid: clientTray.childImageSharp.fluid,
        url: "https://www.tray.io"
      },
      {
        alt: "boku",
        fluid: clientBoku.childImageSharp.fluid,
        url: "https://www.boku.com"
      }
    ];

    const secondaryClients = [
      {
        fluid: clientCascade.childImageSharp.fluid,
        alt: "Cascade Bicycle Club",
        url: "https://www.cascade.org/"
      },
      {
        fluid: clientDragonFoundry.childImageSharp.fluid,
        alt: "Dragon Foundry",
        url: "http://www.dragonfoundry.com/"
      },
      {
        fluid: clientColumbia.childImageSharp.fluid,
        alt: "Columbia University",
        url: "https://www.columbia.edu/"
      },
      {
        fluid: clientCallidus.childImageSharp.fluid,
        alt: "Callidus Cloud",
        url: "https://www.calliduscloud.com/"
      }
    ];

    const tertiaryClients = [
      {
        fluid: clientPicturiffic.childImageSharp.fluid,
        alt: "Picturiffic",
        url: "https://picturiffic.apsis.io/"
      },
      {
        fluid: clientArkatechture.childImageSharp.fluid,
        alt: "Arkatechture",
        url: "https://www.arkatechture.com/"
      },
      {
        fluid: clientThinkingBaseball.childImageSharp.fluid,
        alt: "Thinking Baseball",
        url: "https://www.thinkingbaseball.com/"
      },
      {
        fluid: clientCoverMyTest.childImageSharp.fluid,
        alt: "Cover My Test",
        url: "https://covermytest.com/"
      }
    ];

    return (
      <Layout>
        <Helmet title="Apsis Labs | A Seattle Software Development Company" />

        <Navigation blue={false} />
        <HomeHero {...this.props} />
        <Clients clients={topClients} />

        <ContentBlock title="Your industry is our business." vertical={false}>
          <p>
            Our craft is software development but our specialty is understanding
            your business, your processes, and your priorities. A robust
            understanding of your business goals is crucial for us to determine
            how to serve you best. We take the time to ensure you’re not paying
            extra for something that’s over-engineered. We want to strike the
            right balance among the factors that are important to you: effective
            features and functionality, budget, speed, technology maintenance
            costs, and more.
          </p>

          <ServiceList />

          <Button
            className={cn(buttonStyles.buttonBlue, buttonStyles.button)}
            to="/services"
          >
            Our Services
          </Button>
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
            <Button
              className={cn(buttonStyles.button, buttonStyles.buttonPrimary)}
              to="/services"
            >
              Our Services
            </Button>
          </div>
        </ContentBlock>

        <Clients clients={secondaryClients} />
        <Clients client={tertiaryClients} />

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
      fluid(maxWidth: 240) {
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
