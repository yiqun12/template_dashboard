import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

class Minimalmap extends Component {
    static defaultProps = {
        center: {
            lat: 31.53912,
            lng: -89.29163
        },
        zoom: 12
    };
    render() {
        return (
            <div className="google-map" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
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

export default Minimalmap;