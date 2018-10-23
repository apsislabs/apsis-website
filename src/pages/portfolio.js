import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import DiagonalBackground from "../components/diagonalbackground"
import OpenSource from "../components/OpenSource/OpenSource"
import ContentBlock from "../components/contentblock"
import Button from 'gatsby-link';
import buttonStyles from "../styles/components/button.module.scss"
import portfolioStyles from "../styles/pages/portfolio.module.scss"
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
import HireUsFooter from "../components/Footer/hireusfooter"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";
import {Collapse} from 'react-collapse';

const blueWideButtonClasses = `${buttonStyles.button__blue} ${buttonStyles.button__wide}`;

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
        this.toggleExpand = this.toggleExpand.bind(this);
    }
    toggleExpand() {
        this.setState({ expanded: !this.state.expanded, });
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        laptop: file(relativePath: { eq: "images/fillers/laptop.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 140) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        cellphone: file(relativePath: { eq: "images/fillers/cellphone.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 140) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        daily: file(relativePath: { eq: "images/fillers/daily.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        portfolioHero: file(relativePath: { eq: "images/hero/space.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 1600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <Layout>
                        <Helmet title="Portfolio" />
                        <Navbar
                            blue={false}
                        />
                        <Hero
                            displayname="Hero"
                            img={data.portfolioHero.childImageSharp.fluid}
                        >
                            <div>
                                <h1>Building :daily</h1>
                                <h3>Rethinking how developers take notes.</h3>
                                <span>
                                    <a href="#"
                                        className={blueWideButtonClasses}
                                        onClick={this.toggleExpand}
                                    >
                                        Read the Case Study.
                                    </a>
                                </span>
                            </div>
                        </Hero>

                        <Collapse
                            isOpened={this.state.expanded}
                            className={portfolioStyles.expanded}
                        >
                            <ContentBlock
                                vertical={true}
                            >
                                <Img
                                    fluid={data.daily.childImageSharp.fluid}
                                    alt="Daily, a to do app for developers"
                                />
                                <h2>:daily</h2>
                                    Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
                            </ContentBlock>
                        </Collapse>
                        <ContentBlock vertical={true}>
                        <Img
                            fluid={data.laptop.childImageSharp.fluid}
                            alt="Laptop"
                        />
                        <h2>Stratolaunch.com</h2>
                        Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
                        </ContentBlock>

                        <DiagonalBackground>
                        <div className={portfolioStyles.container}>
                            <Img
                                fluid={data.cellphone.childImageSharp.fluid}
                                alt="Cellphone"
                                className={portfolioStyles.image}
                            />

                                <div className={portfolioStyles.content}>
                                    <h2>ThinkingBaseball</h2>
                                        Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
                                </div>
                            </div>
                        </DiagonalBackground>
                        <OpenSource />
                        <HireUsFooter />
                    </Layout>
                )}
            />
        )
    }
}

export default PortfolioPage