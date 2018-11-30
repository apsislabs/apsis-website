import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import navbarStyles from "../styles/components/navbar.module.scss"
import buttonStyles from "../styles/components/button.module.scss"
import Button from 'gatsby-link';
import Img from "gatsby-image"
import Headroom from "react-headroom"
// import { Location } from '@reach/router';

const ListLink = props => (
    <li className={navbarStyles[`navbar__listLinkItem`]}>
      <Link activeClassName={navbarStyles.active} to={props.to}>{props.children}</Link>
    </li>
)

// const Loc = () => (
//     <Location>
//         {({ location }) => (location.pathname !== "/" && <Link to="/">Home</Link>)}
//     </Location>
// )

const shortBlueHireButton = `${buttonStyles.button__blue} ${buttonStyles.button__short} ${navbarStyles.navbar__button}`
const blueNav = `${navbarStyles.navbar__blue} ${navbarStyles.navbar}`
const whiteNav = `${navbarStyles.navbar__white} ${navbarStyles.navbar}`


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBlue: this.props.blue,
            dropDown: true,
            atTop: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.atTop = this.atTop.bind(this);
        this.notAtTop = this.notAtTop.bind(this);
    }

    toggleMenu(){
        this.setState({dropDown: !this.state.dropDown});
    }

    atTop() {
        this.setState({ atTop: true });
    }

    notAtTop() {
        // This egregious hack makes sure the not-at-top class gets added *after* the item is hidden
        setTimeout(() => {
            this.setState({ atTop: false });
        }, 0);
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
                    <div className={this.state.atTop ? 'at-top' : 'not-at-top' }>
                        <Headroom disableInlineStyles={true}
                                onPin={this.notAtTop}
                                onUnpin={this.notAtTop}
                                onUnfix={this.atTop}>
                            <nav>
                                <header className={this.state.navBlue ? blueNav : whiteNav}>
                                    <Link
                                        to="/"
                                        className={navbarStyles.navbar__homeLink}
                                    >
                                        <Img
                                            fluid={this.state.navBlue ? data.apsisBlueLogo.childImageSharp.fluid : data.apsisWhiteLogo.childImageSharp.fluid }
                                            alt="Logo"
                                            className={navbarStyles.navbar__icon}
                                        />
                                    </Link>
                                    <i onClick={() => this.toggleMenu()} className="fas fa-bars"/>
                                    <ul className={navbarStyles.navbar__listLink}>
                                        <ListLink to="/services">Our Services</ListLink>
                                        <ListLink to="/team">Our Team</ListLink>
                                        <ListLink to="/portfolio">Our Work</ListLink>
                                        <ListLink to="/blog">Blog</ListLink>
                                        <li>
                                            <Button className={shortBlueHireButton} to="/contact">Hire Us</Button>
                                        </li>
                                    </ul>
                                </header>
                            </nav>
                        </Headroom>
                    </div>
                )}
            />
        )
    }
}

    export default Navbar