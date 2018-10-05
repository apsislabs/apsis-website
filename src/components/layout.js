import React from "react"
import Container from "./container"
import Navbar from "./navbar"
import Footer from "./footer"

  export default props => (
    <Container>
      <Navbar />
        {props.children}
      <Footer />
    </Container>
  )
