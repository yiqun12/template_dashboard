import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';

class Content extends Component {
    addstars = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-rating-item');
        $(parentTask).prevAll().removeClass('rated');
        $(parentTask).addClass('rated');
        $(parentTask).nextAll().addClass('rated');
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Star Rating</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star_border</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star_border</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill rating-circle">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered rating-circle">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">star</i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Letter Rating</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered letter-rating">
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>E</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>D</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>C</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>B</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>A</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>E</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>D</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>C</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>B</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>A</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill rating-circle letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>E</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>D</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>C</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>B</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>A</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered rating-circle letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>E</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>D</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>C</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>B</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>A</i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Number Rating</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>5</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>4</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>3</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>2</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>1</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>5</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>4</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>3</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>2</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>1</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill rating-circle letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>5</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>4</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>3</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>2</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>1</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered rating-circle letter-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>5</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>4</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>3</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>2</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>1</i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Heart Rating</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered heart-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite_border</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite_border</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite_border</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill heart-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill rating-circle heart-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-bordered rating-circle heart-rating">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i className="material-icons">favorite</i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Misc. Rating</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating misc-number">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>5</i> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i>4</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>3</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>2</i> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i>1</i> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating rating-fill misc-checks">
                                            <li className="ms-rating-item" onClick={this.addstars}> <i /> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i /> </li>
                                            <li className="ms-rating-item" onClick={this.addstars}> <i /> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i /> </li>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i /> </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating misc-blocks">
                                            <li className="ms-rating-item"  onClick={this.addstars}/>
                                            <li className="ms-rating-item rated"  onClick={this.addstars}/>
                                            <li className="ms-rating-item rated"  onClick={this.addstars}/>
                                            <li className="ms-rating-item rated"  onClick={this.addstars}/>
                                            <li className="ms-rating-item rated"  onClick={this.addstars}/>
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-sm-6">
                                        <ul className="ms-star-rating misc-square">
                                            <li className="ms-rating-item"  onClick={this.addstars}/>
                                            <li className="ms-rating-item"  onClick={this.addstars}/>
                                            <li className="ms-rating-item"  onClick={this.addstars}/>
                                            <li className="ms-rating-item"  onClick={this.addstars}/>
                                            <li className="ms-rating-item rated" onClick={this.addstars}> <i /> </li>
                                        </ul>
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