import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Tab, Nav } from "react-bootstrap";

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Default Tabs</h6>
                            </div>
                            <div className="ms-panel-body clearfix">
                                <Tab.Container defaultActiveKey="tab13">
                                    <Nav variant="tabs" className="nav nav-tabs d-flex nav-justified mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab13">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab14">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab15">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab13">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab14">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab15">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Tabs Bordered</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.tabs-bordered</code> in <code>.nav-tabs</code></p>
                                <Tab.Container defaultActiveKey="tab1">
                                    <Nav variant="tabs" className="nav nav-tabs tabs-bordered d-flex nav-justified mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab1">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Left Tabs</h6>
                            </div>
                            <div className="ms-panel-body clearfix">
                                <p className="ms-directions">Use <code>.left-tabs</code> in <code>.nav-tabs</code></p>
                                <Tab.Container defaultActiveKey="tab7">
                                    <Nav variant="tabs" className="nav nav-tabs tabs-bordered left-tabs nav-justified">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab7">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab8">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab9">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab7">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab8">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab9">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Right Tabs</h6>
                            </div>
                            <div className="ms-panel-body clearfix">
                                <p className="ms-directions">Use <code>.right-tabs</code> in <code>.nav-tabs</code></p>
                                <Tab.Container defaultActiveKey="tab10">
                                    <Nav variant="tabs" className="nav nav-tabs tabs-bordered right-tabs nav-justified">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab10">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab11">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab12">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab10">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab11">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab12">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Tab Pills</h6>
                            </div>
                            <div className="ms-panel-body clearfix">
                                <p className="ms-directions">Use <code>.tab-pills</code> with <code>.has-gap</code> in <code>.nav-tabs</code></p>
                                <Tab.Container defaultActiveKey="tab4">
                                    <Nav variant="pills" className="nav nav-tabs d-flex tab-pills has-gap nav-justified mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab5">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab6">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab4">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab5">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab6">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Tab Round</h6>
                            </div>
                            <div className="ms-panel-body clearfix">
                                <p className="ms-directions">Use <code>.tabs-round</code> with <code>.has-gap</code> in <code>.nav-tabs</code></p>
                                <Tab.Container defaultActiveKey="tab16">
                                    <Nav variant="tabs" className="nav nav-tabs d-flex tabs-round has-gap nav-justified mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab16">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab17">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab18">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab16">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab17">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab18">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;