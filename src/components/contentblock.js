import React from "react";
import contentBlockStyles from "../styles/components/contentblock.module.scss";

export default props => (
  <div className={contentBlockStyles.contentBlock}>
    <div className={contentBlockStyles.contentBlock__header}>
      <h2 className={contentBlockStyles.contentBlock__title}>{props.title}</h2>
    </div>
    <div className={contentBlockStyles.contentBlock__content}>
      {props.children}
    </div>
  </div>
);
