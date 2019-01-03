import React from "react";
import toolStyles from "../styles/components/tools.module.scss";
import Img from "gatsby-image";

export default props => (
  <div className={toolStyles.tool}>
    <div className={toolStyles.tool__image}>
      <h2>Tools We Love</h2>
    </div>
    <a href={props.toolOneUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.toolOne}
        alt={props.toolOneAlt}
        className={toolStyles.tool__image}
        critical={true}
      />
    </a>
    <a href={props.toolTwoUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.toolTwo}
        alt={props.toolTwoAlt}
        className={toolStyles.tool__image}
        critical={true}
      />
    </a>
    <a href={props.toolThreeUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.toolThree}
        alt={props.toolThreeAlt}
        className={toolStyles.tool__image}
        critical={true}
      />
    </a>
    <a href={props.toolFourUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.toolFour}
        alt={props.toolFourAlt}
        className={toolStyles.tool__image}
        critical={true}
      />
    </a>
    <a href={props.toolFiveUrl} target="_blank" rel="noopener noreferrer">
      <Img
        fluid={props.toolFive}
        alt={props.toolFiveAlt}
        className={toolStyles.tool__image}
        critical={true}
      />
    </a>
  </div>
);
