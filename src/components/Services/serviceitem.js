import React from "react";
import serviceStyles from "../../styles/components/servicelist.module.scss";
import cn from "classnames";

export default props => (
  <div className={serviceStyles.service__card}>
    <div className={serviceStyles.service__header}>
      <i className={cn(props.icon, serviceStyles.service__icon)} />
      {props.title}
    </div>

    {props.children}
  </div>
);
