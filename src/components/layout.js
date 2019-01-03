import React, { Component } from "react";
import Container from "./container";
import Footer from "./Footer/footer";
import favicon from "../images/favicons/favicon.ico";
import Helmet from "react-helmet";
class Layout extends Component {
  render() {
    return (
      <Container>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <Helmet
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
          ]}
        />
        {this.props.children}
        <Footer />
      </Container>
    );
  }
}

export default Layout;
