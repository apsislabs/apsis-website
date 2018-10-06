import React from "react"
import diagonalbackgroundStyles from "./diagonalbackground.module.css"


export default props => (
    <div className={diagonalbackgroundStyles.hero}>  
      {props.children}
    </div>
)