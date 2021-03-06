import React from "react";
import containerStyles from "../styles/components/container.module.scss";

export default ({ children }) => (
  <div className={containerStyles.container}>
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4"
      type="text/javascript"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    {/* <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" /> */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />{" "}
    {children}
  </div>
);
