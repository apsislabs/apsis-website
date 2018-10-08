import React from "react"
import serviceStyles from "../styles/components/service.module.scss"

export default props => (
    <div className={serviceStyles.service}>  
        <div className={serviceStyles.header}>
            <i className={props.icon}></i>
            {props.title}
        </div>
        <div>{props.children}</div>
    </div>
)