import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Stepone from './style1/Steps';
import Steptwo from './style2/Steps';
import Stepthree from './style3/Steps';
import Stepfour from './style4/Steps';



class Content extends Component {

    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Default Wizard</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Stepone />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Wizard Style 2</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Steptwo />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Wizard Style 3</h6>
                            </div>
                            <div className="ms-panel-body ms-panel-fh">
                                <Stepthree />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Wizard Style 4</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Stepfour />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;