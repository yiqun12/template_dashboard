import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Productslider from './Productslider'

class Addproductcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="alert alert-success" role="alert">
                            <strong>Well done!</strong> You successfully read this important alert message.
      </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Add Product Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom18">Product Name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Product Name" defaultValue="Pizza" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom22">Select Catagory</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom22" required>
                                                    <option value>Catagory 1</option>
                                                    <option value>Catagory 2</option>
                                                    <option value>Catagory 3</option>
                                                    <option value>Catagory 4</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Catagory.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom23">Currency</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom23" required>
                                                    <option value>USD</option>
                                                    <option value>Bitcoins</option>
                                                    <option value>EURO</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Currency
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom24">Quantity</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom24" placeholder="01" required />
                                                <div className="invalid-feedback">
                                                    Quantity
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom25">Price</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom25" placeholder="$10" required />
                                                <div className="invalid-feedback">
                                                    Price
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Description</label>
                                            <div className="input-group">
                                                <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required />
                                                <div className="invalid-feedback">
                                                    Please provide a message.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Product Image</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                                <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h6>Product </h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <Productslider/>
                                        
                                    </div>
                                    <div className="ms-panel-header new">
                                        <p className="medium">Status Available</p>
                                        <div>
                                            <label className="ms-switch">
                                                <input type="checkbox" />
                                                <span className="ms-switch-slider round" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ms-panel-header new">
                                        <p className="medium">Discount Active</p>
                                        <div>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider round" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ms-panel-header new">
                                        <button className="btn btn-secondary d-block" type="submit">Save</button>
                                        <button className="btn btn-primary d-block" type="submit">Save and Add</button>
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

export default Addproductcontent;