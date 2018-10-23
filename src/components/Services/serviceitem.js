import React from "react"
import serviceStyles from "../../styles/components/servicelist.module.scss"

export default props => (
    <div className={serviceStyles.serviceCard}>  
        <div className={serviceStyles.serviceCard__header}>
            <i className={props.icon}></i>
            {props.title}
        </div>
        <div>{props.children}</div>
    </div>
)