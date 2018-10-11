import React from "react"
import clientStyles from "../styles/components/clients.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={clientStyles.clientsContainer}>  
      <Img
        fluid={props.clientOne}
        alt={props.clientOneAlt}
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientTwo}
        alt={props.clientTwoAlt}
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientThree}
        alt={props.clientThreeAlt}
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientFour}
        alt={props.clientFourAlt}
        className={clientStyles.clientsImg}
      />
    </div>
)
  