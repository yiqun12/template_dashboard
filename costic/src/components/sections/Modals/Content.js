import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { Modal, Accordion, Card } from "react-bootstrap";


class Content extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleShow4 = this.handleShow4.bind(this);
        this.handleShow5 = this.handleShow5.bind(this);
        this.handleShow6 = this.handleShow6.bind(this);
        this.handleShow7 = this.handleShow7.bind(this);
        this.handleShow8 = this.handleShow8.bind(this);
        this.handleShow9 = this.handleShow9.bind(this);
        this.handleShow10 = this.handleShow10.bind(this);
        this.handleShow11 = this.handleShow11.bind(this);
        this.handleShow12 = this.handleShow12.bind(this);
        this.handleShow13 = this.handleShow13.bind(this);
        this.handleShow14 = this.handleShow14.bind(this);
        this.handleShow15 = this.handleShow15.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        };
    }
    handleShow1() {
        this.setState({ show1: true });
    }
    handleShow2() {
        this.setState({ show2: true });
    }
    handleShow3() {
        this.setState({ show3: true });
    }
    handleShow4() {
        this.setState({ show4: true });
    }
    handleShow5() {
        this.setState({ show5: true });
    }
    handleShow6() {
        this.setState({ show6: true });
    }
    handleShow7() {
        this.setState({ show7: true });
    }
    handleShow8() {
        this.setState({ show8: true });
    }
    handleShow9() {
        this.setState({ show9: true });
    }
    handleShow10() {
        this.setState({ show10: true });
    }
    handleShow11() {
        this.setState({ show11: true });
    }
    handleShow12() {
        this.setState({ show12: true });
    }
    handleShow13() {
        this.setState({ show13: true });
    }
    handleShow14() {
        this.setState({ show14: true });
    }
    handleShow15() {
        this.setState({ show15: true });
    }
    handleClose() {
        this.setState({ show2: false });
        this.setState({ show1: false });
        this.setState({ show3: false });
        this.setState({ show4: false });
        this.setState({ show5: false });
        this.setState({ show6: false });
        this.setState({ show7: false });
        this.setState({ show8: false });
        this.setState({ show9: false });
        this.setState({ show10: false });
        this.setState({ show11: false });
        this.setState({ show12: false });
        this.setState({ show13: false });
        this.setState({ show14: false });
        this.setState({ show15: false });
    }

    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Modals Style 1</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Important Notice</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow1}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header>
                                            <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-alert-1 bg-primary text-white" /> Important Notice!</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue />
                                                    <i className="ms-checkbox-check" />
                                                </label>
                                                <span> Don't Show me Again </span>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                                            <button type="button" className="btn btn-primary shadow-none">Accept</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">User Concent</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow2}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show2} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header>
                                            <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-placeholder bg-primary text-white" /> Allow Location Tracking?</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <Link to="#" className="btn-link"> Learn More </Link>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Don't Allow</button>
                                            <button type="button" className="btn btn-primary shadow-none">Allow</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Opt-in Form</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow3}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show3} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header>
                                            <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-share bg-primary text-white" /> Subscribe to our Newsletter</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <label>Get our latest updates</label>
                                                    <input type="text" placeholder="Email Address" className="form-control" name="news-letter" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                            <button type="button" className="btn btn-primary shadow-none">Submit</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Terms and Agreements</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow4}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show4} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header>
                                            <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-alert bg-primary text-white" /> Terms and Agreements </h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ultrices massa, non consectetur nunc. Nullam erat magna, aliquet sed nibh non, pellentesque fermentum justo. Integer sed imperdiet sapien, vel pulvinar tellus. Donec sed justo ac urna volutpat malesuada eget vestibulum libero. Morbi gravida auctor diam. Nunc varius, nibh vel pharetra viverra, urna odio mattis ligula, id fringilla elit ante non erat. Vivamus suscipit blandit ipsum, non maximus augue hendrerit ac.
                                                Maecenas et vulputate purus, consequat fermentum ante. Pellentesque ac dolor enim. Nam nec pulvinar purus. Nulla ut sollicitudin arcu, non hendrerit dui. Ut non massa lorem. Nunc tincidunt, tellus vel fringilla finibus, ligula tellus ultrices velit, consequat maximus velit sapien sit amet nisl. Morbi ac tincidunt arcu. Integer et consectetur diam, non finibus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam laoreet velit tempor malesuada finibus. Duis tristique malesuada velit vitae consequat. Praesent elementum ullamcorper luctus. Morbi a hendrerit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pellentesque luctus eros eu malesuada. Mauris sed rhoncus augue.
                                                Sed blandit commodo ex eget suscipit. Maecenas elit massa, faucibus et viverra eget, rutrum id dolor. Proin vel purus varius, facilisis libero vitae, venenatis sapien. Integer fermentum interdum felis, et sagittis lectus consequat id. Curabitur accumsan arcu maximus placerat blandit. Cras rhoncus, sapien id mollis accumsan, turpis libero pharetra enim, at hendrerit neque libero ut massa. Ut tincidunt sapien ac lacinia aliquam. Nullam tincidunt erat ex, eu sagittis turpis maximus in. Donec quis porttitor odio. Aliquam id neque sapien. Suspendisse ultricies nibh dictum felis viverra, nec suscipit lectus blandit. Maecenas condimentum justo justo, sed mollis arcu rhoncus in. Curabitur eget scelerisque diam. Etiam sit amet euismod est. Integer ut massa in nulla lacinia hendrerit. Proin eu justo ut ligula tempus vulputate consequat eget odio.
                                                Integer lobortis libero libero, nec pulvinar libero porta non. Mauris eget bibendum lectus. Maecenas et vestibulum libero, quis suscipit odio. Aenean nec orci vitae nibh pellentesque venenatis vel vitae mi. Quisque dapibus risus eu massa venenatis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor interdum purus et varius. Praesent lobortis pharetra dolor ac facilisis. Sed at sem ullamcorper, efficitur diam fermentum, egestas nunc. Cras commodo dictum tellus sit amet convallis. Integer interdum velit sed mauris volutpat, vel tincidunt diam interdum. Fusce cursus nunc in tellus convallis, sit amet tincidunt neque molestie. Fusce a metus augue. Nunc id urna pretium, porta turpis ut, molestie felis. Donec a lorem quis ligula consectetur pulvinar. Cras a diam magna.
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue />
                                                    <i className="ms-checkbox-check" />
                                                </label>
                                                <span> I Agree to the Terms </span>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                                            <button type="button" className="btn btn-primary shadow-none">Continue</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Modals Style 2</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Important Notice</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow5}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show5} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header className="bg-primary">
                                            <h3 className="modal-title has-icon ms-icon-round  text-white"><i className="flaticon-alert-1 bg-primary text-white" /> Important Notice!</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue />
                                                    <i className="ms-checkbox-check" />
                                                </label>
                                                <span> Don't Show me Again </span>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                                            <button type="button" className="btn btn-primary shadow-none">Accept</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">User Concent</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow6}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show6} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header className="bg-primary">
                                            <h3 className="modal-title has-icon ms-icon-round text-white"><i className="flaticon-placeholder bg-primary text-white" /> Allow Location Tracking?</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <Link to="#" className="btn-link"> Learn More </Link>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Don't Allow</button>
                                            <button type="button" className="btn btn-primary shadow-none">Allow</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Opt-in Form</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow7}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show7} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header className="bg-primary">
                                            <h3 className="modal-title has-icon ms-icon-round text-white"><i className="flaticon-share bg-primary text-white" /> Subscribe to our Newsletter</h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <label>Get our latest updates</label>
                                                    <input type="text" placeholder="Email Address" className="form-control" name="news-letter" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                            <button type="button" className="btn btn-primary shadow-none">Submit</button>
                                        </Modal.Footer>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Terms and Agreements</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow8}> Click Me </button>
                                    </div>
                                    <Modal show={this.state.show8} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Header className="bg-primary">
                                            <h3 className="modal-title has-icon ms-icon-round text-white"><i className="flaticon-alert bg-primary text-white" /> Terms and Agreements </h3>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ultrices massa, non consectetur nunc. Nullam erat magna, aliquet sed nibh non, pellentesque fermentum justo. Integer sed imperdiet sapien, vel pulvinar tellus. Donec sed justo ac urna volutpat malesuada eget vestibulum libero. Morbi gravida auctor diam. Nunc varius, nibh vel pharetra viverra, urna odio mattis ligula, id fringilla elit ante non erat. Vivamus suscipit blandit ipsum, non maximus augue hendrerit ac.
                                                Maecenas et vulputate purus, consequat fermentum ante. Pellentesque ac dolor enim. Nam nec pulvinar purus. Nulla ut sollicitudin arcu, non hendrerit dui. Ut non massa lorem. Nunc tincidunt, tellus vel fringilla finibus, ligula tellus ultrices velit, consequat maximus velit sapien sit amet nisl. Morbi ac tincidunt arcu. Integer et consectetur diam, non finibus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam laoreet velit tempor malesuada finibus. Duis tristique malesuada velit vitae consequat. Praesent elementum ullamcorper luctus. Morbi a hendrerit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pellentesque luctus eros eu malesuada. Mauris sed rhoncus augue.
                                                Sed blandit commodo ex eget suscipit. Maecenas elit massa, faucibus et viverra eget, rutrum id dolor. Proin vel purus varius, facilisis libero vitae, venenatis sapien. Integer fermentum interdum felis, et sagittis lectus consequat id. Curabitur accumsan arcu maximus placerat blandit. Cras rhoncus, sapien id mollis accumsan, turpis libero pharetra enim, at hendrerit neque libero ut massa. Ut tincidunt sapien ac lacinia aliquam. Nullam tincidunt erat ex, eu sagittis turpis maximus in. Donec quis porttitor odio. Aliquam id neque sapien. Suspendisse ultricies nibh dictum felis viverra, nec suscipit lectus blandit. Maecenas condimentum justo justo, sed mollis arcu rhoncus in. Curabitur eget scelerisque diam. Etiam sit amet euismod est. Integer ut massa in nulla lacinia hendrerit. Proin eu justo ut ligula tempus vulputate consequat eget odio.
                                                Integer lobortis libero libero, nec pulvinar libero porta non. Mauris eget bibendum lectus. Maecenas et vestibulum libero, quis suscipit odio. Aenean nec orci vitae nibh pellentesque venenatis vel vitae mi. Quisque dapibus risus eu massa venenatis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor interdum purus et varius. Praesent lobortis pharetra dolor ac facilisis. Sed at sem ullamcorper, efficitur diam fermentum, egestas nunc. Cras commodo dictum tellus sit amet convallis. Integer interdum velit sed mauris volutpat, vel tincidunt diam interdum. Fusce cursus nunc in tellus convallis, sit amet tincidunt neque molestie. Fusce a metus augue. Nunc id urna pretium, porta turpis ut, molestie felis. Donec a lorem quis ligula consectetur pulvinar. Cras a diam magna.
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="modal-notice">
                                                <label className="ms-checkbox-wrap">
                                                    <input type="checkbox" defaultValue />
                                                    <i className="ms-checkbox-check" />
                                                </label>
                                                <span> I Agree to the Terms </span>
                                            </div>
                                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                                            <button type="button" className="btn btn-primary shadow-none">Continue</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Modals Style 3</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Congragulations message</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow9}> Click Me </button>
                                    </div>
                                    <Modal className="modal-min" show={this.state.show9} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body className="text-center">
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <i className="flaticon-tick-inside-circle d-block" />
                                            <h1>Congragulations!</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ultrices massa, non consectetur nunc. Nullam erat magna,
                                                aliquet sed nibh non, pellentesque fermentum justo. Integer sed imperdiet sapien, vel pulvinar tellus. Donec sed justo ac urna
                                            </p>
                                            <button type="button" className="btn btn-primary shadow-none">Get Started</button>
                                        </Modal.Body>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Opt-in Form</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow10}> Click Me </button>
                                    </div>
                                    <Modal className="modal-min" show={this.state.show10} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body className="text-center">
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <i className="flaticon-email d-block" />
                                            <h1>Subscribe</h1>
                                            <p> Subscribe and get our latest updates </p>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <input type="text" placeholder="Email Address" className="form-control" name="news-letter" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                                <button type="submit" className="btn btn-primary shadow-none">Get Started</button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Account Login</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow11}> Click Me </button>
                                    </div>
                                    <Modal className="modal-min" show={this.state.show11} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body className="text-center">
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <i className="flaticon-user d-block" />
                                            <h1>Login to your Account</h1>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <input type="text" placeholder="Email Address" className="form-control" name="email" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                                <div className="ms-form-group has-icon">
                                                    <input type="password" placeholder="Password" className="form-control" name="password" />
                                                    <i className="material-icons">security</i>
                                                </div>
                                                <button type="submit" className="btn btn-primary shadow-none">Login</button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Forgot Password</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow12}> Click Me </button>
                                    </div>
                                    <Modal className="modal-min" show={this.state.show12} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body className="text-center">
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <i className="flaticon-secure-shield d-block" />
                                            <h1>Forgot Password?</h1>
                                            <p> Enter your email to recover your password </p>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                                <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Modals Style 3</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">User Concent</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow13}> Click Me </button>
                                    </div>
                                    <Modal className="modal-max" show={this.state.show13} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <h1>Are You Sure?</h1>
                                            <ul className="ms-list">
                                                <li className="ms-list-item media">
                                                    <i className="flaticon-start align-self-center" />
                                                    <div className="media-body">
                                                        <p>It is a long established fact that a reader will be distracted by the content</p>
                                                    </div>
                                                </li>
                                                <li className="ms-list-item media">
                                                    <i className="flaticon-email align-self-center" />
                                                    <div className="media-body">
                                                        <p>It is a long established fact that a reader will be distracted by the content</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="d-flex justify-content-between">
                                                <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                                <button type="button" className="btn btn-primary shadow-none">Get Started</button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Opt-in Form</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow14}> Click Me </button>
                                    </div>
                                    <Modal className="modal-max" show={this.state.show14} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <h1>Subscribe to our Newsletter</h1>
                                            <p>It is a long established fact that a reader will be distracted by the content</p>
                                            <form method="post">
                                                <div className="ms-form-group has-icon">
                                                    <input type="text" placeholder="Email Address" className="form-control" name="subscribe" />
                                                    <i className="material-icons">email</i>
                                                </div>
                                                <div className="modal-notice">
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="checkbox" />
                                                        <i className="ms-checkbox-check" />
                                                    </label>
                                                    <span> Include Promotional Emails </span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                                    <button type="submit" className="btn btn-primary shadow-none">Subscribe</button>
                                                </div>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Reminder</h6>
                                        <button className="btn btn-primary" onClick={this.handleShow15}> Click Me </button>
                                    </div>
                                    <Modal className="modal-max" show={this.state.show15} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                                        centered>
                                        <Modal.Body>
                                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                            <h1>A Privacy Reminder from our site</h1>
                                            <p> Leverage agile frameworks to provide a robust synopsis</p>


                                            <Accordion className="has-gap ms-accordion-chevron" defaultActiveKey="0">
                                                <Card>
                                                    <Accordion.Collapse className="collapseparent" eventKey="0">
                                                        <Card.Body>
                                                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <span> How we manage site cookies to improve user experience. </span>
                                                    </Accordion.Toggle>
                                                </Card>
                                                <Card>
                                                    <Accordion.Collapse className="collapseparent" eventKey="1">
                                                        <Card.Body>
                                                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <span> What kind of data we process when you use our site </span>
                                                    </Accordion.Toggle>
                                                </Card>
                                            </Accordion>
                                            <div className="d-flex justify-content-between">
                                                <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                                <button type="button" className="btn btn-primary shadow-none" data-dismiss="modal">Continue</button>
                                            </div>

                                        </Modal.Body>
                                    </Modal>
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