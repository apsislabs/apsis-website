import React from "react"
import mapblockStyles from "../styles/components/mapblock.module.scss"
import Map from "google-map-react"
import { navigate } from "gatsby-link"
import {Animated} from "react-animated-css";


const Marker = () => (
    <Animated animationIn="pulse">
        <div className={mapblockStyles.mapBlock__marker}/>
    </Animated>
)

class MapBlock extends React.Component {
    componentDidMount(){
        if (this.props.cityName){
            document.getElementById(`${this.props.cityName}-tab`).className += ` ${mapblockStyles.tabcontent__active}`;
            document.getElementById(this.props.cityName).style.display = "block";
        }
    }

    changeLocation(e, cityName){
        e.preventDefault();
        navigate(`/team/${cityName}#map`);   
    }

    render() {
        return (
            <div className={mapblockStyles.mapBlock}>
                <h2>Where in the World...?</h2>

                <div className={mapblockStyles.mapBlock__map} id="map">
                    <Map
                        bootstrapURLKeys={{ key: 'AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4' }}
                        center={{lat: this.props.latitude, lng: this.props.longitude}}
                        defaultZoom={10}
                        className={mapblockStyles.mapBlock__map}
                    >
                    <Marker
                        lat={this.props.latitude + .03}
                        lng={this.props.longitude}
                        text={this.props.cityName}
                    />
                    <Marker
                        lat={37.778519 + .03}
                        lng={-122.405640}
                    />  
                    </Map>
                </div>

                <div className={mapblockStyles.mapBlock__locations}>
                    <div className={mapblockStyles.tabs}>
                        <ul>
                            <li>
                                <span id="seattle-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, "seattle")}>Seattle, WA</span>
                            </li>
                            <li>
                                <span id="portlands-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, "portlands")}>The Portlands</span>
                            </li>
                            <li>
                                <span id="boulder-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, "boulder")}>Boulder, CO</span>
                            </li>
                            <li>
                                <span id="syracuse-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, "syracuse")}>Syracuse, NY</span>
                            </li>
                        </ul>
                    </div>
                    <div className={mapblockStyles.mapBlock__content}>
                        <div className={mapblockStyles.tabcontent} id="seattle">
                            Mission Control: our two founders (Wyatt and Noah) are based out of Seattle, WA. While the City by the Sound offers no shortage of developer talent, if you’re looking for top-notch engineers for your next project, you can find us in our University District offices.
                        </div>
                        <div className={mapblockStyles.tabcontent} id="portlands">
                            With team members in both Portland, OR and Portland, ME, the arguments over which office was Portland #1 threatened to tear our small team apart. So we compromised. Whether you’re Best Coast or Beast Coast, if you’re looking for development services in a Portland — any Portland — you can find our engineers at a coffee shop or coworking space near you.
                        </div>
                        <div className={mapblockStyles.tabcontent} id="boulder">
                            Home to nature lovers and national research centers, Boulder, CO is undoubtedly the sunniest city we reside in. If you need a hand with that dog training app you've been thinking about, come meet us downtown before your afternoon run up Sanitas.
                        </div>
                        <div className={mapblockStyles.tabcontent} id="syracuse">
                            On the outskirts of Syracuse, two doors down from farmland, at the very edge of the Finger Lakes wine region sits Cazenovia, NY where we’ve stationed our very best New York engineer. With easy access to Syracuse, Rochester , Albany and  more we can easily get an in-person look at your next project. Get big city talent right here in Central New York.                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MapBlock