import React, { Component } from 'react';

class Invite extends Component {
    render() {
        return (
            
            <div className="ms-quickbar-container text-center ms-invite-member"> <i className="flaticon-network" />
            <p>Invite Team Members</p>
            <form>
                <div className="ms-form-group">
                    <input type="text" placeholder="Member Email" className="form-control" name="invite-email" />
                </div>
                <div className="ms-form-group">
                    <button type="submit" name="invite-member" className="btn btn-primary w-100">Invite</button>
                </div>
            </form>
        </div>
        );
    }
}

export default Invite;