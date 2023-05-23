import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Simple Preloaders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="spinner spinner-1" />
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-7">
                                            <div className="bounce1" />
                                            <div className="bounce2" />
                                            <div className="bounce3" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-3">
                                            <div className="rect1" />
                                            <div className="rect2" />
                                            <div className="rect3" />
                                            <div className="rect4" />
                                            <div className="rect5" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-4">
                                            <div className="cube1" />
                                            <div className="cube2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Circle Preloaders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="spinner spinner-5" />
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-11">
                                            <div className="ms-circle1 ms-circle" />
                                            <div className="ms-circle2 ms-circle" />
                                            <div className="ms-circle3 ms-circle" />
                                            <div className="ms-circle4 ms-circle" />
                                            <div className="ms-circle5 ms-circle" />
                                            <div className="ms-circle6 ms-circle" />
                                            <div className="ms-circle7 ms-circle" />
                                            <div className="ms-circle8 ms-circle" />
                                            <div className="ms-circle9 ms-circle" />
                                            <div className="ms-circle10 ms-circle" />
                                            <div className="ms-circle11 ms-circle" />
                                            <div className="ms-circle12 ms-circle" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-2">
                                            <div className="double-bounce1" />
                                            <div className="double-bounce2" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-8">
                                            <div className="ms-circle1 ms-child" />
                                            <div className="ms-circle2 ms-child" />
                                            <div className="ms-circle3 ms-child" />
                                            <div className="ms-circle4 ms-child" />
                                            <div className="ms-circle5 ms-child" />
                                            <div className="ms-circle6 ms-child" />
                                            <div className="ms-circle7 ms-child" />
                                            <div className="ms-circle8 ms-child" />
                                            <div className="ms-circle9 ms-child" />
                                            <div className="ms-circle10 ms-child" />
                                            <div className="ms-circle11 ms-child" />
                                            <div className="ms-circle12 ms-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Abstract Shape preloaders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="spinner spinner-9">
                                            <div className="ms-cube ms-cube1" />
                                            <div className="ms-cube ms-cube2" />
                                            <div className="ms-cube ms-cube3" />
                                            <div className="ms-cube ms-cube4" />
                                            <div className="ms-cube ms-cube5" />
                                            <div className="ms-cube ms-cube6" />
                                            <div className="ms-cube ms-cube7" />
                                            <div className="ms-cube ms-cube8" />
                                            <div className="ms-cube ms-cube9" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-10">
                                            <div className="ms-cube1 ms-cube" />
                                            <div className="ms-cube2 ms-cube" />
                                            <div className="ms-cube4 ms-cube" />
                                            <div className="ms-cube3 ms-cube" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-6">
                                            <div className="dot1" />
                                            <div className="dot2" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="spinner spinner-12">
                                            <div className="ms-cube1 ms-cube" />
                                            <div className="ms-cube2 ms-cube" />
                                            <div className="ms-cube4 ms-cube" />
                                            <div className="ms-cube3 ms-cube" />
                                        </div>
                                    </div>
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