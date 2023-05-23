import React, { Component } from 'react';
import $ from 'jquery';


class Favorder extends Component {
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
            <div className="col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Favourite Orders</h6>
                    </div>
                    <div className="ms-panel-body order-circle">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <h6 className="text-center">Pizza</h6>
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">12%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-success" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow={12} aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <h6 className="text-center">Mexican Noodels</h6>
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">38.8%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-primary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="38.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <h6 className="text-center">Spicy Salad</h6>
                                <div className="progress-rounded progress-round-tiny">
                                    <div className="progress-value">78.8%</div>
                                    <svg>
                                        <circle className="progress-cicle bg-secondary" cx={65} cy={65} r={57} strokeWidth={4} fill="none" aria-valuenow="78.8" aria-orientation="vertical" aria-valuemin={0} aria-valuemax={100} role="slider">
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <h6 className="text-center">French Fries</h6>
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
        );
    }
}

export default Favorder;