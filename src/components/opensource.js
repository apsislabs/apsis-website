import React from "react"
import opensourceStyles from "./opensource.module.css"
import buttonStyles from "./button.module.css"
import OpenSourceCard from "../components/opensourcecard"
import Button from "../components/button"

export default props => (
    <div className={opensourceStyles.opensource}>
        <div className={opensourceStyles.header}>
            <h2>Open Source by Default</h2>
            <div className={opensourceStyles.text}>
                When we’re not building for you, we build for the community.<br/>
                We’ve published over <a href="https://github.com/apsislabs">20 open source projects</a>. Here are a few of our favorites:
            </div>
            <div className={opensourceStyles.cards}>
                <OpenSourceCard
                    icon="fab fa-js-square"
                    title="orca"
                    text="Orchestrate your Javascript: Run just the code you need where you intend."
                />
                <OpenSourceCard
                    icon="fas fa-gem"
                    title="phi_attrs"
                    text="HIPAA-compliant logging and access control for your ActiveRecord models."
                />
                <OpenSourceCard
                    icon="far fa-gem"
                    title="Slayer"
                    text="A killer service layer for your Ruby application."
                />
                <OpenSourceCard
                    icon="fab fa-js-square"
                    title="Slayer"
                    text="A killer service layer for your Ruby application."
                />
            </div>
            <Button 
                to='/services'
                text="See More of Our Work"
                className={buttonStyles.herobutton}
            />
        </div>
    </div>
)