import React, { Component } from 'react';

// user img
import img1 from '../../../assets/img/costic/customer-1.jpg';
import img2 from '../../../assets/img/costic/customer-9.jpg';
// post img
import fdimg1 from '../../../assets/img/costic/food-2.jpg';
import fdimg2 from '../../../assets/img/costic/food-1.jpg';

const facebookpost = [
    {
        userimg: img1,
        foodimg: fdimg1,
        name: "Rakhan Potik",
        datetime: "24 January at 9:04 pm",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        likes: "485 likes",
        comments: "48 comments"
    },
    {
        userimg: img2,
        foodimg: fdimg2,
        name: "Rakhan Potik",
        datetime: "24 January at 9:04 pm",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        likes: "485 likes",
        comments: "48 comments"
    },
]

class Facebookfeed extends Component {
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Facebook Feed</h6>
                </div>
                <div className="ms-panel-body p-0">
                    <ul className="ms-list ms-feed ms-facebook-feed">
                        {facebookpost.map((item, i) => (
                            <li key={i} className="ms-list-item">
                                <div className="media clearfix">
                                    <img src={item.userimg} className="ms-img-round ms-img-small" alt="people" />
                                    <div className="media-body">
                                        <h6 className="ms-feed-user">{item.name}</h6>
                                        <p>{item.datetime}</p>
                                    </div>
                                </div>
                                <p>{item.post}</p>
                                <img className="ms-fb-feed-img" src={item.foodimg} alt="post" />
                                <div className="d-flex justify-content-between">
                                    <div className="ms-fb-post-meta"> <i className="material-icons">thumb_up</i> <span>{item.likes}</span>
                                    </div>
                                    <div className="ms-fb-post-meta"> <span>{item.comments}</span>
                                    </div>
                                </div>
                                <div className="ms-feed-controls"> <span>
                                    <i className="material-icons">thumb_up</i> Like
                </span>
                                    <span>
                                        <i className="material-icons">chat_bubble_outline</i> Comment
                </span>
                                    <span>
                                        <i className="material-icons">share</i> Share
                </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Facebookfeed;