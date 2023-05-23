import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'
import Worldmap from './Worldmap';
import Usamap from './Usamap';
import Arcmap from './Arcmap';
import Markermap from './Markermap';

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
                                <h6>World Map</h6>
                            </div>
                            <div className="ms-panel-body">

                                <div id="vector-world-map" className="vector-map">
                                    <Worldmap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>USA Map</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div id="vector-usa-map" className="vector-map" >
                                    <Usamap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>World Map Only Continents</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div id="vector-arc-map" className="vector-map" >
                                    <Arcmap/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>World Map with Markers</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div id="vector-map-bubbles" className="vector-map" >
                                    <Markermap/>
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