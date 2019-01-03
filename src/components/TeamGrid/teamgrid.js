import React from "react";
import TeamPlayer from "./teamplayer";
import teamgridStyles from "../../styles/components/teamgrid.module.scss";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        noah: file(relativePath: { eq: "images/people/noah.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        wyatt: file(relativePath: { eq: "images/people/wyatt.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        nic: file(relativePath: { eq: "images/people/nic.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        henry: file(relativePath: { eq: "images/people/henry.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        chris: file(relativePath: { eq: "images/people/chris.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        mo: file(relativePath: { eq: "images/people/mo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        eric: file(relativePath: { eq: "images/people/eric.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <div className={teamgridStyles.grid}>
        <TeamPlayer
          img={data.wyatt.childImageSharp.fluid}
          name="Wyatt Kirby"
          title="Founding Partner"
        />
        <TeamPlayer
          img={data.chris.childImageSharp.fluid}
          name="Chris Pfohl"
          title="Senior Engineer"
        />
        <TeamPlayer
          img={data.mo.childImageSharp.fluid}
          name="Mo Cohen"
          title="Senior Engineer"
        />
        <TeamPlayer
          img={data.noah.childImageSharp.fluid}
          name="Noah Callaway"
          title="Founding Partner"
        />
        <TeamPlayer
          img={data.henry.childImageSharp.fluid}
          name="Henry Keiter"
          title="Senior Engineer"
        />
        <TeamPlayer
          img={data.eric.childImageSharp.fluid}
          name="Eric Greer"
          title="Senior Engineer"
        />
        <TeamPlayer
          img={data.nic.childImageSharp.fluid}
          name="Nic Villaseñor"
          title="Director of Operations"
        />
        <div className={teamgridStyles.photo} />
      </div>
    )}
  />
);
