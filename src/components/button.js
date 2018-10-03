import React from "react"
import { Link } from "gatsby"

export default props => (
    <span className={props.className}>
        <Link to={props.to}>{props.text}</Link>
    </span>
)