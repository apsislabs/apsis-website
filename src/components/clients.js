import _ from "lodash";
import React from "react";
import clientStyles from "../styles/components/clients.module.scss";

export default ({ clients }) => (
  <div className={clientStyles.clients}>
    {_.map(clients, (c, i) => (
      <a href={c.url} target="_blank" rel="noopener noreferrer" key={i}>
        <img
          src={c.fluid.src}
          alt={c.alt}
          className={clientStyles.clients__logo}
        />
      </a>
    ))}
  </div>
);
