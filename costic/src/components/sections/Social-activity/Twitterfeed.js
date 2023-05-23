import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/costic/customer-4.jpg';
import img2 from '../../../assets/img/costic/customer-5.jpg';
import img3 from '../../../assets/img/costic/customer-6.jpg';
import img4 from '../../../assets/img/costic/customer-7.jpg';
import img5 from '../../../assets/img/costic/customer-8.jpg';

const twitterpost = [
    {
        photo: img1,
        name: "Rakhan Potik",
        username: "@rakhan45",
        username2: "@zurak",
        content: "Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener",
        tag1: "#design",
        tag2: "#article",
        tag3: "#interface",
        repeat: "1.9k",
        fav: "2.5k",
    },
    {
        photo: img2,
        name: "Rakhan Potik",
        username: "@rakhan45",
        username2: "@zurak",
        content: "Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener",
        tag1: "#design",
        tag2: "#article",
        tag3: "#interface",
        repeat: "1.9k",
        fav: "2.5k",
    },
    {
        photo: img3,
        name: "Rakhan Potik",
        username: "@rakhan45",
        username2: "@zurak",
        content: "Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener",
        tag1: "#design",
        tag2: "#article",
        tag3: "#interface",
        repeat: "1.9k",
        fav: "2.5k",
    },
    {
        photo: img4,
        name: "Rakhan Potik",
        username: "@rakhan45",
        username2: "@zurak",
        content: "Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener",
        tag1: "#design",
        tag2: "#article",
        tag3: "#interface",
        repeat: "1.9k",
        fav: "2.5k",
    },
    {
        photo: img5,
        name: "Rakhan Potik",
        username: "@rakhan45",
        username2: "@zurak",
        content: "Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener",
        tag1: "#design",
        tag2: "#article",
        tag3: "#interface",
        repeat: "1.9k",
        fav: "2.5k",
    },
]

class Twitterfeed extends Component {
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Twitter Feed</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <ul className="ms-list ms-feed ms-twitter-feed">
                        {twitterpost.map((item, i) => (
                            <li key={i} className="ms-list-item">
                                <div className="media clearfix">
                                    <img src={item.photo} className="ms-img-round ms-img-small" alt="people" />
                                    <div className="media-body">
                                        <h6 className="ms-feed-user">{item.name}</h6>
                                        <p>{item.username}</p>
                                        <p> <Link to="#" className="btn-link">{item.username2}</Link> {item.content}</p>
                                        <p> <Link to="#" className="btn-link">{item.tag1}</Link>
                                            <Link to="#" className="btn-link">{item.tag2}</Link>
                                            <Link to="#" className="btn-link">{item.tag3}</Link>
                                        </p>
                                        <div className="ms-feed-controls"> <span>
                                            <i className="material-icons">reply</i>
                                        </span>
                                            <span> <i className="material-icons">repeat</i> {item.repeat} </span>
                                            <span> <i className="material-icons">favorite</i> {item.fav} </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Twitterfeed;