import React from "react"
import mapblockStyles from "../styles/components/mapblock.module.scss"
import GoogleMapReact from "google-map-react"

class MapBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 47.659298,
            longitude: -122.317940
        }
    }

    componentDidMount(){
        var i, tabcontent;
        tabcontent = document.getElementsByClassName(mapblockStyles.tabcontent);
        for (i = 1; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
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
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        e.currentTarget.className += " active";
    }

    render() {
        return (
            <div className={mapblockStyles.mapBlock}>
                <h2>Where in the world...?</h2>

                <div className={mapblockStyles.mapBlock__map} id="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4' }}
                        center={{lat: this.state.latitude, lng: this.state.longitude}}
                        defaultZoom={10}
                    />
                </div>

                <div className={mapblockStyles.mapBlock__locations}>
                    <div className={mapblockStyles.tabs}>
                        <ul>
                            <li>
                                <a id="seattle" className={mapblockStyles.tabs__tablinks} href="team#map" data-toggle="tab" onClick={(e) => this.changeLocation(e, 47.659298, -122.317940, "seattle-content")}>Seattle, WA</a>
                            </li>
                            <li>
                                <a id="portlands" className={mapblockStyles.tabs__tablinks} href="#map" data-toggle="tab" onClick={(e) => this.changeLocation(e, 45.5122, -122.6587, "portlands-content")}>The Portlands</a>
                            </li>
                            <li>
                                <a id="boulder" className={mapblockStyles.tabs__tablinks} href="#map" data-toggle="tab" onClick={(e) => this.changeLocation(e, 40.0150, -105.2705, "boulder-content")}>Boulder, CO</a>
                            </li>
                            <li>
                                <a id="syracus" className={mapblockStyles.tabs__tablinks} href="#map" data-toggle="tab" onClick={(e) => this.changeLocation(e, 43.0481, -76.1474, "syracus-content")}>Syracus, NY</a>
                            </li>
                        </ul>
                    </div>
                    <div className={mapblockStyles.mapBlock__content}>
                        <div className={mapblockStyles.tabcontent} id="seattle-content">
                            Mission Control: our two founders (Wyatt and Noah) are based out of Seattle, WA. While the City by the Sound offers no shortage of developer talent, if you’re looking for top-notch engineers for your next project, you can find us in our University District offices.
                        </div>
                        <div className={mapblockStyles.tabcontent} id="portlands-content">
                            With team members in both Portland, OR and Portland, ME, the arguments over which office was Portland #1 threatened to tear our small team apart. So we compromised. Whether you’re Best Coast or Beast Coast, if you’re looking for development services in a Portland — any Portland — you can find our engineers at a coffee shop or coworking space near you.
                        </div>
                        <div className={mapblockStyles.tabcontent} id="boulder-content">
                            BOULDER IS A PLACE
                        </div>
                        <div className={mapblockStyles.tabcontent} id="syracus-content">
                            On the outskirts of Syracuse, two doors down from farmland, at the very edge of the Finger Lakes wine region sits Cazenovia, NY where we’ve stationed our very best New York engineer. With easy access to Syracuse, Rochester , Albany and  more we can easily get an in-person look at your next project. Get big city talent right here in Central New York.                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MapBlock