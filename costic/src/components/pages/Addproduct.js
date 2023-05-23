import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Addproductcontent from '../sections/Addproduct/Addproductcontent'
import Quickbar from '../layouts/Quickbar';

class Addproduct extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Addproductcontent/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Addproduct;