import React from "react"
import authorStyles from "../styles/components/author.module.scss"
import { StaticQuery, graphql } from "gatsby"
let author
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
                {
                    author = data.allPeopleYaml.edges.filter(o => o.node.name.includes(props.name))
                    console.log("IMG", author.image)
                
                }
                <img src={props.image} alt={author.name} className={authorStyles.bio__image}/>
                {console.log("NODE", data.allPeopleYaml.edges.filter(o => o.node.name.includes(props.name)))}
                <header className={authorStyles.bio__header}>
                    <h5 className={authorStyles.bio__title}>{ props.authorName }</h5>
                </header>

                <div className={authorStyles.bio__content}>
                    {props.bio}
                </div>
            </aside>
        )}
    />
)