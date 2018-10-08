import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Content from "../components/content"
import QuoteBlock from "../components/quoteblock"
import HowWeWork from "../components/howwework"
import HireUsFooter from "../components/hireusfooter"

export default () => (
  <Layout>
    <Hero 
        headerText="Simply Software."
        subtitle="They say do one thing and do it well. Our thing is software."
    />
    <Content
        title="More partners, less clients."
        text="Over the years we’ve built software in a variety of industries at every scale from startups to enterprise applications. While the specfiics change, one thing always remains constant: our commitment to doing the right thing.

        That’s why we like to think of our customers less as clients and more as partners. We’re in this together, every step of the way. From initial specs to final deployment, you can trust that we will be there to do what we do best: deliver quality software that meets your business’s needs."
    />
    <QuoteBlock />
    <HowWeWork />
    <HireUsFooter />
  </Layout>
)