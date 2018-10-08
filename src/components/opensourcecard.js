import React from "react"
import opensourcecardStyles from "../styles/components/opensourcecard.module.scss"

export default props => (
    <div className={opensourcecardStyles.container}>  
        <div className={opensourcecardStyles.icon}>
            <i className={props.icon}></i>
        </div>
        <div className={opensourcecardStyles.content}>
            <div><strong>{props.title}</strong></div>
            <span>{props.text}</span>
        </div>
    </div>
)