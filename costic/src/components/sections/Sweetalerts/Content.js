import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'
import Swal from 'sweetalert2'


class Content extends Component {
    constructor(props) {
        super(props);
        this.sweetalertbasic = this.sweetalertbasic.bind(this);
        this.sweetalertfooter = this.sweetalertfooter.bind(this);
        this.sweetalertposition = this.sweetalertposition.bind(this);
        this.sweetalerthtml = this.sweetalerthtml.bind(this);
        this.sweetalertmultistep = this.sweetalertmultistep.bind(this);
        this.sweetalertautoclose = this.sweetalertautoclose.bind(this);
        this.sweetalertajax = this.sweetalertajax.bind(this);
        this.sweetalertcustom = this.sweetalertcustom.bind(this);
    }
    sweetalertbasic() {
        Swal.fire('The Internet?', 'That thing is still around?', 'question');
    }
    sweetalertfooter() {
        Swal.fire({
            icon: 'warning',
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    sweetalertposition() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    sweetalerthtml() {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html: 'You can use <b>bold text</b> <a href="#">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: 'Close',
            cancelButtonAriaLabel: 'Thumbs down'
        });
    }
    sweetalertmultistep() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    sweetalertautoclose() {
        var timerInterval = void 0;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            onBeforeOpen: function onBeforeOpen() {
                Swal.showLoading();
                timerInterval = setInterval(function () {
                    Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft();
                }, 100);
            },
            onClose: function onClose() {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.timer);
        });
    }
    sweetalertajax() {
        var ipAPI = 'https://api.ipify.org?format=json';
        Swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function preConfirm() {
                return fetch(ipAPI).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    return Swal.insertQueueStep(data.ip);
                }).catch(function () {
                    Swal.insertQueueStep({
                        type: 'error',
                        title: 'Unable to get your public IP'
                    });
                });
            }
        }]);
    }
    sweetalertcustom() {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '../../assets/img/misc/misc-1.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
        });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Sweet Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Check <code>/assets/js/sweet-alerts.js</code> for reference</p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="section-title">Basic Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="basic" onClick={this.sweetalertbasic}>Click Me</button>

                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Alert with Footer</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="with-footer" onClick={this.sweetalertfooter}>Click Me</button>

                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Positioned Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="positioned" onClick={this.sweetalertposition}>Click Me</button>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Alert with HTML</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="with-html" onClick={this.sweetalerthtml}>Click Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Advanced Alerts</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h6 className="section-title">Multi Step Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="multi-step" onClick={this.sweetalertmultistep}>Click Me</button>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Auto Close Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="auto-close" onClick={this.sweetalertautoclose}>Click Me</button>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">AJAX Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="ajax" onClick={this.sweetalertajax}>Click Me</button>
                                    </div>
                                    <div className="col-md-3">
                                        <h6 className="section-title">Custom Alert</h6>
                                        <button type="button" name="button" className="btn btn-primary trigger-swal" data-swal="custom" onClick={this.sweetalertcustom}>Click Me</button>
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