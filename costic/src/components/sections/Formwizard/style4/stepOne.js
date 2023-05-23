import React from 'react'

export default () => {

  return (
    <div className="ms-wizard-step">
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <label>First name</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="First name" defaultValue="John" />
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <label>Last name</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Last name" defaultValue="Doe" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-md-12 mb-3">
          <label>Email Address</label>
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
        </div>
        <div className="col-md-12 mb-2">
          <label>Password</label>
          <div className="input-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  )
}
