import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
// import Img from 'gatsby-image'

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