import React from "react"
import Layout from "../components/layout"
import HireUsFooter from "../components/hireusfooter"
import ContentBlock from "../components/contentblock";
import MapBlock from "../components/mapblock";
import TeamGrid from "../components/teamgrid";

export default () => (
  <Layout>
    <ContentBlock
      vertical={true}
      title="A developer in every timezone."
    >
      Why does that matter? We know when it comes to finding the right team to build your next project, communication is king. As a remote company, we’ve always placed an emphasis on clear and concise communication, and developing strong teams over long distances.
      <p/>
      This means less time spent sending emails asking for clarification, and fewer headaches for you."
    </ContentBlock>
    <TeamGrid />
    <MapBlock />
    <HireUsFooter />
  </Layout>
)