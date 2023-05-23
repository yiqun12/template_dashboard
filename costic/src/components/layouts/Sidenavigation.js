import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import logo from '../../assets/img/costic/costic-logo-216x62.png';

class Sidenavigation extends Component {

    removeoverlay = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    componentDidMount() {
        function setActiveMenuItem() {
            $('.ms-main-aside .menu-item>a').on('click', function () {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('active')) {
                    element.removeClass('active');
                    element.find('li').removeClass('active');
                    element.find('.collapse').slideUp();
                } else {
                    element.addClass('active');
                    element.children('.collapse').slideDown();
                    element.siblings('li').children('.collapse').slideUp();
                    element.siblings('li').removeClass('active');
                    element.siblings('li').find('li').removeClass('active');
                    element.siblings('li').find('.collapse').slideUp();
                }
            });
        }
        setActiveMenuItem();
    }
    render() {
        return (
            <div>
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" onClick={this.removeoverlay}></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler"></div>
                <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                    {/* Logo */}
                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* Navigation */}
                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        {/* Dashboard */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16" >dashboard</i>Dashboard </span>
                            </Link>
                            <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                                <li> <Link to="/">Costic</Link>
                                </li>
                            </ul>
                        </li>
                        {/* /Dashboard */}
                        {/* product */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fa fa-archive fs-16" />Menus </span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/menu-catalogue" >Menu Catalogue</Link>
                                </li>
                                <li> <Link to="/menu-list" >Menu List</Link>
                                </li>
                                <li> <Link to="/menu-grid" >Menu Grid</Link>
                                </li>
                                <li> <Link to="/add-product" >Add Product</Link>
                                </li >
                                <li> <Link to="/product-detail" >Product Detail</Link>
                                </li >
                            </ul >
                        </li >
                        {/* product end */}
                        {/* orders */}
                        <li className="menu-item">
                            <Link to="/orders"> <span><i className="fas fa-clipboard-list fs-16" />Orders</span>
                            </Link>
                        </li >
                        {/* orders end */}
                        {/* restaurants */}
                        <li className="menu-item">
                            <Link to="/restaurant-list"> <span><i className="fa fa-tasks fs-16" />Restaurants List</span>
                            </Link>
                        </li >
                        {/* restaurants end */}
                        {/* Invoice */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-file-invoice fs-16" />Invoice </span>
                            </Link>
                            <ul id="invoice" className="collapse" aria-labelledby="invoice" data-parent="#side-nav-accordion">
                                <li> <Link to="/invoice-detail" >Invoice Detail</Link>
                                </li>
                                <li> <Link to="/invoice-list" >Invoice List</Link>
                                </li>
                            </ul >
                        </li >
                        {/* Invoice end */}
                        {/* customers*/}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-user-friends fs-16" />Customers </span>
                            </Link>
                            <ul id="customer" className="collapse" aria-labelledby="customer" data-parent="#side-nav-accordion">
                                <li> <Link to="/customer-review" >Customers Review</Link>
                                </li>
                                <li> <Link to="/customer-list" >Customers List</Link>
                                </li>
                                <li> <Link to="/social-activity" >Social Activity</Link>
                                </li >
                            </ul >
                        </li >
                        {/* Customers  end */}
                        {/* sales */}
                        <li className="menu-item">
                            <Link to="/sales" > <span><i className="fa fa-briefcase fs-16" />Sales</span>
                            </Link>
                        </li >
                        {/* sales end  */}
                        < li className="menu-item" >
                            <Link to="/widgets"> <span><i className="material-icons fs-16">widgets</i>Widgets</span>
                            </Link>
                        </li >
                        {/* Basic UI Elements */}
                        <li className="menu-item" >
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">filter_list</i>Basic UI Elements</span>
                            </Link>
                            <ul id="basic-elements" className="collapse" aria-labelledby="basic-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="/accordions" >Accordions</Link>
                                </li>
                                <li> <Link to="/alerts" >Alerts</Link>
                                </li >
                                <li> <Link to="/buttons" >Buttons</Link>
                                </li >
                                <li> <Link to="/breadcrumbs" >Breadcrumbs</Link>
                                </li >
                                <li> <Link to="/badges" >Badges</Link>
                                </li >
                                <li> <Link to="/cards" >Cards</Link>
                                </li >
                                <li> <Link to="/progress-bars" >Progress Bars</Link>
                                </li >
                                <li> <Link to="/preloaders" >Pre-loaders</Link>
                                </li >
                                <li> <Link to="/pagination" >Pagination</Link>
                                </li >
                                <li> <Link to="/tabs" >Tabs</Link>
                                </li >
                                <li> <Link to="/typography" >Typography</Link>
                                </li >
                            </ul >
                        </li >
                        {/* /Basic UI Elements */}
                        {/* Advanced UI Elements */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">code</i>Advanced UI Elements</span>
                            </Link>
                            <ul id="advanced-elements" className="collapse" aria-labelledby="advanced-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="/draggables" >Draggables</Link>
                                </li>
                                <li> <Link to="/sliders" >Sliders</Link>
                                </li>
                                <li> <Link to="/modals" >Modals</Link>
                                </li >
                                <li> <Link to="/rating" >Rating</Link>
                                </li >
                                <li> <Link to="/tour" >Tour</Link>
                                </li >
                                <li> <Link to="/cropper" >Cropper</Link>
                                </li >
                                <li> <Link to="/range-slider" >Range Slider</Link>
                                </li >
                            </ul >
                        </li >
                        {/* /Advanced UI Elements */}
                        <li className="menu-item" >
                            <Link to="/animations"> <span><i className="material-icons fs-16">format_paint</i>Animations</span>
                            </Link>
                        </li>
                        {/* Form Elements */}
                        < li className="menu-item" >
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">input</i>Form Elements</span>
                            </Link>
                            <ul id="form-elements" className="collapse" aria-labelledby="form-elements" data-parent="#side-nav-accordion">
                                <li> <Link to="/form-elements" >Form Elements</Link>
                                </li>
                                <li> <Link to="/form-layouts" >Form Layouts</Link>
                                </li >
                                <li> <Link to="/form-validation" >Form Validation</Link>
                                </li >
                                <li> <Link to="/form-wizard" >Form Wizard</Link>
                                </li >
                            </ul >
                        </li >
                        {/* /Form Elements */}
                        {/* Charts */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">equalizer</i>Charts</span>
                            </Link>
                            <ul id="charts" className="collapse" aria-labelledby="charts" data-parent="#side-nav-accordion">
                                <li> <Link to="/chartjs" >Chart JS</Link>
                                </li>
                                <li> <Link to="/google-chart" >Google Chart</Link>
                                </li>
                            </ul >
                        </li >
                        {/* /Charts */}
                        {/* Tables */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">tune</i>Tables</span>
                            </Link>
                            <ul id="tables" className="collapse" aria-labelledby="tables" data-parent="#side-nav-accordion">
                                <li> <Link to="/basic-tables" >Basic Tables</Link>
                                </li>
                                <li> <Link to="/data-tables" >Data tables</Link>
                                </li>
                            </ul >
                        </li >
                        {/* /Tables */}
                        {/* Popups */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">message</i>Popups</span>
                            </Link>
                            <ul id="popups" className="collapse" aria-labelledby="popups" data-parent="#side-nav-accordion">
                                <li> <Link to="/sweet-alerts" >Sweet Alerts</Link>
                                </li>
                                <li> <Link to="/toast" >Toast</Link>
                                </li>
                            </ul >
                        </li >
                        {/* /Popups */}
                        {/* Icons */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">border_color</i>Icons</span>
                            </Link>
                            <ul id="icons" className="collapse" aria-labelledby="icons" data-parent="#side-nav-accordion">
                                <li> <Link to="/fontawesome" >Fontawesome</Link>
                                </li>
                                <li> <Link to="/flaticons" >Flaticons</Link>
                                </li>
                                <li> <Link to="/materialize" >Materialize</Link>
                                </li >
                            </ul >
                        </li >
                        {/* /Icons */}
                        {/* Maps */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">map</i>Maps</span>
                            </Link>
                            <ul id="maps" className="collapse" aria-labelledby="maps" data-parent="#side-nav-accordion">
                                <li> <Link to="/google-maps" >Google Maps</Link>
                                </li>
                                <li> <Link to="/vector-maps" >Vector Maps</Link>
                                </li>
                            </ul >
                        </li >
                        {/* /Maps */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#bonuspages" aria-expanded="false" aria-controls="bonuspages"> <span><i className="material-icons fs-16">insert_drive_file</i> Bonus Pages</span>
                            </Link>
                            <ul id="bonuspages" className="collapse" aria-labelledby="bonuspages" data-parent="#side-nav-accordion">
                                <li> <Link to="/web-analytics"> Web Analytics </Link>
                                </li>
                                <li> <Link to="/stock-management">Stock Management</Link>
                                </li>
                                <li> <Link to="/client-management">Client Management</Link>
                                </li>
                            </ul>
                        </li>
                        {/* / bonus Pages */}
                        {/* Pages */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages"> <span><i className="material-icons fs-16">insert_drive_file</i>Pages</span>
                            </Link>
                            <ul id="pages" className="collapse" aria-labelledby="pages" data-parent="#side-nav-accordion">
                                <li className="menu-item"> <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#authentication" aria-expanded="false" aria-controls="authentication">Authentication</Link>
                                    <ul id="authentication" className="collapse" aria-labelledby="authentication" data-parent="#pages">
                                        <li> <Link to="/default-login">Default Login</Link>
                                        </li>
                                        <li> <Link to="/modal-login">Modal Login</Link>
                                        </li>
                                        <li> <Link to="/default-register">Default Registration</Link>
                                        </li>
                                        <li> <Link to="/modal-register">Modal Registration</Link>
                                        </li>
                                        <li> <Link to="/lock-screen">Lock Screen</Link>
                                        </li >
                                    </ul >
                                </li >
                                <li> <Link to="/coming-soon">Coming Soon</Link>
                                </li >
                                <li> <Link to="/error">Error Page</Link>
                                </li >
                                <li className="menu-item"> <Link to="/faq"> FAQ </Link>
                                </li >
                                <li className="menu-item"> <Link to="/portfolio"> Portfolio </Link>
                                </li >
                                <li className="menu-item"> <Link to="/user-profile"> User Profile </Link>
                                </li >
                                <li className="menu-item"> <Link to="/invoice"> Invoice </Link>
                                </li >
                            </ul >
                        </li >
                        {/* Apps */}
                        < li className="menu-item" >
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16">phone_iphone</i>Apps</span>
                            </Link>
                            <ul id="apps" className="collapse" aria-labelledby="apps" data-parent="#side-nav-accordion">
                                <li> <Link to="/chat" >Chat</Link>
                                </li>
                                <li> <Link to="/email" >Email</Link>
                                </li>
                                <li> <Link to="/todo-list" >To-do List</Link>
                                </li >
                            </ul >
                        </li >
                        {/* /Apps */}
                    </ul >
                </Scrollbar >
            </div >
        );
    }
}

export default Sidenavigation;