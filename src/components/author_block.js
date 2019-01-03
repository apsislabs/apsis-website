import React from "react";
import authorStyles from "../styles/components/author.module.scss";
import { StaticQuery, graphql } from "gatsby";
import { withPrefix } from "gatsby";

export default props => (
  <StaticQuery
    query={graphql`
      {
        allPeopleYaml {
          edges {
            node {
              name
              bio
              image
            }
          }
        }
      }
    `}
    render={data => (
      <aside className={authorStyles.bio}>
        <img
          className={authorStyles.bio__image}
          src={withPrefix(
            data.allPeopleYaml.edges.filter(o =>
              o.node.name.includes(props.name)
            )[0].node.image
          )}
          alt="generic stockphoto"
        />
        {/* <img src={data.allPeopleYaml.edges.filter(o => o.node.name.includes(props.name))[0].node.image} alt="Author Profile" className={authorStyles.bio__image}/> */}
        <header className={authorStyles.bio__header}>
          <h5 className={authorStyles.bio__title}>
            {
              data.allPeopleYaml.edges.filter(o =>
                o.node.name.includes(props.name)
              )[0].node.name
            }
          </h5>
        </header>

        <div className={authorStyles.bio__content}>
          {
            data.allPeopleYaml.edges.filter(o =>
              o.node.name.includes(props.name)
            )[0].node.bio
          }
        </div>
      </aside>
    )}
  />
);
