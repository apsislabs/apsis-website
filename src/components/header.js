import React from "react"
import headerStyles from "../styles/components/header.module.scss"

export default props => 
    <div className={headerStyles.header}>
        {props.children}
    </div>