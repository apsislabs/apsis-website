import React from "react"
import Layout from "../components/layout"
import ContentBlock from "../components/contentblock"
import HireUsFooter from "../components/Footer/hireusfooter"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

export default () => (
  <Layout>
    <Helmet title="Work With Us" />
    <Navbar
      blue={true}
    />
    <ContentBlock vertical={true}>
      <h1>Let’s build something</h1>
      <h3>Got a project? Just wanna talk shop? <br/> We’re always listening.</h3>
    </ContentBlock>
    <ContentBlock vertical={true}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-gqzdImjTtnqulXZYFWGVTPuCt-lbvqt85frJx2c8VfQI1w/viewform?embedded=true" width="640" height="751" frameborder="0" marginheight="0" marginwidth="0" title="Contact Us">Loading...</iframe>
    </ContentBlock>

    <HireUsFooter />
  </Layout>
)