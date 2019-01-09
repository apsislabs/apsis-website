import cn from "classnames";
import { graphql, Link, StaticQuery } from "gatsby";
import Button from "gatsby-link";
import React, { Component } from "react";
import buttonStyles from "../styles/components/button.module.scss";
import styles from "../styles/components/navigation.module.scss";
import naviconStyles from "../styles/components/navicon.module.scss";

const NavIcon = ({ open, white, ...props }) => (
  <span
    className={cn(naviconStyles.navicon, {
      [naviconStyles.naviconOpen]: open,
      [naviconStyles.naviconWhite]: white
    })}
    {...props}
  >
    <span className={naviconStyles.navicon__bar} />
  </span>
);

const ListLink = props => (
  <Link
    activeClassName={styles.navbar__linkActive}
    className={styles.navbar__link}
    {...props}
  />
);

const ApsisLogo = ({ blue }) => {
  function render({ whiteImage, blueImage }) {
    const fluid = blue
      ? blueImage.childImageSharp.fluid
      : whiteImage.childImageSharp.fluid;
    return <img className={styles.logo} alt="Logo" src={fluid.src} />;
  }

  return <StaticQuery query={query} render={render} />;
};

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.closeMenu);
  }

  closeMenu() {
    this.toggleMenu(false);
  }

  toggleMenu(open) {
    open = typeof open === "undefined" ? !this.state.open : open;
    this.setState({ open });
  }

  render() {
    const { blue } = this.props;
    const { open } = this.state;

    const buttonClass = cn(
      buttonStyles.button,
      buttonStyles.buttonSmall,
      buttonStyles.buttonPrimary
    );

    return (
      <nav
        className={cn(styles.navbar, {
          [styles.navbarOpen]: open,
          [styles.navbarBlue]: blue
        })}
      >
        <header className={styles.navbar__header}>
          <Link to="/">
            <ApsisLogo blue={blue && !open} />
          </Link>

          <button
            onClick={() => this.toggleMenu()}
            className={styles.navbar__toggle}
          >
            <NavIcon open={open} white={open || !blue} />
            <span className="sr-only">Toggle Nav</span>
          </button>
        </header>

        <div className={styles.navbar__collapse}>
          <div className={styles.navbar__links}>
            <ListLink to="/services">Our Services</ListLink>
            <ListLink to="/team">Our Team</ListLink>
            <ListLink to="/portfolio">Our Work</ListLink>
          </div>

          <Button to="/contact" className={buttonClass}>
            Hire Us
          </Button>
        </div>
      </nav>
    );
  }
}

const query = graphql`
  query logoQuery {
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
  }
`;

export default Navigation;
