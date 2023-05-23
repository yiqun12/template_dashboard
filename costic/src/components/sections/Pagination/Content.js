import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Pagination Section 1</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.has-gap</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination has-gap">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.pagination-round</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-round has-gap">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.pagination-circle</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-circle has-gap">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Pagination Section 2</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.active-round</code> in active <code>.page-item</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active-round"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.active-circle</code> in active <code>.page-item</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item active-circle"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.active-bordered</code> in active <code>.page-item</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-pill">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item active-bordered"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Pagination Section 3</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.pagination-pill</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-pill">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item active-bordered"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.pagination-input</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-input pagination-pill">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><input type="number" name="paginationNum" /> </li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-sm-6">
                                        <p className="ms-directions">Use <code>.pagination-light</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-light has-gap">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Pagination Section 4</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="ms-directions">Use <code>.pagination-expanded</code> in <code>.pagination</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-expanded">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">6</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                                <li className="page-item-expanded">
                                                    <span className="text-disabled go-to-page">Go to Page</span>
                                                    <input type="number" name="paginationNum2" />
                                                    <Link to="#" className="go-to-page">Go <i className="material-icons">keyboard_arrow_right</i> </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="ms-directions">Use <code>.has-shadow</code> in <code>.pagination-expanded</code></p>
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination pagination-expanded has-shadow">
                                                <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                                <li className="page-item active"><Link className="page-link" to="#">6</Link></li>
                                                <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                                <li className="page-item-expanded">
                                                    <span className="text-disabled go-to-page">Go to Page</span>
                                                    <input type="number" name="paginationNum3" />
                                                    <Link to="#" className="go-to-page">Go <i className="material-icons">keyboard_arrow_right</i> </Link>
                                                </li>
                                            </ul>
                                        </nav>
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