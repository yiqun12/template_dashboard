import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Quickbar from '../layouts/Quickbar';
import Content from '../sections/Googlechart/Content';

class Morrischart extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Content/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Morrischart;