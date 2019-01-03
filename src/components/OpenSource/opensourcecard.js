import React from "react";
import opensourcecardStyles from "../../styles/components/opensourcecard.module.scss";

export default props => (
  <a href={props.url} target="_blank" rel="noopener noreferrer">
    <div className={opensourcecardStyles.card}>
      <div className={opensourcecardStyles.card__icon}>
        <i className={`${props.icon} ${props.hover}`} />
      </div>

      <div className={opensourcecardStyles.card__content}>
        <h4 className={opensourcecardStyles.card__title}>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  </a>
);
