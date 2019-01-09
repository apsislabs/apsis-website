import React from "react";
import styles from "../styles/components/IconBlock.module.scss";
import cn from "classnames";
import { Animated } from "react-animated-css";
import { DisplayOnVisible } from "./DisplayOnVisible";

export const IconBlock = ({
  delay = 0,
  children,
  icon,
  title,
  dir = "left",
  ...props
}) => {
  const introAnimation = dir === "left" ? "fadeInRight" : "fadeInLeft";
  const outroAnimation = dir === "left" ? "fadeInLeft" : "fadeInRight";

  return (
    <DisplayOnVisible>
      <Animated
        animationInDelay={delay}
        animationIn={introAnimation}
        animationOut={outroAnimation}
      >
        <div
          className={cn(styles.icon_block, {
            [styles.icon_blockLeft]: dir === "left",
            [styles.icon_blockRight]: dir === "right"
          })}
          {...props}
        >
          <div className={styles.icon_block__icon}>
            <Animated animationIn={"pulse"} className="infinite">
              <span className={`fas fa-${icon} fa-5x fa-fw`} />
            </Animated>
          </div>
          <div className={styles.icon_block__content}>
            {title && <h5 className={styles.icon_block__title}>{title}</h5>}
            {children}
          </div>
        </div>
      </Animated>
    </DisplayOnVisible>
  );
};
