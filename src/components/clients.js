import React from "react"
import clientStyles from "../styles/components/clients.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={clientStyles.client}>
      <a href={props.clientOneUrl} target="_blank" rel="noopener noreferrer">
        <Img
          fluid={props.clientOne}
          alt={props.clientOneAlt}
          className={clientStyles.client__image}
          critical={true}
        />
      </a>
      <a href={props.clientTwoUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.clientTwo}
        alt={props.clientTwoAlt}
        className={clientStyles.client__image}
        critical={true}
      />
      </a>
      <a href={props.clientThreeUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.clientThree}
        alt={props.clientThreeAlt}
        className={clientStyles.client__image}
        critical={true}
      />
      </a>
      <a href={props.clientFourUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.clientFour}
        alt={props.clientFourAlt}
        className={clientStyles.client__image}
        critical={true}
      />
      </a>
    </div>
)
  