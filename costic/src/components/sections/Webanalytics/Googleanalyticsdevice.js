import React, { Component } from 'react';

class Googleanalyticsdevice extends Component {
    render() {
        return (
            <div className="ms-panel ms-device-sessions">
                <div className="ms-panel-header">
                    <h6>Google Analytics Sessions by Device</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device"> <i className="material-icons bg-primary">desktop_windows</i>
                            <h4>Desktop</h4>
                            <p className="ms-text-primary">45.07%</p>
                            <p className="ms-text-primary">201,434</p>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device"> <i className="material-icons bg-danger">tablet_mac</i>
                            <h4>Tablet</h4>
                            <p className="ms-text-danger">29.05%</p>
                            <p className="ms-text-danger">134,693</p>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device"> <i className="material-icons bg-warning">phone_iphone</i>
                            <h4>Mobile</h4>
                            <p className="ms-text-warning">18.43%</p>
                            <p className="ms-text-warning">81,525</p>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '45.07%' }} aria-valuenow="45.07" aria-valuemin={0} aria-valuemax={100} />
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '29.05%' }} aria-valuenow="29.05" aria-valuemin={0} aria-valuemax={100} />
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25.48%' }} aria-valuenow="25.48" aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </div>
                <div className="ms-panel-footer">
                    <h6>Previous Result</h6>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device">
                            <h4 className="ms-text-primary">Desktop</h4>
                            <p className="ms-text-dark">45.07%</p>
                            <p>201,434</p>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device">
                            <h4 className="ms-text-danger">Tablet</h4>
                            <p className="ms-text-dark">39.00%</p>
                            <p>134,693</p>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6 col-6 ms-device">
                            <h4 className="ms-text-warning">Mobile</h4>
                            <p className="ms-text-dark">19.45%</p>
                            <p>81,525</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Googleanalyticsdevice;