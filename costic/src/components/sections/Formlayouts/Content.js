import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Breadcrumb from './Breadcrumb'

const tooltip = (
    <Tooltip>
        3 digit number at the back of your card
    </Tooltip>
);
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
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Signup Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom01">First name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="John" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom02">Last name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Doe" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom03">Email Address</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" id="validationCustom03" placeholder="Email Address" required />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <label htmlFor="validationCustom04">Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" id="validationCustom04" placeholder="Password" required />
                                                <div className="invalid-feedback">
                                                    Please provide a password.
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check pl-0">
                                            <label className="ms-checkbox-wrap">
                                                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Agree to terms and conditions </span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary mt-4 d-block w-100" type="submit">Create Account</button>
                                </form>
                                <p className="mb-0 mt-3">Already Have an account? <Link className="btn-link" to="#">Login to Account</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Login Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom08">Email Address</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" id="validationCustom08" placeholder="Email Address" required />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <label htmlFor="validationCustom09">Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" id="validationCustom09" placeholder="Password" required />
                                                <div className="invalid-feedback">
                                                    Please provide a password.
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="ms-checkbox-wrap">
                                            <input className="form-check-input" type="checkbox" defaultValue />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Remember Password </span>
                                    </div>
                                    <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                                </form>
                                <p className="mb-0 mt-3">Don't have an account? <Link className="btn-link" to="#">Create an Account</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Contact Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                        <div className="col-xl-6 col-md-12 mb-3">
                                            <label htmlFor="validationCustom10">Full Name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom10" placeholder="Full Name" required />
                                                <div className="invalid-feedback">
                                                    Please provide full name
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-12">
                                            <label htmlFor="validationCustom11">Email Address</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" id="validationCustom11" placeholder="Email Address" required />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="validationCustom12">Message</label>
                                            <div className="input-group">
                                                <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required defaultValue={""} />
                                                <div className="invalid-feedback">
                                                    Please provide a message.
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Payment Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <label htmlFor="validationCustom08">Payment Method</label>
                                            <ul className="ms-payment-container">
                                                <li>
                                                    <div className="ms-radio-img">
                                                        <input type="radio" name="payment-method" defaultValue />
                                                        <div className="ms-payment-img">
                                                            <img src="assets/img/payment/payment-payoneer.png" alt="payment" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ms-radio-img">
                                                        <input type="radio" name="payment-method" defaultValue />
                                                        <div className="ms-payment-img">
                                                            <img src="assets/img/payment/payment-visa.png" alt="payment" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ms-radio-img">
                                                        <input type="radio" name="payment-method" defaultValue />
                                                        <div className="ms-payment-img">
                                                            <img src="assets/img/payment/payment-paypal.png" alt="payment" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ms-radio-img">
                                                        <input type="radio" name="payment-method" defaultValue />
                                                        <div className="ms-payment-img">
                                                            <img src="assets/img/payment/payment-master.png" alt="payment" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-xl-6 col-md-12 mb-3">
                                            <label htmlFor="validationCustom13">Card Holder Name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom13" placeholder="Card Holder Name" required />
                                                <div className="invalid-feedback">
                                                    Please provide full name
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-12">
                                            <label htmlFor="validationCustom14">Card Number</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom14" placeholder="Card Number" required />
                                                <div className="invalid-feedback">
                                                    Please provide number.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-12">
                                            <label htmlFor="validationCustom15">Month</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom15" required>
                                                    <option value>01</option>
                                                    <option value>02</option>
                                                    <option value>03</option>
                                                    <option value>04</option>
                                                    <option value>05</option>
                                                    <option value>06</option>
                                                    <option value>07</option>
                                                    <option value>08</option>
                                                    <option value>09</option>
                                                    <option value>10</option>
                                                    <option value>11</option>
                                                    <option value>12</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Month.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-12">
                                            <label htmlFor="validationCustom16">Year</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom16" required>
                                                    <option value>2022</option>
                                                    <option value>2022</option>
                                                    <option value>2022</option>
                                                    <option value>2023</option>
                                                    <option value>2024</option>
                                                    <option value>2025</option>
                                                    <option value>2026</option>
                                                    <option value>2027</option>
                                                    <option value>2028</option>
                                                    <option value>2029</option>
                                                    <option value>2030</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Year
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-12">
                                        <OverlayTrigger placement="left" overlay={tooltip}>
                                            <label htmlFor="validationCustom17">CVV <i className="material-icons">info_outline</i> </label>
                                            </OverlayTrigger>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom17" placeholder="CVV" required />
                                                <div className="invalid-feedback">
                                                    Please provide your CVV.
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Save and Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Checkout Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom18">First name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="First name" defaultValue="John" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom19">Last name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom19" placeholder="Last name" defaultValue="Doe" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom20">Email Address</label>
                                            <div className="input-group">
                                                <input type="email" className="form-control" id="validationCustom20" placeholder="Email Address" required />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom21">Phone Number</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom21" placeholder="Phone Number" required />
                                                <div className="invalid-feedback">
                                                    Please provide a number.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom22">Country</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom22" required>
                                                    <option value>01</option>
                                                    <option value>02</option>
                                                    <option value>03</option>
                                                    <option value>04</option>
                                                    <option value>05</option>
                                                    <option value>06</option>
                                                    <option value>07</option>
                                                    <option value>08</option>
                                                    <option value>09</option>
                                                    <option value>10</option>
                                                    <option value>11</option>
                                                    <option value>12</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Country.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom23">State</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom23" required>
                                                    <option value>2022</option>
                                                    <option value>2022</option>
                                                    <option value>2022</option>
                                                    <option value>2023</option>
                                                    <option value>2024</option>
                                                    <option value>2025</option>
                                                    <option value>2026</option>
                                                    <option value>2027</option>
                                                    <option value>2028</option>
                                                    <option value>2029</option>
                                                    <option value>2030</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a State
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom24">City</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom24" placeholder="City" required />
                                                <div className="invalid-feedback">
                                                    Please provide a city.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom25">Zip code</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom25" placeholder="Zip code" required />
                                                <div className="invalid-feedback">
                                                    Please provide a ZIP.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom26">Address</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom26" placeholder="Address" required />
                                                <div className="invalid-feedback">
                                                    Please provide an Address.
                  </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary d-block float-right" type="submit">Save and Continue</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ms-panel ms-panel-fh">
                                    <div className="ms-panel-header">
                                        <h6>Subscribe Form</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <form className="needs-validation clearfix" noValidate>
                                            <div className="form-row">
                                                <div className="col-xl-6 col-md-12 mb-3">
                                                    <label htmlFor="validationCustom27">Full Name</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="validationCustom27" placeholder="Full Name" required />
                                                        <div className="invalid-feedback">
                                                            Please provide full name
                      </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-12">
                                                    <label htmlFor="validationCustom28">Email Address</label>
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" id="validationCustom28" placeholder="Email Address" required />
                                                        <div className="invalid-feedback">
                                                            Please provide an email.
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary w-100 d-block" type="submit">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="ms-panel ms-panel-fh">
                                    <div className="ms-panel-header">
                                        <h6>Recover Password Form</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <form className="needs-validation clearfix" noValidate>
                                            <div className="form-row">
                                                <div className="col-xl-6 col-md-12 mb-3">
                                                    <label htmlFor="validationCustom29">Username</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" id="validationCustom29" placeholder="Username" required />
                                                        <div className="invalid-feedback">
                                                            Please provide username
                      </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-12">
                                                    <label htmlFor="validationCustom30">Email Address</label>
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" id="validationCustom30" placeholder="Email Address" required />
                                                        <div className="invalid-feedback">
                                                            Please provide an email.
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary w-100 d-block" type="submit">Send Request</button>
                                        </form>
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