import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Barchart from './Barchart';
import Linechart from './Linechart';
import Piechart from './Piechart';
import Polarchart from './Polarchart';
import Dougnutchart from './Dougnutchart';
import Groupedbarchart from './Groupedbarchart';
import Mixedchart from './Mixedchart';

class Content extends Component {
    render() {
        return (
            <div class="ms-content-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Bar Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Barchart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Line Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Linechart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Pie Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Piechart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Polar Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Polarchart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Dougnut Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Dougnutchart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Grouped Bar Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Groupedbarchart/>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                        <div class="ms-panel">
                            <div class="ms-panel-header">
                                <h6>Mixed Chart</h6>
                            </div>
                            <div class="ms-panel-body">
                                <Mixedchart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;