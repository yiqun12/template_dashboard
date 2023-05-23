import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Restaurentcontent from '../sections/Restaurant-list/Restaurantcontent'
import Quickbar from '../layouts/Quickbar';

class Restaurantlist extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Restaurentcontent/>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Restaurantlist;