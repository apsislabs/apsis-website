import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import Content from "../components/content"

const IndexPage = (props) => (
    <Layout>
        <Hero 
            headerText="Need an app? We can help."
            subtitle="We are developers focused on efficient solutions to real world problems."
        />
        <Clients 
            clientOne={props.data.clientOne.childImageSharp.fluid}
            clientOneAlt="Boku"
            clientTwo={props.data.clientTwo.childImageSharp.fluid}
            clientTwoAlt="Natera"
            clientThree={props.data.clientThree.childImageSharp.fluid}
            clientThreeAlt="Columbia University"
            clientFour={props.data.clientFour.childImageSharp.fluid}
            clientFourAlt="Weber"
        />
        <Content
            title="Your industry is our business."
            text="Our craft is software development but our specialty is understanding your business, your processes, and your priorities. A robust understanding of your business goals is crucial for us to determine how to serve you best. We take the time to ensure you’re not paying extra for something that’s over-engineered.  We want to strike the right balance among the factors that are important to you: effective features and functionality, budget, speed, technology maintenance costs, and more."
        />
    </Layout>
  )

  export default IndexPage

  export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 140) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  `;
  export const pageQuery = graphql`
    query {
        clientOne: file(relativePath: { eq: "clients/boku.png" }) {
            ...fluidImage
        }
        clientTwo: file(relativePath: { eq: "clients/natera.png" }) {
            ...fluidImage
        }
        clientThree: file(relativePath: { eq: "clients/columbia.png" }) {
            ...fluidImage
        }
        clientFour: file(relativePath: { eq: "clients/weber.png" }) {
            ...fluidImage
        }
    }
  `