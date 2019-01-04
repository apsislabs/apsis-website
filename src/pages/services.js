import cn from "classnames";
import { graphql, StaticQuery } from "gatsby";
import Button from "gatsby-link";
import React from "react";
import { Animated } from "react-animated-css";
import Helmet from "react-helmet";
import ContentBlock from "../components/contentblock";
import HireUsFooter from "../components/Footer/hireusfooter";
import Hero from "../components/hero";
import HowWeWork from "../components/howwework";
import ImageGrid from "../components/image_grid";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import QuoteBlock from "../components/quoteblock";
import buttonStyles from "../styles/components/button.module.scss";

const ServicesHero = ({ data }) => (
  <Hero displayname="Hero" imgSrc={data.hero.childImageSharp.fluid.src}>
    <Animated animationIn="fadeInUp">
      <h1>Simply Software.</h1>
      <p className="lede">
        They say: do one thing and do it well. Our thing is software.
      </p>
    </Animated>

    <Button
      className={cn(
        buttonStyles.button,
        buttonStyles.buttonPrimary,
        buttonStyles.buttonBlock
      )}
      to="/team"
    >
      Meet the Team
    </Button>
  </Hero>
);

const ServicesPage = data => {
  const { toolUnity, toolWP, toolAWS, toolReact, toolRails } = data;
  const toolImages = [
    {
      url: "https://unity3d.com",
      fluid: toolUnity.childImageSharp.fluid,
      alt: "Unity3D"
    },
    {
      url: "https://www.wordpress.org",
      fluid: toolWP.childImageSharp.fluid,
      alt: "WordPress"
    },
    {
      url: "https://aws.amazon.com",
      fluid: toolAWS.childImageSharp.fluid,
      alt: "AWS"
    },
    {
      url: "https://reactjs.org/",
      fluid: toolReact.childImageSharp.fluid,
      alt: "React JS"
    },
    {
      url: "https://rubyonrails.org/",
      fluid: toolRails.childImageSharp.fluid,
      alt: "Ruby on Rails"
    }
  ];

  const quotes = [
    {
      text:
        "Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.",
      attribution: "Chris Goddard",
      title: "Vice President of Analytics",
      company: "Weber Shandwick"
    },
    {
      text:
        "Apsis Labs is an innovative and professional software development team that has provided Natera with valuable development services. The team has been instrumental in developing our customer facing and back office solutions. We are very happy with our decision to use Apsis, as their expertise has translated into back office cost savings and a better customer experience! Apsis is a great team to work with!",
      attribution: "Susan Lin",
      title: "Former Senior Manager, Enterprise Applications",
      company: "Natera, Inc."
    },
    {
      text:
        "We have worked with Apsis on many projects ranging from website development, PHP application development, and Windows app development. Apsis has always delivered quality work on time, which is why we keep coming back to them for additional projects.",
      attribution: "Omer Saeed",
      title: "VP of Products, Marketing Automation",
      company: "CallidusCloud"
    }
  ];

  return (
    <Layout>
      <Helmet title="Services | Apsis Labs" />
      <Navigation blue={false} />
      <ServicesHero data={data} />

      <ContentBlock title="More partners, less clients.">
        <p>
          Over the years we’ve built software in a variety of industries at
          every scale from startups to enterprise applications. While the
          specfics change, one thing always remains constant: our commitment to
          doing the right thing.
        </p>
        <p>
          That’s why we like to think of our customers less as clients and more
          as partners. We’re in this together, every step of the way. From
          initial specs to final deployment, you can trust that we will be there
          to do what we do best: deliver quality software that meets your
          business’s needs.
        </p>
      </ContentBlock>

      <QuoteBlock quotes={quotes} />
      <ImageGrid images={toolImages} />

      <HowWeWork />

      <HireUsFooter />
    </Layout>
  );
};

export default () => <StaticQuery query={pageQuery} render={ServicesPage} />;

const pageQuery = graphql`
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
`;
