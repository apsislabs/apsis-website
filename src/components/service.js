import React from "react"
import Button from './button';
import serviceStyles from "./service.module.css"

export default props => (
    <div className={serviceStyles.service}>  
        <div className={serviceStyles.header}>
            <i class={props.icon}></i>
            {props.title}
        </div>
        <div>{props.children}</div>
    </div>
)