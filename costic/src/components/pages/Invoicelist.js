import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Listcontent from '../sections/Invoicelist/Listcontent'
import Quickbar from '../layouts/Quickbar';

class Invoicelist extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Listcontent/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Invoicelist;