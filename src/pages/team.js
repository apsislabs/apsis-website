import React from "react"
import Layout from "../components/layout"
import HireUsFooter from "../components/hireusfooter"
import ContentBlock from "../components/contentblock";
import MapBlock from "../components/mapblock";
import TeamGrid from "../components/teamgrid";
import { graphql } from 'gatsby'
import Navbar from "../components/navbar"


class TeamPage extends React.Component {
  render () {
    return (
      <Layout>
        <Navbar
            blue={true}
        />
        <ContentBlock
          vertical={true}
          title="A developer in every timezone."
        >
          Why does that matter? We know when it comes to finding the right team to build your next project, communication is king. As a remote company, we’ve always placed an emphasis on clear and concise communication, and developing strong teams over long distances.
          <p/>
          This means less time spent sending emails asking for clarification, and fewer headaches for you."
        </ContentBlock>
        <TeamGrid
          teamImages={this.props.data}
        />
        <MapBlock />
        <HireUsFooter />
      </Layout>
    )
  }
}

export default TeamPage

export const fluidTeam = graphql`
fragment fluidTeam on File {
    childImageSharp {
        fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
        }
    }
}
`;

export const teamQuery = graphql`
query {
    noah: file(relativePath: { eq: "images/people/noah.jpg" }) {
        ...fluidTeam
    }
    wyatt: file(relativePath: { eq: "images/people/wyatt.jpg" }) {
        ...fluidTeam
    }
    nic: file(relativePath: { eq: "images/people/nic.png" }) {
        ...fluidTeam
    }
    henry: file(relativePath: { eq: "images/people/henry.jpg" }) {
        ...fluidTeam
    }
    chris: file(relativePath: { eq: "images/people/chris.jpg" }) {
        ...fluidTeam
    }
    mo: file(relativePath: { eq: "images/people/mo.jpg" }) {
        ...fluidTeam
    }
    eric: file(relativePath: { eq: "images/people/eric.jpg" }) {
        ...fluidTeam
    }
}
`