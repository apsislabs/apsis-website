import React from "react"
import Button from './button';
import contentStyles from "./content.module.css"
import buttonStyles from "./button.module.css"

export default props => (
    <div className={contentStyles.content}>  
        <h2>{props.title}</h2>

        <div className={contentStyles.contentTextContainer}>
            <div className={contentStyles.contentText}>{props.text}</div>
            <div className={contentStyles.contentChildren}>{props.children}</div>
            <Button
                className={buttonStyles.herobutton}
                to="/services"
                text="Our Services"
            />
        </div>
    </div>
)