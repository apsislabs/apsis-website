import React from "react"
import TeamPlayer from "./teamplayer"
import teamgridStyles from "../styles/components/teamgrid.module.scss"

export default () => (
    <div className={teamgridStyles.grid}>
        <TeamPlayer />
        <TeamPlayer />
        <TeamPlayer />
        <TeamPlayer />
        <TeamPlayer />
        <TeamPlayer />
        <TeamPlayer />
        <i className="fas fa-user-astronaut fa-9x"></i>
    </div>
)