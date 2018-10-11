import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import ContentBlock from "../components/contentblock"
import Services from "../components/services"
import DiagonalBackground from "../components/diagonalbackground"
import OpenSource from "../components/OpenSource"
import About from "../components/about"
import Button from 'gatsby-link'
import buttonStyles from "../styles/components/button.module.scss"
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
    render () {
        const blueWideButtonClasses = `${buttonStyles.blue} ${buttonStyles.wide}`;
        const grayWideButtonClasses = `${buttonStyles.gray} ${buttonStyles.wide}`;

        return (
            <Layout>
                <Hero img={this.props.data.hero.childImageSharp.fluid}>
                    <h1>Need an app? We can help.</h1>
                    <h3>We are developers focused on efficient solutions to real world problems.</h3>
                    <span>
                        <Button
                            className={blueWideButtonClasses}
                            to="/services"
                        >
                            Our Process
                        </Button>
                        <Button
                            className={grayWideButtonClasses}
                            to="/hire"
                        >
                            Hire Us
                        </Button>

                    </span>
                </Hero>
                <Clients
                    clientOne={this.props.data.clientOne.childImageSharp.fluid}
                    clientOneAlt="Boku"
                    clientTwo={this.props.data.clientTwo.childImageSharp.fluid}
                    clientTwoAlt="Natera"
                    clientThree={this.props.data.clientThree.childImageSharp.fluid}
                    clientThreeAlt="Columbia University"
                    clientFour={this.props.data.clientFour.childImageSharp.fluid}
                    clientFourAlt="Weber"
                />
                <ContentBlock
                    title="Your industry is our business."
                    vertical={false}
                >
                Our craft is software development but our specialty is understanding your business, your processes, and your priorities. A robust understanding of your business goals is crucial for us to determine how to serve you best. We take the time to ensure you’re not paying extra for something that’s over-engineered.  We want to strike the right balance among the factors that are important to you: effective features and functionality, budget, speed, technology maintenance costs, and more.
                    <Services />
                </ContentBlock>
                <DiagonalBackground>
                    <OpenSource/>
                </DiagonalBackground>
                <ContentBlock
                    title="Idea. Implement. Iterate."
                    vertical={false}
                >
                At Apsis we embrace a process we call “almost agile.” Based on the idea that the best proving ground for new software is real-world users, we focus on rapid development and deployment followed by iteration based on user feedback. Our small project teams of 2-3 developers are organized based on your project needs, and work in small, focused sprints to maximize adaptability.
                    <Button
                        className={buttonStyles.herobutton}
                        to="/services"
                        text="Our Services"
                    />
                </ContentBlock>
                <Clients
                    clientOne={this.props.data.clientOne.childImageSharp.fluid}
                    clientOneAlt="Boku"
                    clientTwo={this.props.data.clientTwo.childImageSharp.fluid}
                    clientTwoAlt="Natera"
                    clientThree={this.props.data.clientThree.childImageSharp.fluid}
                    clientThreeAlt="Columbia University"
                    clientFour={this.props.data.clientFour.childImageSharp.fluid}
                    clientFourAlt="Weber"
                />
                <About />
            </Layout>
        )
    }
}

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

  export const fluidHero = graphql`
    fragment fluidHero on File {
        childImageSharp {
            fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  `;

  export const pageQuery = graphql`
    query {
        clientOne: file(relativePath: { eq: "images/clients/boku.png" }) {
            ...fluidImage
        }
        clientTwo: file(relativePath: { eq: "images/clients/natera.png" }) {
            ...fluidImage
        }
        clientThree: file(relativePath: { eq: "images/clients/columbia.png" }) {
            ...fluidImage
        }
        clientFour: file(relativePath: { eq: "images/clients/weber.png" }) {
            ...fluidImage
        }
        hero: file(relativePath: { eq: "images/hero/shuttle_desktop.jpg" }) {
            ...fluidHero
        }
    }
  `