import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// User img
import img1 from '../../../assets/img/costic/customer-10.jpg';
import img2 from '../../../assets/img/costic/customer-5.jpg';
import img3 from '../../../assets/img/costic/customer-1.jpg';
import img4 from '../../../assets/img/costic/customer-7.jpg';
// Food img
import foodimg1 from '../../../assets/img/costic/food-7.jpg';
import foodimg2 from '../../../assets/img/costic/food-8.jpg';

const instapost = [
    {
        userimg: img1,
        foodimg: foodimg1,
        subuserimg: img3,
        subuserimg2: img4,
        name: "username24",
        likeduser: "user5",
        likedpost: "37 others",
        post: "website design in progress",
        tag1: "#design",
        tag2: "#ui",
        tag3: "#ux",
        tag4: "#website",
    },
    {
        userimg: img2,
        foodimg: foodimg2,
        subuserimg: img3,
        subuserimg2: img4,
        name: "username24",
        likeduser: "user5",
        likedpost: "37 others",
        post: "website design in progress",
        tag1: "#design",
        tag2: "#ui",
        tag3: "#ux",
        tag4: "#website",
    },
]

class Instagramfeed extends Component {
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Instagram Feed</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <ul className="ms-list ms-feed ms-instagram-feed">
                        {instapost.map((item, i) => (
                            <li key={i} className="ms-list-item">
                                <div className="media clearfix">
                                    <img src={item.userimg} className="ms-img-round ms-img-small" alt="people" />
                                    <div className="media-body">
                                        <h6 className="ms-feed-user">{item.name}</h6>
                                    </div>
                                </div>
                                <img className="ms-fb-feed-img" src={item.foodimg} alt="post" />
                                <div className="d-flex justify-content-between">
                                    <div className="ms-feed-controls"> <i className="material-icons">favorite_border</i>
                                        <i className="material-icons">chat_bubble_outline</i>
                                    </div>
                                </div>
                                <ul className="ms-group-members clearfix">
                                    <li>
                                        <img src={item.subuserimg} alt="member" />
                                    </li>
                                    <li>
                                        <img src={item.subuserimg2} alt="member" />
                                    </li>
                                    <li className="ms-group-count">
                                        <p>Liked By <span className="ms-text-dark medium">{item.likeduser}</span> and <span className="ms-text-dark medium">{item.likedpost}</span>
                                        </p>
                                    </li>
                                </ul>
                                <p> <span className="ms-text-dark medium">{item.name}</span> {item.post}</p>
                                <p>
                                    <Link to="#" className="btn-link">{item.tag1}</Link>
                                    <Link to="#" className="btn-link">{item.tag2}</Link>
                                    <Link to="#" className="btn-link">{item.tag3}</Link>
                                    <Link to="#" className="btn-link">{item.tag4}</Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Instagramfeed;