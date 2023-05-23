import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Catelougebox from '../sections/Menucatelogue/Catelougebox'
import Quickbar from '../layouts/Quickbar';

class Menucatalogue extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Catelougebox/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Menucatalogue;