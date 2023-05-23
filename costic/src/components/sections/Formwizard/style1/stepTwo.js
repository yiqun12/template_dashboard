import React from 'react'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const cvvtip = (
  <Tooltip>
    3 digit number at the back of your card
  </Tooltip>
);
export default () => {

  return (
    <div className="ms-wizard-step">
      <div className="form-row">
        <div className="col-md-12">
          <label>Payment Method</label>
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
          <label>Card Holder Name</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Card Holder Name" />
          </div>
        </div>
        <div className="col-xl-6 col-md-12">
          <label>Card Number</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Card Number" />
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
          <label>Month</label>
          <div className="input-group">
            <select className="form-control">
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
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
          <label>Year</label>
          <div className="input-group">
            <select className="form-control">
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
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
        <OverlayTrigger placement="left" overlay={cvvtip}>
            <label>CVV <i className="material-icons">info_outline</i> </label>
          </OverlayTrigger>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="CVV" />
          </div>
        </div>
      </div>
    </div>
  )
}
