import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Basiccard from './Basiccard';
import Imagecard from './Imagecard';
import Socialcard from './Socialcard';
import Statecard from './Statecard';
import Gradientcard from './Gradientcard';
import HFcard from './HFcard';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-12">
                        <Basiccard/>
                    </div>
                    <div className="col-md-12">
                        <Imagecard/>
                    </div>
                    <div className="col-md-12">
                        <Socialcard/>
                    </div>
                    <div className="col-md-12">
                        <Statecard/>
                    </div>
                    <div className="col-md-12">
                        <Gradientcard/>
                    </div>
                    <div className="col-md-12">
                        <HFcard/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;