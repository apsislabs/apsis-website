import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import DiagonalBackground from "../components/diagonalbackground"
import OpenSource from "../components/OpenSource/OpenSource"
import ContentBlock from "../components/contentblock"
import buttonStyles from "../styles/components/button.module.scss"
import portfolioStyles from "../styles/pages/portfolio.module.scss"
import Img from "gatsby-image"
import { StaticQuery, graphql } from 'gatsby'
import HireUsFooter from "../components/Footer/hireusfooter"
import Navigation from "../components/navigation"
import Helmet from "react-helmet";
import {Animated} from "react-animated-css";
// import { Player } from 'video-react';
import Button from 'gatsby-link'

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
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        strato: file(relativePath: { eq: "images/portfolio/stratolaunch/strato_screens.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        tb: file(relativePath: { eq: "images/portfolio/thinkingbaseball/iphone_frame.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    src
                                }
                            }
                        }
                        tbImg: file(relativePath: { eq: "images/portfolio/thinkingbaseball/tb_home.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    src
                                }
                            }
                        }
                        tbVideo: file(relativePath: { eq: "images/portfolio/thinkingbaseball/tb_bg_video.mp4" }) {
                            publicURL
                        }
                        dolby: file(relativePath: { eq: "images/portfolio/dolby/dolby_screens.png" }) {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
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
                        portfolioHero: file(relativePath: { eq: "images/hero/hero2.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 1400) {
                                    src
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <Layout>
                        <Helmet title="Portfolio | Apsis Labs" />
                        <Navigation blue={false} />
                        <Hero
                            displayname="Hero"
                            fixedHeight={!this.state.expanded}
                            imgSrc={data.portfolioHero.childImageSharp.fluid.src}
                        >
                            <Animated animationIn="fadeInUp">
                                <h1>Building Your Applications</h1>
                                <h3>From the cloud to your phone.</h3>
                            </Animated>
                            <Button
                                className={blueWideButtonClasses}
                                to="/process"
                            >
                                See Our Process
                            </Button>
                            {/* <Animated animationIn="fadeInUp">
                                <h1>Building :daily</h1>
                                <h3>Rethinking how developers take notes.</h3>
                            </Animated>
                            <div
                                className={blueWideButtonClasses}
                                onClick={this.toggleExpand}
                            >
                                Read the Case Study.
                            </div> */}


                            {/* <Collapse
                                isOpened={this.state.expanded}
                                className={heroStyles.hero__expanded}
                            >
                                <ContentBlock
                                    vertical={true}
                                >
                                    <div className={portfolioStyles.daily}>
                                        <Img
                                            className={portfolioStyles.daily__image}
                                            fluid={data.daily.childImageSharp.fluid}
                                            alt="Daily, a to do app for developers"
                                        />
                                        <h2>:daily</h2>
                                            Sed tincidunt venenatis nisi et iaculis. Nunc urna lectus, rutrum sit amet lorem eu, luctus pharetra est. Curabitur a tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras a efficitur nibh. Nulla eu dolor eu ex porttitor tincidunt. Aliquam porta euismod nisl, eget iaculis magna mollis eget.
                                    </div>
                                </ContentBlock>
                            </Collapse> */}
                        </Hero>
                        <ContentBlock vertical={true}>
                            <div className={portfolioStyles.verticalContainer}>
                                <Img
                                    fluid={data.strato.childImageSharp.fluid}
                                    alt="Stratolaunch Project"
                                />
                                <h2>Stratolaunch.com</h2>
                                <p>
                                    <a href="https://www.stratolaunch.com/" target="_blank" rel="noopener noreferrer">Stratolaunch.com</a> is the primary home page for Stratolaunch, the Seattle-based space launch company founded by Paul Allen.
                                </p>
                            </div>
                        </ContentBlock>

                        <DiagonalBackground>
                            <div className={portfolioStyles.container}>
                                <div
                                    className={portfolioStyles.container__image}
                                    style={{backgroundImage: `url(${data.tb.childImageSharp.fluid.src})`}}
                                >
                                    <img src={data.tbImg.childImageSharp.fluid.src} />
                                    {/* <Player
                                        className={portfolioStyles.video}
                                        preload={'auto'}
                                        autoPlay={true}
                                        muted={true}
                                        controls={false}
                                    >
                                        <source src={data.tbVideo.publicURL} />
                                    </Player> */}
                                </div>
                                <div className={portfolioStyles.content}>
                                    <h2>ThinkingBaseball {data.tbVideo.publicUrl}</h2>
                                    <p>
                                        <a href="https://www.thinkingbaseball.com/" target="_blank" rel="noopener noreferrer">Thinking Baseball</a> is a mobile app for iOS and Android designed to teach young players to master the mental side of baseball.

                                        The application was built in three parts: a shared C# codebase for the game experience; native frontends for iOS and Android implemented in C# using the Xamarin SDK; and a Ruby on Rails web service for user authentication, permissions, e-commerce transactions, and licensing.

                                        The mobile apps are available for free on the <a href="https://itunes.apple.com/us/app/thinkingbaseball/id1221028028" target="_blank" rel="noopener noreferrer">Apple App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.thinkingbaseball.app" target="_blank" rel="noopener noreferrer">Google Play Store</a>.
                                    </p>
                                </div>
                            </div>
                        </DiagonalBackground>
                        <ContentBlock vertical={true}>

                            <div className={portfolioStyles.verticalContainer}>
                                <Img
                                    fluid={data.dolby.childImageSharp.fluid}
                                    alt="Signal"
                                />
                                <h2>Signal</h2>
                                <p>
                                    <a href="https://hub.dolby.com/" target="_blank" rel="noopener noreferrer">Signal</a> is the narrative hub of Dolby's technology brand. Built on WordPress, the custom website uses a slew of cutting-edge web technologies.

                                    Using our own open-source set of plugins, the Signal site also shows the flexibility and power of WordPress as a CMS.
                                </p>
                            </div>
                        </ContentBlock>
                        <OpenSource />
                        <HireUsFooter />
                    </Layout>
                )}
            />
        )
    }
}

export default PortfolioPage