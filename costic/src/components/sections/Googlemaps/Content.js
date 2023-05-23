import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'
import Markermap from './Markermap';
import Minimalmap from './Minimalmap';
import Propiamap from './Propiamap';
import Avocadomap from './Avocadomap';
import Nightmap from './Nightmap';
import Applemap from './Applemap';
import Captormap from './Captormap';
import Naturemap from './Naturemap';



class Content extends Component {
    
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Basic Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Markermap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Map Without Controls</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Minimalmap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Propia Theme Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Propiamap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Avocado Theme Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Avocadomap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Night Mode Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Nightmap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Apple Theme Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Applemap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Captor Theme Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Captormap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Nature Theme Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="map-container">
                                    <Naturemap/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;