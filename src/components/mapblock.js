import React from "react"
import mapblockStyles from "../styles/components/mapblock.module.scss"

export default () => (
    <div className={mapblockStyles.container}>
        <h2>Where in the world...?</h2>

        <div className={mapblockStyles.map} />

        <div className={mapblockStyles.locations}>
            <div className={mapblockStyles.tabs}>
                <ul>
                    <li className="active">
                        <a id="seattle" href="#seattle" data-toggle="tab">Seattle, WA</a>
                    </li>
                    <li>
                        <a id="portlands" href="#portlands" data-toggle="tab">The Portlands</a>
                    </li>
                    <li>
                        <a id="boulder" href="#boulder" data-toggle="tab">Boulder, CO</a>
                    </li>
                    <li>
                        <a id="syracus" href="#syracus" data-toggle="tab">Syracus, NY</a>
                    </li>
                </ul>
            </div>
            <div className={mapblockStyles.content}>
                <div className="tab-content">
                    <div className="tab-pane active" id="office">
                        Mission Control: our two founders (Wyatt and Noah) are based out of Seattle, WA. While the City by the Sound offers no shortage of developer talent, if you’re looking for top-notch engineers for your next project, you can find us in our University District offices.
                    </div>
                </div>
            </div>
        </div>
        
    </div>
);