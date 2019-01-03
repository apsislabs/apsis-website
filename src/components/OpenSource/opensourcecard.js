import React from "react";
import opensourcecardStyles from "../../styles/components/opensourcecard.module.scss";

export default props => (
  <a href={props.url} target="_blank" rel="noopener noreferrer">
    <div className={opensourcecardStyles.card}>
      <div className={opensourcecardStyles.card__icon}>
        <i className={`${props.icon} ${props.hover}`} />
      </div>
      <div className={opensourcecardStyles.content}>
        <div>
          <strong>{props.title}</strong>
        </div>
        <span>{props.text}</span>
      </div>
    </div>
  </a>
);
