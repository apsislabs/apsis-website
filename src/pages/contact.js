import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import ContentBlock from "../components/contentblock"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";
import contactStyles from "../styles/pages/contact.module.scss"
import buttonStyles from "../styles/components/button.module.scss"
import Link from "gatsby-link"

const shortWideButton = `${buttonStyles.button__blue} ${buttonStyles.button__wide}`
export default () => (
  <Layout>
    <Helmet title="Work With Us | Apsis Labs" />
    <Navbar
      blue={true}
    />
    <Header
      title="Let’s build something"
    >
      <h3>Got a project? Just wanna talk shop? <br/> We’re always listening.</h3>
    </Header>
    <ContentBlock vertical={true}>
    <form className={contactStyles.form} method="POST" action="https://a17eeo6v24.execute-api.us-west-2.amazonaws.com/contactformapi">
        <span>
          <input type="text" name="name"  placeholder="Your Name" className={contactStyles.form__input}/>
        </span>
        <span>
          <input type="text" name="email" placeholder="Email Address" className={contactStyles.form__input}/>
        </span>
        <span>
          <textarea rows="5" type="text" name="message" placeholder="Type your Message" className={contactStyles.form__input}/>
        </span>
        <input type="submit" value="Submit form" className={shortWideButton}/>
    </form>
    <span className={contactStyles.bottomText}>
      You can also reach out to us via email: <a href="mailto:contact@apsis.io">contact@apsis.io</a>
      <p/>
      Want to know more before you contact us? <Link to="/process">Read about our process.</Link>
    </span>
    </ContentBlock>
  </Layout>
)