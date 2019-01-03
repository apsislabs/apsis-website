import React, { Fragment } from "react";
import serviceStyles from "../../styles/components/servicelist.module.scss";
import Service from "./serviceitem";

export default () => (
  <Fragment>
    <div className={serviceStyles.service}>
      <Service icon="far fa-fw fa-compass" title="Web Development">
        <ul>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>WordPress</li>
        </ul>
      </Service>

      <Service icon="fas fa-fw fa-mobile-alt" title="Mobile Development">
        <ul>
          <li>React Native</li>
          <li>iOS &amp; Android</li>
          <li>Unity</li>
        </ul>
      </Service>

      <Service icon="fas fa-fw fa-sitemap" title="Operations & Strategy">
        <ul>
          <li>Project Management</li>
          <li>Sysops &amp; Consulting</li>
          <li>HIPAA &amp; Security</li>
        </ul>
      </Service>
    </div>
  </Fragment>
);
