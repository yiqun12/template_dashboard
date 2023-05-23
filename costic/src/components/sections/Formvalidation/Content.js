import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'

class Content extends Component {
    componentDidMount() {
        //initialize datatable
        function formValidation(){
            window.addEventListener('load', function() {
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          }
          formValidation();
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Validation</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.valid|invalid-feedback</code> right after <code>input</code> for a validation message</p>
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom01">First name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="John" />
                                                <div className="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom02">Last name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Doe" required />
                                                <div className="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustomUsername">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                                <div className="invalid-feedback">Please choose a username.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom03">City</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                                                <div className="invalid-feedback">Please provide a valid city.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom04">State</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                                                <div className="invalid-feedback">Please provide a valid state.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom05">Zip</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                                                <div className="invalid-feedback">Please provide a valid zip.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check pl-0">
                                            <label className="ms-checkbox-wrap">
                                                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required /> <i className="ms-checkbox-check" />
                                            </label> <span> Agree to terms and conditions </span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Validation with Fills</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.validation-fill</code> in <code>.needs-validation</code>
                                </p>
                                <form className="needs-validation validation-fill" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom11">First name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom11" placeholder="First name" defaultValue="John" />
                                                <div className="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom12">Last name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom12" placeholder="Last name" defaultValue="Doe" required />
                                                <div className="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustomUsername2">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername2" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
                                                <div className="invalid-feedback">Please choose a username.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom13">City</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom13" placeholder="City" required />
                                                <div className="invalid-feedback">Please provide a valid city.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom14">State</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom14" placeholder="State" required />
                                                <div className="invalid-feedback">Please provide a valid state.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom15">Zip</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom15" placeholder="Zip" required />
                                                <div className="invalid-feedback">Please provide a valid zip.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Tooltip Validation</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.valid|invalid-tooltip</code> right after <code>input</code> for a validation message</p>
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom06">First name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom06" placeholder="First name" defaultValue="Anastasia" />
                                                <div className="valid-tooltip">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom07">Last name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom07" placeholder="Last name" defaultValue="Yenden" required />
                                                <div className="valid-tooltip">Looks good!</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustomUsername1">Username</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend1">@</span>
                                                </div>
                                                <input type="text" className="form-control" id="validationCustomUsername1" placeholder="Username" aria-describedby="inputGroupPrepend1" required />
                                                <div className="invalid-tooltip">Please choose a username.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom08">City</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom08" placeholder="City" required />
                                                <div className="invalid-tooltip">Please provide a valid city.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom09">State</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom09" placeholder="State" required />
                                                <div className="invalid-tooltip">Please provide a valid state.</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom10">Zip</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom10" placeholder="Zip" required />
                                                <div className="invalid-tooltip">Please provide a valid zip.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check pl-0">
                                            <label className="ms-checkbox-wrap">
                                                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck1" /> <i className="ms-checkbox-check" />
                                            </label> <span> Agree to terms and conditions </span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;