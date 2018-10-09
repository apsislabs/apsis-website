import React from "react"
import heroStyles from "../styles/components/hero.module.scss"

export default props => (
    <div className={heroStyles.hero}>
        {props.children}
    </div>
)