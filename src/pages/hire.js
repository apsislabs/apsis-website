import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import HireUsFooter from "../components/Footer/hireusfooter"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";
import hireStyles from "../styles/pages/hire.module.scss"
import buttonStyles from "../styles/components/button.module.scss"
import Button from "gatsby-link"
const blueWideButtonClasses = `${buttonStyles.button__blue} ${buttonStyles.button__wide}`;

export default () => (
  <Layout>
    <Helmet title="Work With Us" />
    <Navbar
      blue={true}
    />
    <Header>
      <h1>Let’s build something</h1>
      <h3>Got a project? Just wanna talk shop? <br/> We’re always listening.</h3>
      <center>
        <Button
          className={blueWideButtonClasses}
          to="/process"
        >
          Are We A Fit?
        </Button>
      </center>
      <br/>
    </Header>
    
    <iframe
      className={hireStyles.form}
      src="https://docs.google.com/forms/d/e/1FAIpQLSd-gqzdImjTtnqulXZYFWGVTPuCt-lbvqt85frJx2c8VfQI1w/viewform?embedded=true"
      title="Contact Us">Loading...
    </iframe>
    <HireUsFooter />
  </Layout>
)