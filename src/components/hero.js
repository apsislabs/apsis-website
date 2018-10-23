import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={heroStyles.hero} displayname="Hero">
        <div className={heroStyles.hero__overlay}>
            { props.img ? <Img
                fluid={props.img}
                className={heroStyles.hero__image}
            /> : null }
        </div>
        <div className={heroStyles.hero__content}>
            {props.children}
        </div>
    </div>
)