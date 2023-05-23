import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Default from './Default';
import Withgap from './Withgap';
import Withicon from './Withicon';
import Withicongap from './Withicongap';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-6">
                        <Default/>
                    </div>
                    <div className="col-md-6">
                        <Withgap/>
                    </div>
                    <div className="col-md-6">
                        <Withicon/>
                    </div>
                    <div className="col-md-6">
                        <Withicongap/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;