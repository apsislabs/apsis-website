import React from "react"
import contentBlockStyles from "../styles/components/contentblock.module.scss"

export default props => (
    <div className={ props.vertical ? contentBlockStyles.verticalContentBlock : contentBlockStyles.horizontalContentBlock }>
        <div className={ props.vertical ? contentBlockStyles.verticalContentBlock__title : contentBlockStyles.horizontalContentBlock__title }>
            <h2>{props.title}</h2>
        </div>
        <div className={contentBlockStyles.contentBlock__content}>
            <div className={contentBlockStyles.contentBlock__children}>{props.children}</div>
        </div>
    </div>
)