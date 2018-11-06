import React from "react"
import heroStyles from "../styles/components/hero.module.scss"

export default class Hero extends React.Component {
      render() {
        //   this.props.fixedHeight ? {}
        return (
            <div className={heroStyles.hero_container}>
                <div className={heroStyles.hero} style={{backgroundImage: `url(${this.props.imgSrc})`}} displayname="Hero">
                    <div className={heroStyles.hero__content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}