import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Homecontent from '../sections/Dashboard/Homecontent';
import Quickbar from '../layouts/Quickbar';

class Dashboard extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Homecontent/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Dashboard;