import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Topfood from './Topfood';
import Youtubess from './Youtubess';
import Twitterfeed from './Twitterfeed';
import Facebookfeed from './Facebookfeed';
import Instagramfeed from './Instagramfeed';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb/>
                    </div>
                    {/* Overview */}
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-header-text">
                                        <h6>Social Activity</h6>
                                        <p>Quick overview on your social media platforms</p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Add New Account</button>
                                </div>
                            </div>
                            <div className="ms-panel-body pb-0">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6">
                                        <div className="ms-card card-twitter ms-widget ms-infographics-widget">
                                            <div className="ms-card-body media">
                                                <div className="media-body">
                                                    <h6>Total Tweets</h6>
                                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 12,039</p>
                                                    <p className="fs-12">48% From Last 24 Hours</p>
                                                </div>
                                            </div> <i className="fab fa-twitter-square" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="ms-card card-linkedin ms-widget ms-infographics-widget">
                                            <div className="ms-card-body media">
                                                <div className="media-body">
                                                    <h6>Total Followers</h6>
                                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 3,819</p>
                                                    <p className="fs-12">48% From Last 24 Hours</p>
                                                </div>
                                            </div> <i className="fab fa-linkedin" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="ms-card card-facebook ms-widget ms-infographics-widget">
                                            <div className="ms-card-body media">
                                                <div className="media-body">
                                                    <h6>Total Likes</h6>
                                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 9,289</p>
                                                    <p className="fs-12">48% From Last 24 Hours</p>
                                                </div>
                                            </div> <i className="fab fa-facebook" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6">
                                        <div className="ms-card card-instagram ms-widget ms-infographics-widget">
                                            <div className="ms-card-body media">
                                                <div className="media-body">
                                                    <h6>Total Followers</h6>
                                                    <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 7,658</p>
                                                    <p className="fs-12">48% From Last 24 Hours</p>
                                                </div>
                                            </div> <i className="fab fa-instagram" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className=" d-flex justify-content-between">
                                    <div className="ms-header-text">
                                        <h6>Social Media Conversations</h6>
                                        <p>Track your social media conversations</p>
                                    </div>
                                    <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Link New Source</button>
                                </div>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Source</th>
                                                <th scope="col" colSpan={3}>Conversation</th>
                                                <th scope="col" colSpan={2}>Sessions</th>
                                                <th scope="col">Avg. Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Facebook</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>76</td>
                                                <td className="ms-text-success">+64</td>
                                                <td>76</td>
                                                <td className="ms-text-success">+64</td>
                                                <td>9.12%</td>
                                            </tr>
                                            <tr>
                                                <td>Twitter</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>26</td>
                                                <td className="ms-text-success">+10</td>
                                                <td>26</td>
                                                <td className="ms-text-success">+10</td>
                                                <td>7.65%</td>
                                            </tr>
                                            <tr>
                                                <td>Linkedin</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>14</td>
                                                <td className="ms-text-success">+7</td>
                                                <td>14</td>
                                                <td className="ms-text-success">+7</td>
                                                <td>14.29%</td>
                                            </tr>
                                            <tr>
                                                <td>Google +</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>12</td>
                                                <td className="ms-text-danger">-8</td>
                                                <td>12</td>
                                                <td className="ms-text-danger">-8</td>
                                                <td>10.99%</td>
                                            </tr>
                                            <tr>
                                                <td>Instagram</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>4</td>
                                                <td className="ms-text-success">+2</td>
                                                <td>4</td>
                                                <td className="ms-text-success">+2</td>
                                                <td>22.35%</td>
                                            </tr>
                                            <tr>
                                                <td>Youtube</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>86</td>
                                                <td className="ms-text-danger">-33</td>
                                                <td>86</td>
                                                <td className="ms-text-danger">-33</td>
                                                <td>34.12%</td>
                                            </tr>
                                            <tr>
                                                <td>Skype</td>
                                                <td className="w-25">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </td>
                                                <td>23</td>
                                                <td className="ms-text-success">+48</td>
                                                <td>23</td>
                                                <td className="ms-text-success">+48</td>
                                                <td>3.75%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Conversations */}
                    <div className="col-xl-4 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Social Media Followers</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="ms-social-media-followers">
                                    <div className="ms-social-grid"> <i className="fab fa-linkedin-in bg-linkedin" />
                                        <p className="ms-text-dark">8,033</p> <span>Followers</span>
                                    </div>
                                    <div className="ms-social-grid"> <i className="fab fa-twitter bg-twitter" />
                                        <p className="ms-text-dark">8,039</p> <span>Followers</span>
                                    </div>
                                </div>
                                <div className="ms-social-media-followers">
                                    <div className="ms-social-grid"> <i className="fab fa-facebook-f bg-facebook" />
                                        <p className="ms-text-dark">8,039</p> <span>Likes</span>
                                    </div>
                                    <div className="ms-social-grid"> <i className="fab fa-instagram bg-instagram" />
                                        <p className="ms-text-dark">98,039</p> <span>Followers</span>
                                    </div>
                                </div>
                                <div className="ms-social-media-followers">
                                    <div className="ms-social-grid"> <i className="fab fa-youtube bg-youtube" />
                                        <p className="ms-text-dark">8,039</p> <span>Subscribers</span>
                                    </div>
                                    <div className="ms-social-grid"> <i className="fab fa-google-plus-g bg-g-plus" />
                                        <p className="ms-text-dark">98,039</p> <span>Followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Youtube Subscribers */}
                    <div className="col-xl-6 col-md-12">
                       <Youtubess/>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <Topfood/>
                    </div>
                    {/* Twitter Feed */}
                    <div className="col-xl-4 col-md-12">
                        <Twitterfeed/>
                    </div>
                    {/* Facebook Feed */}
                    <div className="col-xl-4 col-md-12">
                        <Facebookfeed/>
                    </div>
                    {/* Instagram Feed */}
                    <div className="col-xl-4 col-md-12">
                        <Instagramfeed/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;