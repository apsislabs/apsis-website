import React from "react";
import diagonalbackgroundStyles from "../styles/components/diagonalbackground.module.scss";

export default props => (
  <div className={diagonalbackgroundStyles.diagonal}>
    <div className={diagonalbackgroundStyles.diagonal__container}>
      {props.children}
    </div>
  </div>
);
