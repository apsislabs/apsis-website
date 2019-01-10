import React from "react";
import Helmet from "react-helmet";
import { ContactForm } from "../components/ContactForm";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

export default () => (
  <Layout>
    <Helmet title="Work With Us | Apsis Labs" />
    <Navigation blue={true} />

    <div className="container">
      <ContactForm />

      <div className="container--narrow">
        <small className="text-center">
          <p>
            We won't ever sell or use your information without your permission.
            We hate that. If you'd prefer can also reach out to us via email:{" "}
            <a href="mailto:contact@apsis.io" target="_contact_apsis">
              contact@apsis.io
            </a>
          </p>
        </small>
      </div>
    </div>
  </Layout>
);
