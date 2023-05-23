import React, { Component } from 'react';

class Timeline extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-body">
                    <h2 className="section-title">My Timeline</h2>
                    <ul className="ms-activity-log">
                        <li>
                            <div className="ms-btn-icon btn-pill icon btn-success">
                                <i className="flaticon-tick-inside-circle" />
                            </div>
                            <h6>Computer Science Degree</h6>
                            <span> <i className="material-icons">event</i>1 January, 2018</span>
                            <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                        </li>
                        <li>
                            <div className="ms-btn-icon btn-pill icon btn-info">
                                <i className="flaticon-information" />
                            </div>
                            <h6>Landed first Job</h6>
                            <span> <i className="material-icons">event</i>4 March, 2018</span>
                            <p className="fs-14">Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                        </li>
                        <li>
                            <div className="ms-btn-icon btn-pill icon btn-success">
                                <i className="flaticon-tick-inside-circle" />
                            </div>
                            <h6>Started my own Company</h6>
                            <span> <i className="material-icons">event</i>1 March, 2022</span>
                            <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Timeline;