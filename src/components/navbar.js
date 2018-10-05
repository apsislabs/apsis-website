import React from "react"

import { Link } from "gatsby"
import navbarStyles from "./navbar.module.css"
import buttonStyles from "./button.module.css"
import Button from './button';

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default props => (
    <header className={navbarStyles.navbar}>
        <span className={navbarStyles.icon} />
        <Link to="/">
            Apsis Labs
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/services">Services</ListLink>
            <ListLink to="/team">Team</ListLink>
            <ListLink to="/portfolio">Portfolio</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <li style={{ display: `inline-block`, marginRight: `1rem` }}>
                <Button className={buttonStyles.navbutton} to="/hire" text="Hire Us."/>
            </li>
        </ul>
    </header>
)