import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'
import Default from './Default';
import Withgap from './Withgap';
import Withicon from './Withicon';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default FAQ</h6>
                            </div>
                            <Default/>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>FAQ with Gap</h6>
                            </div>
                            <Withgap/>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>FAQ with Icon</h6>
                            </div>
                            <Withicon/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Content;