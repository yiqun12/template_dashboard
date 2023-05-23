import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const closeIcon = (
    <div className="close">
        <span aria-hidden="true">×</span>
    </div>
)
class Reminder extends Component {
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
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        const { open } = this.state;
        return (

            <div className="ms-quickbar-container ms-reminders">
                <ul className="ms-qa-options">
                    <li>
                        <Link to="#" onClick={this.onOpenModal}> <i className="flaticon-bell" /> New Reminder</Link>
                    </li>
                </ul>
                <Scrollbar className="ms-quickbar-container ms-scrollable">
                    <div className="ms-card ms-qa-card ms-deletable">
                        <div className="ms-card-body">
                            <p>Developer Meeting in Block B</p> <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Today - 3:45 pm</span>
                        </div>
                        <div className="ms-card-footer clearfix">
                            <div className="ms-note-editor float-right">
                                <Link to="#" className="text-disabled mr-2" onClick={this.onOpenModal}> <i className="flaticon-pencil"> </i> Edit</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger" onClick={this.deletecardbtn}> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ms-card ms-qa-card ms-deletable">
                        <div className="ms-card-body">
                            <p>Start adding change log to version 2</p> <span className="text-disabled fs-12"><i className="material-icons fs-14">access_time</i> Tomorrow - 12:00 pm</span>
                        </div>
                        <div className="ms-card-footer clearfix">
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
                            <h5 className="modal-title has-icon text-white"> New Reminder</h5>

                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="ms-form-group">
                                    <label>Remind me about</label>
                                    <textarea className="form-control" name="reminder" defaultValue={""} />
                                </div>
                                <div className="ms-form-group"> <span className="ms-option-name fs-14">Repeat Daily</span>
                                    <label className="ms-switch float-right">
                                        <input type="checkbox" /> <span className="ms-switch-slider round" />
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ms-form-group">
                                            <DatePicker className="form-control datepicker"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="ms-form-group">
                                            <select className="form-control" name="reminder-time">
                                                <option value>12:00 pm</option>
                                                <option value>1:00 pm</option>
                                                <option value>2:00 pm</option>
                                                <option value>3:00 pm</option>
                                                <option value>4:00 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" onClick={this.onCloseModal}>Close</button>
                                <button type="button" className="btn btn-secondary shadow-none" data-dismiss="modal">Add Reminder</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Reminder;