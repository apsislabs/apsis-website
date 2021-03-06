import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ContentBlock from "../components/contentblock";
import Navigation from "../components/navigation";
import Helmet from "react-helmet";
import Link from "gatsby-link";

export default () => {
  return (
    <Layout>
      <Navigation blue={true} />
      <Helmet title="Process | Apsis Labs" />
      <Header title="Work With Us.">
        <h3>Effective Design | Quality Code</h3>
      </Header>

      <ContentBlock vertical={true}>
        <h2>Grow Your Business</h2>
        <p>
          Do you need sensible software development? We might be a great for you
          if you:
        </p>
        <ul>
          <li>
            Have a great app idea for your business or soon-to-be business, but
            you’re not sure how to turn the idea into a reality.
          </li>
          <li>
            Spend hours of your valuable time moving data between spreadsheets
            or documents to track your business information.
          </li>
          <li>
            Hired your own software engineers, but your backlog is full of
            killer features you'll never have time to implement.
          </li>
          <li>
            Want to build an app or website that handles sensitive data, but you
            aren't sure how to make sure it's technically compliant with HIPAA.
          </li>
          <li>
            Expend hours doing repetitive work that is important to you, but is
            not a core part of your business.
          </li>
        </ul>
        <br />

        <h2>Whole Business Approach</h2>
        <p>We know your business is unique and complex. That’s why we:</p>
        <ul>
          <li>
            Make sure that we thoroughly understand your business, your vision
            and your existing processes, before we ever write a line of code.
          </li>
          <li>
            Turn your vision into a technical specification for your review. As
            we work we’ll check-in often to make sure that what we’re building
            matches your expectations.
          </li>
          <li>
            Check our assumptions over and over again. We think about what we
            build from the perspective of every stakeholder (you, your
            customers, your end users) to make sure we are effective in solving
            the right problems.
          </li>
          <li>
            Always consider product maintenance, upgrades, and long terms costs.
            What we build should be sustainable and easy to maintain.
          </li>
        </ul>
        <br />

        <h2>Knowledge and Experience</h2>
        <p>
          Custom software is an investment. Here’s why hiring us will increase
          your return:
        </p>
        <ul>
          <li>
            We hire senior developers only. Each of our team members comes armed
            with experience in numerous technology platforms and industries.
            When you pay for our service, you are paying for years of experience
            and knowledge.
          </li>
          <li>
            You can always expect honesty. We don’t over-promise what we can do.{" "}
          </li>
          <li>
            Our goal is not “landing the deal,” if we don’t have the right
            experience for your particular project, or we’re not a good a fit,
            we will happily refer you to another software development company in
            our network.
          </li>
        </ul>
        <br />

        <h2>Quality and Satisfaction</h2>
        <p>
          Your experience and results will be fantastic. Here’s how we know:
        </p>
        <ul>
          <li>
            Our top priority is quality product development. While speed and
            cost are important considerations, we do not compromise on on the
            quality of our design and our coding standards. We build products
            that we (and you) can stand by and be proud of.
          </li>
          <li>
            Our developers come fresh to every project. Each of our senior
            developers codes for only to 20 to 25 hours per week to make sure
            that every bit of work you pay for has our full engagement.
          </li>
          <li>
            We don’t bill you if we discover a gap in our knowledge. We eat the
            cost of our own mistakes. We pride ourselves on doing right by our
            customers.
          </li>
          <li>
            {" "}
            We work the way you do. If you already have tools in place for
            communicating, managing code, or your projects we will use those
            tools so we can easily integrate into your team.
          </li>
          <li>
            Every line of code we write is written by a senior developer, and
            code reviewed by at least one more senior developer. This way we
            build products to be intuitive and easy for another developer to
            understand and maintain.
          </li>
        </ul>
        <br />
        <span>
          Initial consultation with us is free - we will happily take a look at
          your project and either work up an estimate or point you to one of our
          partners who'd be a great fit! Contact us at{" "}
          <a href="mailto:contact@apsis.io">contact@apsis.io</a> or use{" "}
          <Link to="/contact">
            <u>our form</u>
          </Link>{" "}
          and tell us about your project.
        </span>
      </ContentBlock>
    </Layout>
  );
};
