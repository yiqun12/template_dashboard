import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Listcontent from '../sections/Menulist/Listcontent';
import Quickbar from '../layouts/Quickbar';

class Menulist extends Component {
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

export default Menulist;