import React from "react"
import containerStyles from "../styles/components/container.module.scss"

export default ({ children }) => (
  <div className={containerStyles.container}>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
    {children}
  </div>
)