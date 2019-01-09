import React from "react";
import styles from "../../styles/components/Banner.module.scss";
import Button from "gatsby-link";
import buttonStyles from "../../styles/components/button.module.scss";
import cn from "classnames";

const phrases = [
  "Your code is getting cold.",
  "Your code is getting colder.",
  "Your code is so cold now."
];

function rand(items) {
  return items[~~(items.length * Math.random())];
}

export const Banner = () => (
  <div className={styles.banner}>
    <span className={styles.banner__text}>{rand(phrases)}</span>
    <Button
      className={cn(buttonStyles.button, buttonStyles.buttonSmall)}
      to="/contact"
    >
      Hire Us
    </Button>
  </div>
);

export default Banner;
