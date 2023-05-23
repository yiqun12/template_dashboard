import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import jQuery from 'jquery'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


class Content extends Component {
    constructor(props) {
        super(props);
        this.toastsuccess = this.toastsuccess.bind(this);
        this.toastdanger = this.toastdanger.bind(this);
        this.toastwarning = this.toastwarning.bind(this);
        this.toastinfo = this.toastinfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        toastr.options =
        {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-left",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

    }

    handleSubmit(event) {
        function jQFormSerializeArrToJson(formSerializeArr) {
            var jsonObj = {};
            jQuery.map(formSerializeArr, function (n, i) {
                jsonObj[n.name] = n.value;
            });

            return jsonObj;
        }
        var toastData = jQFormSerializeArrToJson(jQuery(this).serializeArray());
        toastr.options = {
            "closeButton": toastData.closeButton,
            "debug": toastData.debug,
            "preventDuplicates": toastData.preventDuplicates,
            "progressBar": toastData.progressBar,
            "positionClass": toastData.toastPosition
        }
        switch (toastData.toastType) {
            case 'success':
                toastr.success(toastData.message, toastData.title);
                break;
            case 'info':
                toastr.info(toastData.message, toastData.title);
                break;
            case 'warning':
                toastr.warning(toastData.message, toastData.title);
                break;
            case 'danger':
                toastr.error(toastData.message, toastData.title);
                break;
            default:
                toastr.success(toastData.message, toastData.title);
                break;
        }
        jQuery("#toast-options").text("toastr.options = " + JSON.stringify(toastr.options));
        event.preventDefault();
    };


    toastsuccess() {
        toastr.remove();
        toastr.options.positionClass = "toast-top-left";
        toastr.success('This is a Success Toast', 'lorem ipsum asit');
    }
    toastdanger() {
        toastr.remove();
        toastr.options.positionClass = "toast-top-right";
        toastr.error('This is a Danger Toast', 'lorem ipsum asit');
    }
    toastwarning() {
        toastr.remove();
        toastr.options.positionClass = "toast-bottom-left";
        toastr.warning('This is a Warning Toast', 'lorem ipsum asit');
    }
    toastinfo() {
        toastr.remove();
        toastr.options.positionClass = "toast-bottom-right";
        toastr.info('This is an Info Toast', 'lorem ipsum asit');
    }
    render() {

        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Toast</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Check <code>/assets/js/toast.js</code> for reference</p>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Top Left Success</h6>
                                        <button className="btn btn-primary" id="toast-success" onClick={this.toastsuccess}>Click Me</button>

                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Top Right Warning</h6>
                                        <button className="btn btn-primary" id="toast-warning" onClick={this.toastwarning}>Click Me</button>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Bottom Left Danger</h6>
                                        <button className="btn btn-primary" id="toast-danger" onClick={this.toastdanger}>Click Me</button>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Bottom Right Info</h6>
                                        <button className="btn btn-primary" id="toast-info" onClick={this.toastinfo}>Click Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Toast Playground</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Mix and match whatever toast you would like to see</p>
                                <form id="toast-form" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="toastTitle">Toast Title</label>
                                                <input type="text" className="form-control" id="toastTitle" placeholder="Toast Title" name="title" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="toastMessage">Toast Message</label>
                                                <input type="text" className="form-control" id="toastMessage" placeholder="Toast Message" name="message" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="ms-list mt-3 ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="checkbox" name="closeButton" defaultValue="true" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Close Button </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="checkbox" name="progressBar" defaultValue="true" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Progress Bar </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="checkbox" name="preventDuplicates" defaultValue="true" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Prevent Duplicates </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="checkbox" name="debug" defaultValue="true" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Debug </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="ms-list mt-3 ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="success" name="toastType" defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Success </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="info" name="toastType" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Info </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="warning" name="toastType" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Warning </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="danger" name="toastType" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Danger </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <ul className="ms-list mt-3 ms-list-display">
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-top-left" name="toastPosition" defaultChecked /> <i className="ms-checkbox-check" />
                                                    </label> <span> Top Left </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-top-right" name="toastPosition" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Top Right </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-top-center" name="toastPosition" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Top Center </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-bottom-left" name="toastPosition" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Bottom Left </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-bottom-right" name="toastPosition" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Bottom Right </span>
                                                </li>
                                                <li>
                                                    <label className="ms-checkbox-wrap">
                                                        <input type="radio" defaultValue="toast-bottom-center" name="toastPosition" /> <i className="ms-checkbox-check" />
                                                    </label> <span> Bottom Center </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="col-md-6">
                                            <button type="submit" name="toastSubmit" className="btn btn-primary w-100">Toast Me!</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="button" id="clearToast" name="toastClear" className="btn btn-danger w-100">Clear Toast Data</button>
                                        </div>
                                    </div>
                                </form> <pre id="toast-options">{"\n"}{"              "}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;