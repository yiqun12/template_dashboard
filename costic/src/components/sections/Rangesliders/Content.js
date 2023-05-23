import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb.js'
import 'ion-rangeslider/js/ion.rangeSlider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import $ from 'jquery';

class Content extends Component {
    componentDidMount() {
        /* Default Range Slider */
        $("#demo_0").ionRangeSlider();
        /* Double Slider */
        $("#demo_1").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$"
        });

        /* Month Slider */
        $("#demo_2").ionRangeSlider({
            grid: true,
            from: new Date().getMonth(),
            values: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ]
        });

        /* Prevent Collision */
        $("#demo_3").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 100,
            from: 47,
            to: 53,
            prefix: "Weight: ",
            postfix: " million pounds",
            decorate_both: true // false,
            // values_separator: " to "
        });

        /* Snap */
        $("#demo_4").ionRangeSlider({
            type: "double",
            grid: true,
            min: -1000,
            max: 1000,
            from: -500,
            to: 500,
            step: 250
        });

        /* Floating Points */
        $("#demo_5").ionRangeSlider({
            type: "double",
            grid: true,
            min: -12.8,
            max: 12.8,
            from: -3.2,
            to: 3.2,
            step: 0.1
        });

        /* Skins */
        $("#demo_6").ionRangeSlider();

        $("#demo_7").ionRangeSlider({
            skin: 'big'
        });

        $("#demo_8").ionRangeSlider({
            skin: 'modern'
        });

        $("#demo_9").ionRangeSlider({
            skin: 'sharp'
        });

        $("#demo_10").ionRangeSlider({
            skin: 'round'
        });

        $("#demo_11").ionRangeSlider({
            skin: 'square'
        });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        {/* Basic Range Sliders */}
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Basic Range Sliders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <h6 className="section-title">Default Slider</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_0" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3 ml-auto mr-auto">
                                        <h6 className="section-title">Double Slider</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_1" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Date Slider</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_2" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Advanced Range Sliders */}
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Advanced Range Sliders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="section-title">Label Collision Detection</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_3" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3 ml-auto mr-auto">
                                        <h6 className="section-title">Snap Slider</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_4" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Floating Point Slider</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_5" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Range Slider Skins</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="section-title">Default Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_6" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3 ml-auto mr-auto">
                                        <h6 className="section-title">Big Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_7" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Modern Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_8" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Range Slider Skins (2)</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="section-title">Sharp Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_9" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3 ml-auto mr-auto">
                                        <h6 className="section-title">Round Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_10" type="text" className="js-range-slider" name="slider1" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Square Skin</h6>
                                        <div className="ms-range-slider my-4">
                                            <input id="demo_11" type="text" className="js-range-slider" name="slider1" defaultValue />
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