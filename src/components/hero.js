import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={heroStyles.hero}>
        <div className={heroStyles.overlay}>
            <Img
                fluid={props.img}
                className={heroStyles.image}
            />
        </div>
        <div className={heroStyles.content}>
            {props.children}
        </div>
    </div>
)