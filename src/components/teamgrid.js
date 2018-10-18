import React from "react"
import TeamPlayer from "./teamplayer"
import teamgridStyles from "../styles/components/teamgrid.module.scss"

export default (props) => (
    <div className={teamgridStyles.grid}>
        <TeamPlayer
            img={props.teamImages.wyatt.childImageSharp.fluid}
            name="Wyatt Kirby"
            title="Founding Partner"
        />
        <TeamPlayer
            img={props.teamImages.chris.childImageSharp.fluid}
            name="Chris Pfohl"
            title="Senior Engineer"
        />
        <TeamPlayer
            img={props.teamImages.mo.childImageSharp.fluid}
            name="Mo Cohen"
            title="Senior Engineer"
        />
        <TeamPlayer
            img={props.teamImages.noah.childImageSharp.fluid}
            name="Noah Callaway"
            title="Founding Partner"
        />
        <TeamPlayer
            img={props.teamImages.henry.childImageSharp.fluid}
            name="Henry Keiter"
            title="Spider Wrangler"
        />
        <TeamPlayer
            img={props.teamImages.eric.childImageSharp.fluid}
            name="Eric Greer"
            title="Most Eric"
        />
        <TeamPlayer
            img={props.teamImages.nic.childImageSharp.fluid}
            name="Nic Villasenor"
            title="Director of Operations"
        />

        <i className="fas fa-user-astronaut fa-9x"></i>
    </div>
)
