import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

export default () => (
  <Layout>
    <Helmet title="Work With Us | Apsis Labs" />
    <Navbar
      blue={true}
    />
    <Header
      title="404"
    >
      <h3>Not sure what you're looking for, but it isn't here.</h3>
    </Header>
  </Layout>
)