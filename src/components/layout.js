import React from "react"
import Container from "./container"
import Navbar from "./navbar"

  export default props => (
    <Container>
      <Navbar />
      {props.children}
    </Container>
  )