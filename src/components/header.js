import React from "react";
import headerStyles from "../styles/components/header.module.scss";

export default props => (
  <div className={headerStyles.header}>
    <h1>{props.title}</h1>
    {props.children}
  </div>
);
