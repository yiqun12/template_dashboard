import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';

class Content extends Component {
    componentDidMount() {
        //initialize datatable
        function animateRoundedProgress(rpb) {
            if (!$(rpb).hasClass('animated')) {
                $(rpb).css('stroke-dashoffset', 358.141563 - (358.141563 / 100) * $(rpb).attr('aria-valuenow'));
                $(rpb).addClass('animated');
            }
        }
        function initRoundedProgress() {
            var roundedProgress = $('.progress-cicle');
            roundedProgress.each(function () {
                animateRoundedProgress(this);
            });
        }
        initRoundedProgress()
    }
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
                                <h6>Default Progress bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.bg-state</code> in <code>.progress-bar</code></p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Gradient Progress bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.bg-gradient-state</code> in <code>.progress-bar</code></p>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-gradient-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Striped Progress bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.progress-bar-striped</code> in <code>.progress-bar</code></p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Animated Progress bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.progress-bar-animated</code> in <code>.progress-bar</code></p>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-animated progress-bar-striped bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Progress bars with labels</h6>
                            </div>
                            <div className="ms-panel-body">
                                <span className="progress-label">Project 1</span>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                                <span className="progress-label">Project 2</span>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                                <span className="progress-label">Project 3</span>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                </div>
                                <span className="progress-label">Project 4</span>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                                </div>
                                <span className="progress-label">Project 5</span>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                </div>
                                <span className="progress-label">Project 6</span>
                                <div className="progress">
                                    <div className="progress-bar bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Small Progress Bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.progress-tiny</code> in <code>.progress</code></p>
                                <span className="progress-label">Project 1</span><span className="progress-status">25%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Project 2</span><span className="progress-status">50%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Project 3</span><span className="progress-status">75%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Project 4</span><span className="progress-status">100%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Project 5</span><span className="progress-status">75%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <span className="progress-label">Project 6</span><span className="progress-status">40%</span>
                                <div className="progress progress-tiny">
                                    <div className="progress-bar bg-light" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Round Progress Bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.bg-state</code> in <code>.progress-circle</code></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="progress-rounded">
                                            <div className="progress-value">12%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-success" cx={65} cy={65} r={57} strokeWidth={16} fill="none" aria-valuenow={12} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded">
                                            <div className="progress-value">38.8%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-info" cx={65} cy={65} r={57} strokeWidth={16} fill="none" aria-valuenow="38.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded">
                                            <div className="progress-value">78%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-warning" cx={65} cy={65} r={57} strokeWidth={16} fill="none" aria-valuenow="78.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded">
                                            <div className="progress-value">100%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-danger" cx={65} cy={65} r={57} strokeWidth={16} fill="none" aria-valuenow={100} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Small Round Progress Bars</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.progress-round-tiny</code> in <code>.progress-circle</code></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="progress-rounded progress-round-tiny">
                                            <div className="progress-value">12%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-success" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow={12} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded progress-round-tiny">
                                            <div className="progress-value">38.8%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-primary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="38.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded progress-round-tiny">
                                            <div className="progress-value">78.8%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-secondary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="78.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress-rounded progress-round-tiny">
                                            <div className="progress-value">100%</div>
                                            <svg>
                                                <circle className="progress-cicle bg-dark" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow={100} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                                </circle>
                                            </svg>
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