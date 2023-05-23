import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const notificationwidgets = [
    {
        count: "5",
        icon: "email",
        title: "Emails",
        para: "Email App",
    },
    {
        count: "5",
        icon: "person",
        title: "Followers",
        para: "User Profile",
    },
    {
        count: "3",
        icon: "show_chart",
        title: "New Sales",
        para: "Sales",
    },
    {
        count: "2",
        icon: "graphic_eq",
        title: "Voicemail",
        para: "Chat App",
    },
]

class Notwigets extends Component {
    render() {
        return (
            <div className="row">
                {notificationwidgets.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6">
                        <Link to="#">
                            <div className="ms-panel ms-panel-hoverable has-border ms-widget ms-has-new-msg ms-notification-widget">
                                <span className="msg-count">{item.count}</span>
                                <div className="ms-panel-body media">
                                    <i className="material-icons">{item.icon}</i>
                                    <div className="media-body">
                                        <h6>{item.title}</h6>
                                        <span>{item.para}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Notwigets;