import React, { Component } from 'react';
import $ from 'jquery';

class Settings extends Component {
    adddarkmode = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-body');
        $(parentTask).toggleClass('ms-dark-theme');
    }
    addquickbar = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-body');
        $(parentTask).toggleClass('ms-has-quickbar');
    }
    render() {
        return (

            <div className="ms-quickbar-container text-center ms-invite-member">
                <div className="row">
                    <div className="col-md-12 text-left mb-5">
                        <h4 className="section-title bold">Customize</h4>
                        <div>
                            <label className="ms-switch">
                                <input type="checkbox" id="dark-mode" onClick={this.adddarkmode} /> <span className="ms-switch-slider round" />
                            </label> <span> Dark Mode </span>
                        </div>
                        <div>
                            <label className="ms-switch">
                                <input type="checkbox" id="remove-quickbar" onClick={this.addquickbar} /> <span className="ms-switch-slider round" />
                            </label> <span> Remove Quickbar </span>
                        </div>
                    </div>
                    <div className="col-md-12 text-left">
                        <h4 className="section-title bold">Keyboard Shortcuts</h4>
                        <p className="ms-directions mb-0"><code>Esc</code> Close Quick Bar</p>
                        <p className="ms-directions mb-0"><code>Alt + (1 -&gt; 6)</code> Open Quick Bar Tab</p>
                        <p className="ms-directions mb-0"><code>Alt + Q</code> Enable Quick Bar Configure Mode</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;