import React from "react";
import contentBlockStyles from "../styles/components/contentblock.module.scss";
import { DisplayOnVisible } from "./DisplayOnVisible";
import { Animated } from "react-animated-css";

export default props => (
  <DisplayOnVisible>
    <Animated animationIn="fadeIn">
      <div className={contentBlockStyles.contentBlock}>
        <div className={contentBlockStyles.contentBlock__header}>
          <h3 className={contentBlockStyles.contentBlock__title}>
            {props.title}
          </h3>
        </div>
        <div className={contentBlockStyles.contentBlock__content}>
          {props.children}
        </div>
      </div>
    </Animated>
  </DisplayOnVisible>
);
