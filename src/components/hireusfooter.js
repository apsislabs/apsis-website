import React from "react"
import hireusfooterStyles from "../styles/components/hireusfooter.module.scss"
import Button from 'gatsby-link';
import buttonStyles from "../styles/components/button.module.scss"

const grayShortButtonClasses = `${buttonStyles.gray} ${buttonStyles.short}`;

export default () => (
  <div className={hireusfooterStyles.container}>
    <h3>Your code is getting cold.</h3>
    <span><Button className={grayShortButtonClasses} to="/hire">Hire Us</Button></span>
  </div>
)