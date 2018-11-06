import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import navbarStyles from "../styles/components/navbar.module.scss"
import buttonStyles from "../styles/components/button.module.scss"
import Button from 'gatsby-link';
import Img from "gatsby-image"
import Headroom from "react-headroom"
import { Location } from '@reach/router';

const ListLink = props => (
    <li className={navbarStyles.listLinkItem}>
      <Link activeClassName={navbarStyles.active} to={props.to}>{props.children}</Link>
    </li>
)

const Loc = () => (
    <Location>
        {({ location }) => (location.pathname !== "/" && <Link to="/">Home</Link>)}
    </Location>
)

const shortBlueButton = `${buttonStyles.button__blue} ${buttonStyles.button__short}`
const blueNav = `${navbarStyles.navbar__blue} ${navbarStyles.navbar}`
const whiteNav = `${navbarStyles.navbar__white} ${navbarStyles.navbar}`


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {navBlue: this.props.blue}
    }

    render(){
        return(
            <StaticQuery
                query={graphql`
                query apsisLogoQuery {
                    apsisWhiteLogo: file(relativePath: { eq: "images/logos/apsis_white.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    apsisBlueLogo: file(relativePath: { eq: "images/logos/apsis_blue.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
                `}
                render={data => (
                    <Headroom
                        onUnpin={() => this.setState({navBlue: true})}
                        onPin={() => (document.body.scrollTop === 0 ? this.setState({navBlue: true}) : this.setState({navBlue: !this.props.blue})) }
                    >
                        <nav>
                            <header className={this.state.navBlue ? blueNav : whiteNav}>
                                <Link
                                    to="/"
                                >
                                    <Img
                                        fluid={this.state.navBlue ? data.apsisBlueLogo.childImageSharp.fluid : data.apsisWhiteLogo.childImageSharp.fluid }
                                        alt="Logo"
                                        className={navbarStyles.navbar__icon}
                                    />
                                </Link>
                                <Loc/>
                                <ul className={navbarStyles.navbar__listLink}>
                                    <ListLink to="/services">Our Services</ListLink>
                                    <ListLink to="/team">Our Team</ListLink>
                                    <ListLink to="/portfolio">Our Work</ListLink>
                                    <ListLink to="/blog">Blog</ListLink>
                                    <li className={navbarStyles.listLinkItem}>
                                        <Button className={shortBlueButton} to="/contact">Hire Us</Button>
                                    </li>
                                </ul>
                            </header>
                        </nav>
                    </Headroom>
                )}
            />

        )
    }
}

    export default Navbar