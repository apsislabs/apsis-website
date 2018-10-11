import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import navbarStyles from "../styles/components/navbar.module.scss"
import buttonStyles from "../styles/components/button.module.scss"
import Button from 'gatsby-link';
import Img from "gatsby-image"

const ListLink = props => (
    <li className={navbarStyles.listLinkItem}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

const shortBlueButton = `${buttonStyles.blue} ${buttonStyles.short}`;

export default props => (
    <StaticQuery
    query={graphql`
      query apsisLogoQuery {
        apsisLogo: file(relativePath: { eq: "images/logos/apsis_white.png" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    `}
    render={data => (
        <header className={navbarStyles.navbar}>

        <Link
            to="/"
            className={navbarStyles.homeLink}
        >
            <Img
                fluid={data.apsisLogo.childImageSharp.fluid}
                alt="Logo"
                className={navbarStyles.icon}
            />
        </Link>
        <ul className={navbarStyles.listLink}>
            <ListLink to="/services">Services</ListLink>
            <ListLink to="/team">Team</ListLink>
            <ListLink to="/portfolio">Portfolio</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <li className={navbarStyles.listLinkItem}>
                <Button className={shortBlueButton} to="/hire">Hire Us</Button>
            </li>
        </ul>
    </header>
    )}
  />

)
