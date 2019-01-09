import cn from "classnames";
import { graphql, StaticQuery } from "gatsby";
import Button from "gatsby-link";
import React from "react";
import { Animated } from "react-animated-css";
import Helmet from "react-helmet";
import ContentBlock from "../components/contentblock";
import { Banner } from "../components/Footer/Banner";
import Hero from "../components/hero";
import ImageGrid from "../components/image_grid";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import QuoteBlock from "../components/quoteblock";
import buttonStyles from "../styles/components/button.module.scss";
import { IconBlock } from "../components/IconBlock";

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

      <section>
        <h4 style={{ textAlign: "center" }}>How We Work</h4>
        <IconBlock icon={"rocket"} title={"New Projects"}>
          <p>
            We love to work on new projects, as it’s a place where our
            experience as entrepreneurs really shines. We’re experienced and
            prepared to help at every step of a product’s lifecycle: from
            standing at the whiteboard, to defining an initial MVP, to launching
            a public beta — we’ve done it all. Because we work with a broad
            array of technologies, we’re always ready to offer insight into new
            trends, while ensuring your product will be built to last.
          </p>
          <p>
            If you’re a startup looking to bring a proof of concept to find your
            first round of funding, or an established business looking to enter
            a new market, our passion for product development will ensure you
            come away with a functional application that does what it needs to
            and nothing more.
          </p>
        </IconBlock>

        <IconBlock dir="right" icon={"university"} title={"Legacy Code"}>
          <p>
            For most businesses, there’s no escaping legacy code. Whether it’s a
            solid application that’s been running your accounting team for
            years, or your core product with weekly updates, someone’s got to
            maintain it.
          </p>
          <p>
            The bad news? This can mean digging through years of documentation,
            hacky workarounds, and making sure you “don’t touch the javas”
            because Dave’s machine is the only place they compile. The good
            news? We love that stuff.
          </p>
          <p>
            If you’re looking to bring an old code base up to date, or simply to
            support legacy functionality, our team is here to help. We’ll work
            with you to understand why things work the way they do, so changes
            don’t bring your business to a screeching halt, and as we learn your
            application’s quirks we can offer advice on best practices and
            opportunities for improvement.
          </p>
        </IconBlock>

        <IconBlock icon="magic" title={"Staff Augmentation"}>
          <p>
            Sometimes you need a little extra help, but it’s hard to find a
            well-defined project or feature that you can hand off. That’s okay:
            we're experts at augmenting existing engineering orgs. We specialize
            in slotting into your development workflow – either as part of your
            existing structure, or even bringing structure where it’s sorely
            needed.
          </p>
          <p>
            We can lend expertise in a specific new technology, help your team
            transition to the cloud, or just close some tickets that have been
            on your backlog for 18 months. If you need a helping hand — even for
            a short while — we’re here to provide leadership and expertise to
            get the job done.
          </p>
        </IconBlock>
      </section>

      <Banner />
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
