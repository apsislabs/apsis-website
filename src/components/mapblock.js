import React from "react"
import mapblockStyles from "../styles/components/mapblock.module.scss"
import Map from "google-map-react"
import {Animated} from "react-animated-css";


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
            latitude: 47.6062,
            longitude: -122.3321,
        }
        this.changeLocation = this.changeLocation.bind(this);
    }

    changeLocation(e, lat, lng, cityName){
        this.setState({latitude: lat, longitude: lng});
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName(mapblockStyles.tabcontent);
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName(mapblockStyles.tabs__tablinks);
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(` ${mapblockStyles.tabcontent__active}`, "");
        }

        document.getElementById(cityName).style.display = "block";
        e.currentTarget.className += ` ${mapblockStyles.tabcontent__active}`;
        this.setState({latitude: lat, longitude: lng, cityName})
    }

    componentDidMount(){
        var i, tabcontent;
        tabcontent = document.getElementsByClassName(mapblockStyles.tabcontent);
        for (i = 1; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        document.getElementById(this.state.cityName).style.display = "block";
        document.getElementById(`${this.state.cityName}-tab`).className += ` ${mapblockStyles.tabcontent__active}`;
    }

    render() {
        return (
            <div className={mapblockStyles.mapBlock}>
                <h2>Where in the World...?</h2>

                <div className={mapblockStyles.mapBlock__map} id="map">
                    <Map
                        bootstrapURLKeys={{ key: 'AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4' }}
                        center={{lat: this.state.latitude, lng: this.state.longitude}}
                        defaultZoom={10}
                        className={mapblockStyles.mapBlock__map}
                        zoom={this.state.cityName === "portlands" ? 3 : 10}
                    >
                    <Marker
                        lat={this.state.latitude + .03}
                        lng={this.state.longitude}
                        text={this.state.cityName}
                    />
                    { this.state.cityName === "portlands" && <Marker
                        lat={43.6591 + .03}
                        lng={-70.2568}
                    />   }
                    </Map>
                </div>

                <div className={mapblockStyles.mapBlock__locations}>
                    <div className={mapblockStyles.tabs}>
                        <ul>
                            <li>
                                <span id="seattle-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, 47.6062, -122.3321, "seattle")}>Seattle, WA</span>
                            </li>
                            <li>
                                <span id="portlands-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, 45.5122, -122.6587, "portlands")}>The Portlands</span>
                            </li>
                            <li>
                                <span id="boulder-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, 40.0150, -105.2705, "boulder")}>Boulder, CO</span>
                            </li>
                            <li>
                                <span id="syracuse-tab" className={mapblockStyles.tabs__tablinks} data-toggle="tab" onClick={(e) => this.changeLocation(e, 43.0481, -76.1474, "syracuse")}>Syracuse, NY</span>
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
                            On the outskirts of Syracuse, two doors down from farmland, at the very edge of the Finger Lakes wine region sits Cazenovia, NY where we’ve stationed our very best New York engineer. With easy access to Syracuse, Rochester, Albany and  more we can easily get an in-person look at your next project. Get big city talent right here in Central New York.                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MapBlock