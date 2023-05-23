import React, { Component } from 'react';

class Skilllevel extends Component {
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-body">
                    <h2 className="section-title">Skill level</h2>
                    <span className="progress-label">Web Design</span><span className="progress-status">83%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="progress-label">Development</span><span className="progress-status">50%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="progress-label">Interface Design</span><span className="progress-status">75%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="progress-label">Illustration</span><span className="progress-status">92%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '92%' }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="progress-label">Brand Design</span><span className="progress-status">97%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '97%' }} aria-valuenow={97} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <span className="progress-label">Adobe</span><span className="progress-status">90%</span>
                    <div className="progress progress-tiny">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skilllevel;