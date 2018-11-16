import React from "react"
import footerStyles from "../../styles/components/footer.module.scss"
import GoogleMapReact from "google-map-react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
        query apsisLogoIconQuery {
          apsisLogoIcon: file(relativePath: { eq: "images/logos/apsis_mobile_blue.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                  src
              }
            }
          }
        }
        `}
        render={data => (
            <div className={footerStyles.footer}>
                <div className={footerStyles.footer__map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCF7DHtzwCN8X7ZStPCJwsGsO9aH8-Uiq4' }}
                        defaultCenter={{lat: 47.659298, lng: -122.317940}}
                        defaultZoom={14}
                        options={defaultOptions_}
                    />
                    <div className={footerStyles.footer__contactContainer}
                      style={{backgroundImage: `url(${data.apsisLogoIcon.childImageSharp.fluid.src})`}}
                    >
                        <h4>Contact Us</h4>
                        <div className={footerStyles.footer__contactInfo}>
                            <span>
                                Apsis Labs<br/>
                                PO Box 85866<br/>
                                Seattle, WA 98145<br/><br/>
                                <a href="mailto:contact@apsis.io">contact@apsis.io</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={footerStyles.footer__copyright}>
                    <span>© 2018 apsis labs</span>
                    <span className={footerStyles.links}><a href="https://github.com/apsislabs">github</a> | <a href="https://www.facebook.com/Apsis-Labs-642514445785846/">facebook</a> | <a href="https://twitter.com/apsislabs">twitter</a></span>
                </div>
            </div>
        )}
    />
)


function defaultOptions_(/* maps */) {
  return {
    styles: mapStyles,
    gestureHandling: 'none',
    zoomControl: false
  };
}

const mapStyles = [
  {
    "width": "100%",
    "height": "100%",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
