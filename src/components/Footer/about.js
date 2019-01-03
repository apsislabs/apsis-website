import React from "react";
import aboutStyles from "../../styles/components/about.module.scss";
import Img from "gatsby-image";

export default props => (
  <div className={aboutStyles.about}>
    <Img
      fluid={props.fluid}
      alt={props.alt}
      className={aboutStyles.about__image}
    />
    <div className={aboutStyles.about__content}>
      <h2>About Us</h2>
      <div className={aboutStyles.about__text}>
        We are high-efficiency, low bullshit. If we aren’t a good fit for your
        project, we will let you know upfront. We also believe in working
        sustainably, and we walk the walk with required vacations and the
        ability to work remotely. We are happy engineers, which leads to happy
        code.
      </div>
    </div>
  </div>
);
