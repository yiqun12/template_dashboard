import React, { Component } from 'react';
import Breadcrumbs from './Breadcrumb';
import $ from 'jquery';

class Content extends Component {
    startanimation = () => {
        $("#img-animate").addClass($("#animation-selection").val());
        $("#img-animate").on('animationend', function() { $("#img-animate").attr('class', 'animated'); })
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumbs/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Animations</h6>
                                <p>Select an animation from the dropdown and watch the beautiful animations.</p>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-animate">
                                    <p className="ms-directions">Use <code>.animated .animation-name</code></p>
                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <select className="form-control" id="animation-selection">
                                                <optgroup label="Attention Seekers">
                                                    <option value="bounce">bounce</option>
                                                    <option value="flash">flash</option>
                                                    <option value="pulse">pulse</option>
                                                    <option value="rubberBand">rubberBand</option>
                                                    <option value="shake">shake</option>
                                                    <option value="swing">swing</option>
                                                    <option value="tada">tada</option>
                                                    <option value="wobble">wobble</option>
                                                    <option value="jello">jello</option>
                                                </optgroup>
                                                <optgroup label="Bouncing Entrances">
                                                    <option value="bounceIn">bounceIn</option>
                                                    <option value="bounceInDown">bounceInDown</option>
                                                    <option value="bounceInLeft">bounceInLeft</option>
                                                    <option value="bounceInRight">bounceInRight</option>
                                                    <option value="bounceInUp">bounceInUp</option>
                                                </optgroup>
                                                <optgroup label="Bouncing Exits">
                                                    <option value="bounceOut">bounceOut</option>
                                                    <option value="bounceOutDown">bounceOutDown</option>
                                                    <option value="bounceOutLeft">bounceOutLeft</option>
                                                    <option value="bounceOutRight">bounceOutRight</option>
                                                    <option value="bounceOutUp">bounceOutUp</option>
                                                </optgroup>
                                                <optgroup label="Fading Entrances">
                                                    <option value="fadeIn">fadeIn</option>
                                                    <option value="fadeInDown">fadeInDown</option>
                                                    <option value="fadeInDownBig">fadeInDownBig</option>
                                                    <option value="fadeInLeft">fadeInLeft</option>
                                                    <option value="fadeInLeftBig">fadeInLeftBig</option>
                                                    <option value="fadeInRight">fadeInRight</option>
                                                    <option value="fadeInRightBig">fadeInRightBig</option>
                                                    <option value="fadeInUp">fadeInUp</option>
                                                    <option value="fadeInUpBig">fadeInUpBig</option>
                                                </optgroup>
                                                <optgroup label="Fading Exits">
                                                    <option value="fadeOut">fadeOut</option>
                                                    <option value="fadeOutDown">fadeOutDown</option>
                                                    <option value="fadeOutDownBig">fadeOutDownBig</option>
                                                    <option value="fadeOutLeft">fadeOutLeft</option>
                                                    <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                                                    <option value="fadeOutRight">fadeOutRight</option>
                                                    <option value="fadeOutRightBig">fadeOutRightBig</option>
                                                    <option value="fadeOutUp">fadeOutUp</option>
                                                    <option value="fadeOutUpBig">fadeOutUpBig</option>
                                                </optgroup>
                                                <optgroup label="Flippers">
                                                    <option value="flip">flip</option>
                                                    <option value="flipInX">flipInX</option>
                                                    <option value="flipInY">flipInY</option>
                                                    <option value="flipOutX">flipOutX</option>
                                                    <option value="flipOutY">flipOutY</option>
                                                </optgroup>
                                                <optgroup label="Lightspeed">
                                                    <option value="lightSpeedIn">lightSpeedIn</option>
                                                    <option value="lightSpeedOut">lightSpeedOut</option>
                                                </optgroup>
                                                <optgroup label="Rotating Entrances">
                                                    <option value="rotateIn">rotateIn</option>
                                                    <option value="rotateInDownLeft">rotateInDownLeft</option>
                                                    <option value="rotateInDownRight">rotateInDownRight</option>
                                                    <option value="rotateInUpLeft">rotateInUpLeft</option>
                                                    <option value="rotateInUpRight">rotateInUpRight</option>
                                                </optgroup>
                                                <optgroup label="Rotating Exits">
                                                    <option value="rotateOut">rotateOut</option>
                                                    <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                                                    <option value="rotateOutDownRight">rotateOutDownRight</option>
                                                    <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                                                    <option value="rotateOutUpRight">rotateOutUpRight</option>
                                                </optgroup>
                                                <optgroup label="Sliding Entrances">
                                                    <option value="slideInUp">slideInUp</option>
                                                    <option value="slideInDown">slideInDown</option>
                                                    <option value="slideInLeft">slideInLeft</option>
                                                    <option value="slideInRight">slideInRight</option>
                                                </optgroup>
                                                <optgroup label="Sliding Exits">
                                                    <option value="slideOutUp">slideOutUp</option>
                                                    <option value="slideOutDown">slideOutDown</option>
                                                    <option value="slideOutLeft">slideOutLeft</option>
                                                    <option value="slideOutRight">slideOutRight</option>
                                                </optgroup>
                                                <optgroup label="Zoom Entrances">
                                                    <option value="zoomIn">zoomIn</option>
                                                    <option value="zoomInDown">zoomInDown</option>
                                                    <option value="zoomInLeft">zoomInLeft</option>
                                                    <option value="zoomInRight">zoomInRight</option>
                                                    <option value="zoomInUp">zoomInUp</option>
                                                </optgroup>
                                                <optgroup label="Zoom Exits">
                                                    <option value="zoomOut">zoomOut</option>
                                                    <option value="zoomOutDown">zoomOutDown</option>
                                                    <option value="zoomOutLeft">zoomOutLeft</option>
                                                    <option value="zoomOutRight">zoomOutRight</option>
                                                    <option value="zoomOutUp">zoomOutUp</option>
                                                </optgroup>
                                                <optgroup label="Specials">
                                                    <option value="hinge">hinge</option>
                                                    <option value="rollIn">rollIn</option>
                                                    <option value="rollOut">rollOut</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <button type="button" className="btn btn-primary w-100 mt-0" id="animate-it" name="button" onClick={this.startanimation}>View Animation</button>
                                        </div>
                                    </div>
                                    <img src="assets/img/costic/add-product-2.jpg" className="animated" alt="animate" id="img-animate" />
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