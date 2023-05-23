import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Round Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-state</code> for different states</p>
                                <button type="button" className="btn btn-primary">Primary</button>
                                <button type="button" className="btn btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-success">Success</button>
                                <button type="button" className="btn btn-danger">Danger</button>
                                <button type="button" className="btn btn-warning">Warning</button>
                                <button type="button" className="btn btn-info">Info</button>
                                <button type="button" className="btn btn-light">Light</button>
                                <button type="button" className="btn btn-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Square Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-square</code> for square buttons</p>
                                <button type="button" className="btn btn-square btn-primary">Primary</button>
                                <button type="button" className="btn btn-square btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-square btn-success">Success</button>
                                <button type="button" className="btn btn-square btn-danger">Danger</button>
                                <button type="button" className="btn btn-square btn-warning">Warning</button>
                                <button type="button" className="btn btn-square btn-info">Info</button>
                                <button type="button" className="btn btn-square btn-light">Light</button>
                                <button type="button" className="btn btn-square btn-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Pill Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-pill</code> for pill buttons</p>
                                <button type="button" className="btn btn-pill btn-primary">Primary</button>
                                <button type="button" className="btn btn-pill btn-secondary">Secondary</button>
                                <button type="button" className="btn btn-pill btn-success">Success</button>
                                <button type="button" className="btn btn-pill btn-danger">Danger</button>
                                <button type="button" className="btn btn-pill btn-warning">Warning</button>
                                <button type="button" className="btn btn-pill btn-info">Info</button>
                                <button type="button" className="btn btn-pill btn-light">Light</button>
                                <button type="button" className="btn btn-pill btn-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Round Outline Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-outline-state</code> for different outline states</p>
                                <button type="button" className="btn btn-outline-primary">Primary</button>
                                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn btn-outline-success">Success</button>
                                <button type="button" className="btn btn-outline-danger">Danger</button>
                                <button type="button" className="btn btn-outline-warning">Warning</button>
                                <button type="button" className="btn btn-outline-info">Info</button>
                                <button type="button" className="btn btn-outline-light">Light</button>
                                <button type="button" className="btn btn-outline-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Square Outline Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-square</code> for square outline buttons</p>
                                <button type="button" className="btn btn-square btn-outline-primary">Primary</button>
                                <button type="button" className="btn btn-square btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn btn-square btn-outline-success">Success</button>
                                <button type="button" className="btn btn-square btn-outline-danger">Danger</button>
                                <button type="button" className="btn btn-square btn-outline-warning">Warning</button>
                                <button type="button" className="btn btn-square btn-outline-info">Info</button>
                                <button type="button" className="btn btn-square btn-outline-light">Light</button>
                                <button type="button" className="btn btn-square btn-outline-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Pill Outline Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-pill</code> for pill outline buttons</p>
                                <button type="button" className="btn btn-pill btn-outline-primary">Primary</button>
                                <button type="button" className="btn btn-pill btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn btn-pill btn-outline-success">Success</button>
                                <button type="button" className="btn btn-pill btn-outline-danger">Danger</button>
                                <button type="button" className="btn btn-pill btn-outline-warning">Warning</button>
                                <button type="button" className="btn btn-pill btn-outline-info">Info</button>
                                <button type="button" className="btn btn-pill btn-outline-light">Light</button>
                                <button type="button" className="btn btn-pill btn-outline-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Round Gradient Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-gradient-state</code> for different gradient states</p>
                                <button type="button" className="btn btn-gradient-primary">Primary</button>
                                <button type="button" className="btn btn-gradient-secondary">Secondary</button>
                                <button type="button" className="btn btn-gradient-success">Success</button>
                                <button type="button" className="btn btn-gradient-danger">Danger</button>
                                <button type="button" className="btn btn-gradient-warning">Warning</button>
                                <button type="button" className="btn btn-gradient-info">Info</button>
                                <button type="button" className="btn btn-gradient-light">Light</button>
                                <button type="button" className="btn btn-gradient-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Square Gradient Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-square</code> for square gradient buttons</p>
                                <button type="button" className="btn btn-square btn-gradient-primary">Primary</button>
                                <button type="button" className="btn btn-square btn-gradient-secondary">Secondary</button>
                                <button type="button" className="btn btn-square btn-gradient-success">Success</button>
                                <button type="button" className="btn btn-square btn-gradient-danger">Danger</button>
                                <button type="button" className="btn btn-square btn-gradient-warning">Warning</button>
                                <button type="button" className="btn btn-square btn-gradient-info">Info</button>
                                <button type="button" className="btn btn-square btn-gradient-light">Light</button>
                                <button type="button" className="btn btn-square btn-gradient-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Pill Gradient Buttons</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-pill</code> for pill gradient buttons</p>
                                <button type="button" className="btn btn-pill btn-gradient-primary">Primary</button>
                                <button type="button" className="btn btn-pill btn-gradient-secondary">Secondary</button>
                                <button type="button" className="btn btn-pill btn-gradient-success">Success</button>
                                <button type="button" className="btn btn-pill btn-gradient-danger">Danger</button>
                                <button type="button" className="btn btn-pill btn-gradient-warning">Warning</button>
                                <button type="button" className="btn btn-pill btn-gradient-info">Info</button>
                                <button type="button" className="btn btn-pill btn-gradient-light">Light</button>
                                <button type="button" className="btn btn-pill btn-gradient-dark">Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Round Buttons with Icon</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-state</code> for different button states and <code>.has-icon</code> for icon buttons </p>
                                <button type="button" className="btn btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                                <button type="button" className="btn btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                                <button type="button" className="btn btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                                <button type="button" className="btn btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                                <button type="button" className="btn btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                                <button type="button" className="btn btn-info has-icon"><i className="flaticon-information" /> Info</button>
                                <button type="button" className="btn btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                                <button type="button" className="btn btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Square Buttons with Icon</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-square</code> for square icon buttons</p>
                                <button type="button" className="btn btn-square btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                                <button type="button" className="btn btn-square btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                                <button type="button" className="btn btn-square btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                                <button type="button" className="btn btn-square btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                                <button type="button" className="btn btn-square btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                                <button type="button" className="btn btn-square btn-info has-icon"><i className="flaticon-information" /> Info</button>
                                <button type="button" className="btn btn-square btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                                <button type="button" className="btn btn-square btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                            </div>
                        </div>
                        <div className="ms-panel ms-btn-display">
                            <div className="ms-panel-header">
                                <h6>Pill Buttons with Icon</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.btn-pill</code> for pill icon buttons</p>
                                <button type="button" className="btn btn-pill btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                                <button type="button" className="btn btn-pill btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                                <button type="button" className="btn btn-pill btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                                <button type="button" className="btn btn-pill btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                                <button type="button" className="btn btn-pill btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                                <button type="button" className="btn btn-pill btn-info has-icon"><i className="flaticon-information" /> Info</button>
                                <button type="button" className="btn btn-pill btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                                <button type="button" className="btn btn-pill btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Round Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.ms-btn-icon .btn-state</code> for different Icon states</p>
                                        <button type="button" className="ms-btn-icon btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Round Outline Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.ms-btn-icon-outline .btn-state</code> for different Icon states</p>
                                        <button type="button" className="ms-btn-icon-outline btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Square Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-square</code> for square Icon buttons</p>
                                        <button type="button" className="ms-btn-icon btn-square btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon btn-square btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Square Outline Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-square</code> for square Icon buttons</p>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-square btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Circle Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-pill</code> for circle Icon buttons</p>
                                        <button type="button" className="ms-btn-icon btn-pill btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon btn-pill btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Circle Outline Icon Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-pill</code> for circle Icon buttons</p>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-primary"><i className="flaticon-diamond" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-secondary"><i className="flaticon-star" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-success"><i className="flaticon-tick-inside-circle" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-danger"><i className="flaticon-alert-1" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-warning"><i className="flaticon-alert" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-info"><i className="flaticon-information" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                                        <button type="button" className="ms-btn-icon-outline btn-pill btn-dark"><i className="flaticon-reuse" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Button Groups</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-group.btn-group-toggle</code> as a parent for multiple <code>.btn</code></p>
                                        <ButtonToolbar>
                                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                <ToggleButton variant="light" value={1}>Active</ToggleButton>
                                                <ToggleButton variant="light" value={2}>Radio</ToggleButton>
                                                <ToggleButton variant="light" value={3}>Radio</ToggleButton>
                                            </ToggleButtonGroup>
                                        </ButtonToolbar>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.flex-column</code> for vertical button groups</p>
                                        <ButtonToolbar>
                                            <ToggleButtonGroup className="flex-column" type="radio" name="options" defaultValue={1}>
                                                <ToggleButton variant="light" value={1}>Active</ToggleButton>
                                                <ToggleButton variant="light" value={2}>Radio</ToggleButton>
                                                <ToggleButton variant="light" value={3}>Radio</ToggleButton>
                                            </ToggleButtonGroup>
                                        </ButtonToolbar>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="ms-panel ms-panel-fh ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Block Level Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <p className="ms-directions">Use <code>.btn-block</code> for block level buttons</p>
                                        <button type="button" className="btn btn-block btn-primary">Primary</button>
                                        <button type="button" className="btn btn-block btn-secondary">Secondary</button>
                                        <button type="button" className="btn btn-block btn-success">Success</button>
                                        <button type="button" className="btn btn-block btn-danger">Danger</button>
                                        <button type="button" className="btn btn-block btn-light">Danger</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Round Social Media Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <button type="button" className="btn bg-facebook has-icon"><i className="fab fa-facebook-f" /> Facebook</button>
                                        <button type="button" className="btn bg-twitter has-icon"><i className="fab fa-twitter" /> Twitter</button>
                                        <button type="button" className="btn bg-linkedin has-icon"><i className="fab fa-linkedin-in" /> Linkedin</button>
                                        <button type="button" className="btn bg-instagram has-icon"><i className="fab fa-instagram" /> Instagram</button>
                                        <button type="button" className="btn bg-g-plus has-icon"><i className="fab fa-google-plus-g" /> Google+</button>
                                        <button type="button" className="btn bg-pinterest has-icon"><i className="fab fa-pinterest-p" /> Pinterest</button>
                                        <button type="button" className="btn bg-dropbox has-icon"><i className="fab fa-dropbox" /> Dropbox</button>
                                        <button type="button" className="btn bg-dribble has-icon"><i className="fab fa-dribbble" /> Dribble</button>
                                    </div>
                                </div>
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Square Social Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <button type="button" className="btn btn-square bg-facebook has-icon"><i className="fab fa-facebook-f" /> Facebook</button>
                                        <button type="button" className="btn btn-square bg-twitter has-icon"><i className="fab fa-twitter" /> Twitter</button>
                                        <button type="button" className="btn btn-square bg-linkedin has-icon"><i className="fab fa-linkedin-in" /> Linkedin</button>
                                        <button type="button" className="btn btn-square bg-instagram has-icon"><i className="fab fa-instagram" /> Instagram</button>
                                        <button type="button" className="btn btn-square bg-g-plus has-icon"><i className="fab fa-google-plus-g" /> Google+</button>
                                        <button type="button" className="btn btn-square bg-pinterest has-icon"><i className="fab fa-pinterest-p" /> Pinterest</button>
                                        <button type="button" className="btn btn-square bg-dropbox has-icon"><i className="fab fa-dropbox" /> Dropbox</button>
                                        <button type="button" className="btn btn-square bg-dribble has-icon"><i className="fab fa-dribbble" /> Dribble</button>
                                    </div>
                                </div>
                                <div className="ms-panel ms-btn-display">
                                    <div className="ms-panel-header">
                                        <h6>Pill Social Buttons</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <button type="button" className="btn btn-pill bg-facebook has-icon"><i className="fab fa-facebook-f" /> Facebook</button>
                                        <button type="button" className="btn btn-pill bg-twitter has-icon"><i className="fab fa-twitter" /> Twitter</button>
                                        <button type="button" className="btn btn-pill bg-linkedin has-icon"><i className="fab fa-linkedin-in" /> Linkedin</button>
                                        <button type="button" className="btn btn-pill bg-instagram has-icon"><i className="fab fa-instagram" /> Instagram</button>
                                        <button type="button" className="btn btn-pill bg-g-plus has-icon"><i className="fab fa-google-plus-g" /> Google+</button>
                                        <button type="button" className="btn btn-pill bg-pinterest has-icon"><i className="fab fa-pinterest-p" /> Pinterest</button>
                                        <button type="button" className="btn btn-pill bg-dropbox has-icon"><i className="fab fa-dropbox" /> Dropbox</button>
                                        <button type="button" className="btn btn-pill bg-dribble has-icon"><i className="fab fa-dribbble" /> Dribble</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;