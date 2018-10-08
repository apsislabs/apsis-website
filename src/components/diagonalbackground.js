import React from "react"
import diagonalbackgroundStyles from "../styles/components/diagonalbackground.module.scss"


export default props => (
    <div className={diagonalbackgroundStyles.hero}>  
      {props.children}
    </div>
)