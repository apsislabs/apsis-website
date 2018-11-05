import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import Img from "gatsby-image"

export default class Hero extends React.Component {
      render() {
        return (
            <div className={heroStyles.hero} displayname="Hero">
                <div className={heroStyles.hero__overlay}>
                    { this.props.img ? <Img
                        fluid={this.props.img}
                        className={heroStyles.hero__image}
                    /> : null }
                </div>
                <div className={heroStyles.hero__content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}