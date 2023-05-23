import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const closeIcon = (
    <div className="close">
        <span aria-hidden="true">×</span>
    </div>
)
class Notes extends Component {
    state = {
        open: false,
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    deletecardbtn = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-deletable');
        $(parentTask).slideUp('slow', function () { $(parentTask).remove(); });
    }
    render() {
        const { open } = this.state;
        return (
            <div>

                <ul className="ms-qa-options">
                    <li>
                        <Link to="#" onClick={this.onOpenModal}> <i className="flaticon-sticky-note" /> New Note</Link>
                    </li>
                    <li>
                        <Link to="#"> <i className="flaticon-excel" /> Export to Excel</Link>
                    </li>
                </ul>

                
                    <Scrollbar className="ms-quickbar-container ms-scrollable">
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Don't forget to check with the designer</h6>
                            </div>
                            <div className="ms-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque, vel varius metus. Pellentesque eget orci malesuada, venenatis magna et</p>
                                <ul className="ms-note-members clearfix mb-0">
                                    <li className="ms-deletable">
                                        <img src="assets/img/people/people-3.jpg" alt="member" />
                                    </li>
                                    <li className="ms-deletable">
                                        <img src="assets/img/people/people-5.jpg" alt="member" />
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Dropdown className="dropdown float-left">
                                    <Dropdown.Toggle className="text-disabled"> <i className="flaticon-share-1" /> Share</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <li className="dropdown-menu-header">
                                            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                                        </li>
                                        <li className="dropdown-divider" />
                                        <li className="ms-scrollable ms-dropdown-list ms-members-list">
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>John Doe</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>Raymart Sandiago</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>Heather Brown</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="ms-note-editor float-right">
                                    <Link to="#" className="text-disabled mr-2" onClick={this.onOpenModal}> <i className="flaticon-pencil"> </i> Edit</Link>
                                    <Link to="#" className="text-disabled  ms-delete-trigger"  onClick={this.deletecardbtn}> <i className="flaticon-trash"> </i> Delete</Link>
                                </div>
                            </div>
                        </div>
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Perform the required unit tests</h6>
                            </div>
                            <div className="ms-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate urna in faucibus venenatis. Etiam at dapibus neque, vel varius metus. Pellentesque eget orci malesuada, venenatis magna et</p>
                                <ul className="ms-note-members clearfix mb-0">
                                    <li className="ms-deletable">
                                        <img src="assets/img/people/people-9.jpg" alt="member" />
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Dropdown className="dropdown float-left">
                                    <Dropdown.Toggle className="text-disabled"> <i className="flaticon-share-1" /> Share</Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <li className="dropdown-menu-header">
                                            <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Share With</span></h6>
                                        </li>
                                        <li className="dropdown-divider" />
                                        <li className="ms-scrollable ms-dropdown-list ms-members-list">
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-10.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>John Doe</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-9.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>Raymart Sandiago</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="mr-2 align-self-center">
                                                    <img src="assets/img/people/people-7.jpg" className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body"> <span>Heather Brown</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="ms-note-editor float-right">
                                    <Link to="#" className="text-disabled mr-2" onClick={this.onOpenModal}> <i className="flaticon-pencil"> </i> Edit</Link>
                                    <Link to="#" className="text-disabled  ms-delete-trigger" onClick={this.deletecardbtn}> <i className="flaticon-trash"> </i> Delete</Link>
                                </div>
                            </div>
                        </div>
                    </Scrollbar>
                

                <Modal open={open} onClose={this.onCloseModal} closeIcon={closeIcon} center classNames={{
                    modal: 'reminder-modal p-0',
                }}>
                    <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <h5 className="modal-title has-icon text-white" id="NoteModal">New Note</h5>

                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="ms-form-group">
                                    <label>Note Title</label>
                                    <input type="text" className="form-control" name="note-title" />
                                </div>
                                <div className="ms-form-group">
                                    <label>Note Description</label>
                                    <textarea className="form-control" name="note-description" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" onClick={this.onCloseModal}>Close</button>
                                <button type="button" className="btn btn-secondary shadow-none" onClick={this.onCloseModal}>Add Note</button>
                            </div>
                        </form>
                    </div>

                </Modal>
            </div>
        );
    }
}

export default Notes;