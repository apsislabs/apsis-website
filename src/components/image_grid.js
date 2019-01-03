import _ from "lodash";
import React from "react";
import styles from "../styles/components/imagegrid.module.scss";

export default ({ images, title }) => (
  <div className={styles.image_grid}>
    {title && <h3 className={styles.image_grid__title}>{title}</h3>}

    <div className={styles.image_grid__images}>
      {_.map(images, (c, i) => (
        <a href={c.url} target="_blank" rel="noopener noreferrer" key={i}>
          <img
            src={c.fluid.src}
            alt={c.alt}
            className={styles.image_grid__image}
          />
        </a>
      ))}
    </div>
  </div>
);
