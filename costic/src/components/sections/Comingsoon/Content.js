import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <ul id="countdown-duration" className="ms-list-flex"> <li> <p className="ms-duration" id="days">{days}</p> <p className="ms-duration">Days</p> </li> <li> <p className="ms-duration" id="hours" >{hours}</p> <p className="ms-duration">Hours</p> </li> <li> <p className="ms-duration" id="minutes" >{minutes}</p> <p className="ms-duration">Minutes</p> </li> <li> <p className="ms-duration" id="seconds" >{seconds}</p> <p className="ms-duration">Seconds</p>  </li> </ul>;
    }
};
class Content extends Component {
    render() {
        return (
            <div className="ms-body ms-primary-theme">
                <main className="body-content ms-coming-soon">
                    <div className="ms-content-wrapper">
                        <h1>We Are Coming Soon</h1>
                        <p className="ms-duration">Our Exciting Website is Under Construction</p>
                        <Countdown date={Date.now() + 31536000000} renderer={renderer} />
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your Email" />
                            <div className="input-group-append">
                                <button type="button" name="update" className="btn btn-primary">Get Updated</button>
                            </div>
                        </div>
                        <ul className="ms-list-flex ms-social-container">
                            <li> <Link className="ms-social ms-fb" to="/coming-soon"><i className="fab fa-facebook-f" /></Link>
                            </li>
                            <li> <Link className="ms-social ms-pnt" to="/coming-soon"><i className="fab fa-pinterest-p" /></Link>
                            </li>
                            <li> <Link className="ms-social ms-tw" to="/coming-soon"><i className="fab fa-twitter" /></Link>
                            </li>
                            <li> <Link className="ms-social ms-wa" to="/coming-soon"><i className="fab fa-whatsapp" /></Link>
                            </li>
                            <li> <Link className="ms-social ms-skype" to="/coming-soon"><i className="fab fa-skype" /></Link>
                            </li>
                            <li> <Link className="ms-social ms-g-plus" to="/coming-soon"><i className="fab fa-google-plus-g" /></Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>

        );
    }
}

export default Content;