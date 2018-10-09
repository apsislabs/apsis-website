import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import DiagonalBackground from "../components/diagonalbackground"
import OpenSource from "../components/OpenSource"
import ContentBlock from "../components/contentblock"
import Button from '../components/button';
import buttonStyles from "../styles/components/button.module.scss"
import portfolioStyles from "../styles/pages/portfolio.module.scss"
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import HireUsFooter from "../components/hireusfooter"

const PortfolioPage = (props) => (
  <Layout>
    <Hero>
        <div>
            <h1>Building :daily</h1>
            <h3>Rethinking how developers take notes.</h3>
            <span className={buttonStyles.herobuttoncontainer}>
                <Button
                    className={buttonStyles.herobutton}
                    text="Read the Case Study."
                    to="/"
                />
            </span>
        </div>
    </Hero>

    <ContentBlock vertical={true}>
    <Img
        fluid={props.data.laptop.childImageSharp.fluid}
        alt="Laptop"
    />
      <h3>Stratolaunch.com</h3>
       Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
    </ContentBlock>

    <DiagonalBackground>
       <div className={portfolioStyles.container}>
        <Img
            fluid={props.data.cellphone.childImageSharp.fluid}
            alt="Cellphone"
            className={portfolioStyles.image}
        />

            <div className={portfolioStyles.content}>
                <h2>ThinkingBaseball</h2>
                    Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
            </div>
        </div>
    </DiagonalBackground>

    <OpenSource/>

    <HireUsFooter />
</Layout>
)

export default PortfolioPage

export const fluidImage = graphql`
fragment portfolioImages on File {
    childImageSharp {
        fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
        }
    }
}
`;
export const pageQuery = graphql`
query {
    laptop: file(relativePath: { eq: "fillers/laptop.png" }) {
        ...portfolioImages
    }
    cellphone: file(relativePath: { eq: "fillers/cellphone.png" }) {
        ...portfolioImages
    }
}
`