import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Breadcrumb from '../sections/Orders/Breadcrumb';
import Favorder from '../sections/Orders/Favorder';
import Ordertable from '../sections/Orders/Ordertable';
import Quickbar from '../layouts/Quickbar';

class Orders extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <Breadcrumb/>
                                <Favorder/>
                                <Ordertable/>
                            </div>
                        </div>
                    </div>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default Orders;