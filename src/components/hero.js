import React from "react";
import heroStyles from "../styles/components/hero.module.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <div className={heroStyles.hero}>
        <div
          className={heroStyles.hero__image}
          style={{ backgroundImage: `url(${this.props.imgSrc})` }}
        >
          <div className={heroStyles.hero__container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
