import React from "react"
import hireusfooterStyles from "../styles/components/hireusfooter.module.scss"
import Button from "./button"
import buttonStyles from "../styles/components/button.module.scss"

export default () => (
  <div className={hireusfooterStyles.container}>
    <h3>Your code is getting cold.</h3>
    <span><Button className={buttonStyles.herobutton} to="/hire" text="Hire Us" /></span>
  </div>
)