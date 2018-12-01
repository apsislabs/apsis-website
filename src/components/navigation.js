import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styles from "../styles/components/navigation.module.scss";
import buttonStyles from "../styles/components/button.module.scss";
import Button from 'gatsby-link';
import Img from "gatsby-image";
import Headroom from "react-headroom";

const query = graphql`query logoQuery {
    whiteImage: file(relativePath: { eq: "images/logos/apsis_white.png" }) {
        childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    blueImage: file(relativePath: { eq: "images/logos/apsis_blue.png" }) {
        childImageSharp {
            fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}`;

const ListLink = props => (
    <li>
        <Link activeClassName={styles.active} className={styles.link} {...props} />
    </li>
)

function ApsisLogo({ blue }) {
    function render({ whiteImage, blueImage }) {
        const fluid = blue ? blueImage.childImageSharp.fluid : whiteImage.childImageSharp.fluid;
        return <Img className={styles.logo} alt="Logo" fluid={fluid} />;
    }
    return <StaticQuery query={query} render={render} />;
};

function cl(...classes) {
    return classes.filter(x => x).join(' ');
}

class Navigation extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            animate: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ open: !this.state.open });
    }

    shouldAnimateHandler(animate) {
        return () => setTimeout(() => this.setState({ animate }), 0);
    }

    render() {
        const { blue } = this.props,
            { open, animate } = this.state;
        return (
            <div className={cl(styles.navigation, animate ? styles.animate : null, blue ? styles.blue : styles.white, open && styles.solid)}>
                <Headroom
                        disableInlineStyles={true}
                        onPin={this.shouldAnimateHandler(true)}
                        onUnpin={this.shouldAnimateHandler(true)}
                        onUnfix={this.shouldAnimateHandler(false)}>
                    <header>
                        <nav className={styles.nav}>
                            <Link to="/"><ApsisLogo blue={blue} /></Link>
                            <i onClick={() => this.toggleMenu()} className="fas fa-bars" />
                            <ul className={cl(styles.navLinks , !open && styles.closed)}>
                                <ListLink to="/services">Our Services</ListLink>
                                <ListLink to="/team">Our Team</ListLink>
                                <ListLink to="/portfolio">Our Work</ListLink>
                                <ListLink to="/blog">Blog</ListLink>
                                <li>
                                    <Button to="/contact"
                                            className={cl(blue ? buttonStyles.button__blue : buttonStyles.button__white, buttonStyles.button__short)}>
                                        Hire Us
                                    </Button></li>
                            </ul>
                        </nav>
                    </header>
                </Headroom>
            </div>
        );
    }
}

export default Navigation;