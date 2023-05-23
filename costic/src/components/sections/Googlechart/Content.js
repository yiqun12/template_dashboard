import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Barchart from './Barchart';
import Linechart from './Linechart';
import Stackedbarchart from './Stackedbarchart';
import Doughnutchart from './Doughnutchart';
import Areachart from './Areachart';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Bar Chart</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Barchart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Line Chart</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Linechart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Stacked Bar Chart</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Stackedbarchart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Doughnut Chart</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Doughnutchart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Area Chart</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Areachart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;