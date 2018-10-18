import React, {Component} from "react"
import Container from "./container"
import Footer from "./footer"

class Layout extends Component {
  render() {
    return (
      <Container>
          {this.props.children}
        <Footer />
      </Container>
    )
  }
}

export default Layout
