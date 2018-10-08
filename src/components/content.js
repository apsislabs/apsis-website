import React from "react"
import contentStyles from "../styles/components/content.module.scss"

export default props => (
    <div className={contentStyles.content}>  
        <h2>{props.title}</h2>

        <div className={contentStyles.contentTextContainer}>
            <div className={contentStyles.contentText}>{props.text}</div>
            <div className={contentStyles.contentChildren}>{props.children}</div>
        </div>
    </div>
)