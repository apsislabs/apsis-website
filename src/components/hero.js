import React from "react"
import heroStyles from "./hero.module.css"
import Button from './button.js';
import buttonStyles from "./button.module.css"


export default props => (
    <div className={heroStyles.hero}>  
      <h1>{props.headerText}</h1>
      <h3>{props.subtitle}</h3>
      <span className={buttonStyles.herobuttoncontainer}>
        <Button
            className={buttonStyles.herobutton}
            text="Hire Us."
            to="/hire"
        />
        <Button
            className={buttonStyles.herobutton}
            text="Our Process."
            to="/services"
        />
      </span>
    </div>
)