import React from "react"
import teamStyles from "../styles/components/teamgrid.module.scss"
import Img from "gatsby-image"

export default (props) => (
    <div className={teamStyles.photo}>
        <Img fluid={props.img} />
        <div className={teamStyles.name}>{props.name}</div>
        <div className={teamStyles.title}>{props.title}</div>
    </div>
)