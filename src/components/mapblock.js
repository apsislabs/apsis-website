import React from "react"
import mapblockStyles from "../styles/components/mapblock.module.scss"
import Map from "google-map-react"
import {Animated} from "react-animated-css";
import { cl } from '../utils/helpers';

const locations = {
    seattle: [
        { text: "Seattle, WA", lat: 47.6062, lng: -122.3321 }
    ],
    portlands: [
        { text: "Portland, OR", lat: 45.5122, lng: -122.6587 },
        { text: "Portland, ME", lat: 43.6891, lng: - 70.2568 }
    ],
    boulder: [
        { text: "Boulder, CO", lat: 40.0150, lng: -105.2705 }
    ],
    syracuse: [
        { text: "Syracuse, NY", lat: 43.0481, lng: -76.1474 }
    ],
};

const Marker = () => (
    <Animated animationIn="pulse">
        <div className={mapblockStyles.mapBlock__marker}/>
    </Animated>
)

class MapBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "seattle",
        }
        this.changeLocation = this.changeLocation.bind(this);
    }

    changeLocation(e, cityName){
        this.setState({ cityName });
    }

    get mapCenter() {
        const current = locations[this.state.cityName];
        return {
            lat: current.map(x => x.lat).reduce((a, b) => a + b, 0) / current.length,
            lng: current.map(x => x.lng).reduce((a, b) => a + b, 0) / current.length,
        };
    }

    isCurrent(city) {
        return this.state.cityName == city;
    }

    render() {
        return (
            <div className={mapblockStyles.mapBlock}>
                <h2>Where in the World...?</h2>

                <div className={mapblockStyles.mapBlock__map} id="map">
                    <Map
                        bootstrapURLKeys={{ key: 'AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4' }}
                        center={this.mapCenter}
                        defaultZoom={10}
                        className={mapblockStyles.mapBlock__map}
                        zoom={this.state.cityName === "portlands" ? 3 : 10}
                    >
                        {locations[this.state.cityName].map((props, ix) => <Marker key={ix} {...props}/>)}
                    </Map>
                </div>

                <div className={mapblockStyles.mapBlock__locations}>
                    <div className={mapblockStyles.tabs}>
                        <ul>
                            <li>
                                <span className={cl(mapblockStyles.tabs__tablinks, this.isCurrent("seattle") && mapblockStyles.active)} onClick={(e) => this.setState({ cityName: "seattle"})}>Seattle, WA</span>
                            </li>
                            <li>
                                <span className={cl(mapblockStyles.tabs__tablinks, this.isCurrent("portlands") && mapblockStyles.active)} onClick={(e) => this.setState({ cityName: "portlands" })}>The Portlands</span>
                            </li>
                            <li>
                                <span className={cl(mapblockStyles.tabs__tablinks, this.isCurrent("boulder") && mapblockStyles.active)} onClick={(e) => this.setState({ cityName: "boulder" })}>Boulder, CO</span>
                            </li>
                            <li>
                                <span className={cl(mapblockStyles.tabs__tablinks, this.isCurrent("syracuse") && mapblockStyles.active)} onClick={(e) => this.setState({ cityName: "syracuse" })}>Syracuse, NY</span>
                            </li>
                        </ul>
                    </div>
                    <div className={mapblockStyles.mapBlock__content}>
                        { this.isCurrent("seattle") && <div className={mapblockStyles.tabcontent}>
                            Mission Control: our two founders (Wyatt and Noah) are based out of Seattle, WA. While the City by the Sound offers no shortage of developer talent, if you’re looking for top-notch engineers for your next project, you can find us in our University District offices.
                        </div> }
                        {this.isCurrent("portlands") && <div className={mapblockStyles.tabcontent}>
                            With team members in both Portland, OR and Portland, ME, the arguments over which office was Portland #1 threatened to tear our small team apart. So we compromised. Whether you’re Best Coast or Beast Coast, if you’re looking for development services in a Portland — any Portland — you can find our engineers at a coffee shop or coworking space near you.
                        </div>}
                        { this.isCurrent("boulder") && <div className={mapblockStyles.tabcontent}>
                            Home to nature lovers and national research centers, Boulder, CO is undoubtedly the sunniest city we reside in. If you need a hand with that dog training app you've been thinking about, come meet us downtown before your afternoon run up Sanitas.
                        </div>}
                        {this.isCurrent("syracuse") && <div className={mapblockStyles.tabcontent}>
                            On the outskirts of Syracuse, two doors down from farmland, at the very edge of the Finger Lakes wine region sits Cazenovia, NY where we’ve stationed our very best New York engineer. With easy access to Syracuse, Rochester, Albany and  more we can easily get an in-person look at your next project. Get big city talent right here in Central New York.
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
export default MapBlock