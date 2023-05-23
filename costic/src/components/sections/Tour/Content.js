import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import $ from 'jquery';

class Content extends Component {

    componentDidMount() {
        const driver = new Driver({ opacity: 0.75 });
        driver.defineSteps([
            {
                element: '#step-1',
                popover: {
                    title: 'Popover Positioning',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    position: 'right'
                }
            },
            {
                element: '#step-2',
                popover: {
                    title: '<em>This is an italicized Title</em>',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    position: 'bottom'
                }
            },
            {
                element: '#step-3',
                popover: {
                    title: 'Popover with Image',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <img src="assets/img/misc-1.jpg" alt="img"/>',
                    position: 'top'
                }
            },
            {
                element: '#step-4',
                popover: {
                    title: 'Keyboard control',
                    description: 'Move with left and right, and close with ESC',
                    position: 'left'
                }
            },
            {
                element: '#step-5',
                popover: {
                    title: 'This Concludes it ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    position: 'top'
                }
            },
        ]);
        driver.start();
        $("#replay-tour").on('click', function (e) {
            e.stopPropagation();
            driver.start();
        });

    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Section 1</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div id="step-1">
                                        <p class="ms-directions">Check <code>/components/sections/Tour/Content.js</code> for reference</p>
                                            <p>
                                                Tour Popovers can be positioned to the left, right, top or bottom
                </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p id="step-2">
                                            You can Also add HTML Markup to the popover header and body
              </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Section 2</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p id="step-3">
                                    This is a popover with an image wrapped inside it
          </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Section 3</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p id="step-4">
                                    You can also control the tour with your keyboard left and right buttons
          </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Section 4</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div id="step-5">
                                    <p> And ofcourse you can always play the tour again </p>
                                    <button type="button" id="replay-tour" name="button" className="btn btn-primary">Replay</button>
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