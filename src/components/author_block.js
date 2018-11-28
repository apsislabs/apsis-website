import React from "react"
import authorStyles from "../styles/components/author.module.scss"
import { StaticQuery, graphql } from "gatsby"

export default props => (
    <StaticQuery
        query={graphql`
        {
            allDataYaml {
                edges {
                    node {
                        mo {
                            name
                        }
                    }
                }
            }
        }
        `}
        render={data => (
            <aside className={authorStyles.bio}>
                <img src={props.image} alt="ooo"className={authorStyles.bio__image}/>
                {/* {data.allDataYaml.edges.node.mo.name} */}
                <header class={authorStyles.bio__header}>
                    <h5 class={authorStyles.bio__title}>{ props.authorName }</h5>
                </header>

                <div class={authorStyles.bio__content}>
                    {props.bio}
                </div>
            </aside>
        )}
    />
)