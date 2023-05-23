import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class Captormap extends Component {
    static defaultProps = {
        center: {
            lat: 31.53912,
            lng: -89.29163
        },
        zoom: 12,
        styles: [
            {
                "featureType": "water",
                "stylers": [{
                    "color": "#0e171d"
                }]
            },
            {
                "featureType": "landscape",
                "stylers": [{
                    "color": "#1e303d"
                }]
            },
            {
                "featureType": "road",
                "stylers": [{
                    "color": "#1e303d"
                }]
            },
            {
                "featureType": "poi.park",
                "stylers": [{
                    "color": "#1e303d"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "color": "#182731"
                },
                {
                    "visibility": "simplified"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "color": "#f0c514"
                },
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1e303d"
                },
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#e77e24"
                },
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#94a5a6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "color": "#e84c3c"
                }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "color": "#e84c3c"
                },
                {
                    "visibility": "off"
                }
                ]
            }
        ]
    };
    render() {
        return (
            <div className="google-map" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    defaultStyles={this.props.styles}
                >
                    <Marker
                        lat={31.53912}
                        lng={-89.29163}
                        name="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Captormap;