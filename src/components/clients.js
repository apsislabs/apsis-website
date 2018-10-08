import React from "react"
import clientStyles from "../styles/components/clients.module.scss"
import Img from "gatsby-image"

export default props => (
    <div className={clientStyles.clientsContainer}>  
      <Img
        fluid={props.clientOne}
        alt="Boku"
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientTwo}
        alt="Weber"
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientThree}
        alt="Columbia University"
        className={clientStyles.clientsImg}
      />
      <Img
        fluid={props.clientFour}
        alt="Natera"
        className={clientStyles.clientsImg}
      />
    </div>
)
  