import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const exampleMapStyles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        },
        {
            "gamma": 0.5
        }
        ]
    }
] //Add some style 
class Nightmap extends Component {
    static defaultProps = {
        center: {
            lat: 31.53912,
            lng: -89.29163
        },
        zoom: 12,
        styles: [
            
        ]
    };
    render() {
        return (
            <div className="google-map" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    defaultOptions={{ styles: exampleMapStyles }}
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

export default Nightmap;