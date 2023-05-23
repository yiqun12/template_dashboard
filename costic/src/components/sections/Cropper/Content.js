import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

class Content extends Component {
    componentDidMount() {
        const defaultimage = document.getElementById('default');
        const zoomdisabledimage = document.getElementById('zoom-disabled');
        const cropperexpandedimage = document.getElementById('cropper-expanded');
        const cropper = new Cropper(defaultimage, {
            aspectRatio: 16 / 9,
            responsive: true,
        });
        const cropper1 = new Cropper(zoomdisabledimage, {
            aspectRatio: 16 / 9,
            responsive: true,
            zoomable: false
        });
        const cropperExp = new Cropper(cropperexpandedimage, {
            aspectRatio: 16 / 9,
            guides: false,
            responsive: true,
            preview: '.ms-crop-preview',
        });
        $("#zoom-in").on('click', function () {
            cropperExp.zoom(0.1);
        });
        $("#zoom-out").on('click', function () {
            cropperExp.zoom(-0.1);
        });
        $("#rotate-right").on('click', function () {
            cropperExp.rotate(45);
        });
        $("#rotate-left").on('click', function () {
            cropperExp.rotate(-45);
        });
        $("#move-left").on('click', function () {
            cropperExp.move(-10, 0);
        });
        $("#move-down").on('click', function () {
            cropperExp.move(0, 10);
        });
        $("#move-right").on('click', function () {
            cropperExp.move(10, 0);
        });
        $("#move-up").on('click', function () {
            cropperExp.move(0, -10);
        });
        $("#lock").on('click', function () {
            cropperExp.disable();
        });
        $("#unlock").on('click', function () {
            cropperExp.enable();
        });
        $("#reset").on('click', function () {
            cropperExp.reset();
            cropper.reset();
            cropper1.reset();
        });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Cropper</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-cropper-container">
                                    <img src="assets/img/costic/add-product-3.jpg" id="default" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Disabled Zoom Cropper</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-cropper-container">
                                    <img id="zoom-disabled" src="assets/img/costic/add-product-2.jpg" alt="cropper" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Cropper with Controls</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-9 col-md-12">
                                        <div className="ms-cropper-container">
                                            <img id="cropper-expanded" src="assets/img/costic/cropper.jpg" alt="cropper" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-12">
                                        <div className="ms-crop-preview ms-crop-preview-lg">
                                        </div>
                                        <div className="ms-crop-preview ms-crop-preview-md">
                                        </div>
                                        <div className="ms-crop-preview ms-crop-preview-sm">
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-md-12">
                                        <div className="ms-cropper-controls">
                                            <button id="zoom-in" type="button" data-toggle="tooltip" data-placement="top" title="Zoom In" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">zoom_in</i></button>
                                            <button id="zoom-out" type="button" data-toggle="tooltip" data-placement="top" title="Zoom Out" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">zoom_out</i></button>
                                            <button id="rotate-right" type="button" data-toggle="tooltip" data-placement="top" title="Rotate Right" className="ms-btn-icon btn-primary" name="button"><i className="material-icons">rotate_right</i></button>
                                            <button id="rotate-left" type="button" data-toggle="tooltip" data-placement="top" title="Rotate Left" className="ms-btn-icon btn-primary" name="button1"><i className="material-icons">rotate_left</i></button>
                                            <button id="move-left" type="button" data-toggle="tooltip" data-placement="top" title="Move Left" className="ms-btn-icon btn-primary" name="button2"><i className="material-icons">arrow_back</i></button>
                                            <button id="move-down" type="button" data-toggle="tooltip" data-placement="top" title="Move Down" className="ms-btn-icon btn-primary" name="button3"><i className="material-icons">arrow_downward</i></button>
                                            <button id="move-right" type="button" data-toggle="tooltip" data-placement="top" title="Move Right" className="ms-btn-icon btn-primary" name="button4"><i className="material-icons">arrow_forward</i></button>
                                            <button id="move-up" type="button" data-toggle="tooltip" data-placement="top" title="Move Up" className="ms-btn-icon btn-primary" name="button5"><i className="material-icons">arrow_upward</i></button>
                                            <button id="lock" type="button" data-toggle="tooltip" data-placement="top" title="Lock" className="ms-btn-icon btn-primary" name="button4"><i className="material-icons">lock_outline</i></button>
                                            <button id="unlock" type="button" data-toggle="tooltip" data-placement="top" title="Unlock" className="ms-btn-icon btn-primary" name="button5"><i className="material-icons">lock_open</i></button>
                                            <button id="reset" type="button" data-toggle="tooltip" data-placement="top" title="Reset" className="ms-btn-icon btn-primary" name="button5"><i className="material-icons">refresh</i></button>
                                        </div>
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