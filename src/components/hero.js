import React from "react"
import heroStyles from "../styles/components/hero.module.scss"
import Button from './button';
import buttonStyles from "../styles/components/button.module.scss"

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