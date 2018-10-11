import React from "react"
import contentBlockStyles from "../styles/components/contentblock.module.scss"

export default props => (
    <div className={ props.vertical ? contentBlockStyles.verticalContent :  contentBlockStyles.horizontalContent }>  
        <div>
            <h2>{props.title}</h2>
        </div>
        <div className={contentBlockStyles.contentTextContainerContent}>
            <div className={contentBlockStyles.contentText}>{props.children}</div>
        </div>
    </div>
)