import React from "react"
import clientStyles from "../styles/components/clients.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={clientStyles.client}>
      <Img
        fluid={props.clientOne}
        alt={props.clientOneAlt}
        className={clientStyles.client__image}
      />
      <Img
        fluid={props.clientTwo}
        alt={props.clientTwoAlt}
        className={clientStyles.client__image}
      />
      <Img
        fluid={props.clientThree}
        alt={props.clientThreeAlt}
        className={clientStyles.client__image}
      />
      <Img
        fluid={props.clientFour}
        alt={props.clientFourAlt}
        className={clientStyles.client__image}
      />
    </div>
)
  