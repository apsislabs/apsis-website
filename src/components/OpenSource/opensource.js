import React from "react"
import opensourceStyles from "../../styles/components/opensource.module.scss"
import buttonStyles from "../../styles/components/button.module.scss"
import OpenSourceCard from "./opensourcecard"
import opensourcecardStyles from "../../styles/components/opensourcecard.module.scss"

const blueWideButtonClasses = `${buttonStyles.button__blue} ${buttonStyles.button__wide} ${opensourceStyles.button}`;
const redHover = `${opensourcecardStyles.red}`;
const jsHover = `${opensourcecardStyles.js}`;

export default props => (
    <div className={opensourceStyles.opensource}>
        <div className={opensourceStyles.opensource__header}>
            <h2>Open Source by Default</h2>
            <div>
                When we’re not building for you, we build for the community.<br/>
                We’ve published over 20 open source projects. Here are a few of our favorites:
            </div>
            <div className={opensourceStyles.opensource__cards}>
                <OpenSourceCard
                    icon="fab fa-js-square"
                    title="orca"
                    hover={jsHover}
                    url="https://github.com/apsislabs/orca"
                    text="Orchestrate your Javascript: Run just the code you need where you intend."
                />
                <OpenSourceCard
                    icon="fas fa-gem"
                    title="phi_attrs"
                    hover={redHover}
                    url="https://github.com/apsislabs/phi_attrs"
                    text="HIPAA-compliant logging and access control for your ActiveRecord models."
                />
                <OpenSourceCard
                    icon="far fa-gem"
                    title="Slayer"
                    hover={redHover}
                    url="https://github.com/apsislabs/slayer"
                    text="A killer service layer for your Ruby application."
                />
                <OpenSourceCard
                    icon="fab fa-js-square"
                    title="carpenter"
                    hover={jsHover}
                    url="https://github.com/apsislabs/carpenter"
                    text="Configuration-driven Custom Post Types for WordPress."
                />
            </div>
            <a href="https://github.com/apsislabs"
                className={blueWideButtonClasses}
            >
                See More of Our Work
            </a>
        </div>
    </div>
)