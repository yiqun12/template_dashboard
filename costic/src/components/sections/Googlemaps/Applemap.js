import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class Applemap extends Component {
    static defaultProps = {
        center: {
            lat: 31.53912,
            lng: -89.29163
        },
        zoom: 12,
        styles:[
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#f7f1df"
                }]
              },
              {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#d0e3b4"
                }]
              },
              {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#fbd3da"
                }]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#bde6ab"
                }]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#ffe15f"
                }]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                  "color": "#efd151"
                }]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#ffffff"
                }]
              },
              {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "black"
                }]
              },
              {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [{
                  "color": "#cfb2db"
                }]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                  "color": "#a2daf2"
                }]
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

export default Applemap;