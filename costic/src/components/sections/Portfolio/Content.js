import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'

import default1 from '../../../assets/img/costic/portfolio-6.jpg';
import default2 from '../../../assets/img/costic/portfolio-1.jpg';
import default3 from '../../../assets/img/costic/portfolio-2.jpg';
import default4 from '../../../assets/img/costic/portfolio-5.jpg';
import default5 from '../../../assets/img/costic/portfolio-4.jpg';
import default6 from '../../../assets/img/costic/portfolio-3.jpg';

const defaultportfolio = [
    {
        photo: default1,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: default2,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: default3,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: default4,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: default5,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: default6,
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
]

const minimalportfolio = [
    {
        photo: default5,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: default2,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: default3,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: default4,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: default1,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: default6,
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
]

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Portfolio</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-portfolio card-columns">
                                    {defaultportfolio.map((item, i) => (
                                        <Link key={i} className="card ms-portfolio-item" to="#">
                                            <img src={item.photo} alt="Card" />
                                            <div className="ms-portfolio-item-content">
                                                <h4>{item.title}</h4>
                                                <div className="item-content-inner">
                                                    <span> <i className="material-icons">thumb_up</i> {item.likes} </span>
                                                    <span> <i className="material-icons">chat_bubble</i> {item.comments} </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Minimal Portfolio</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="ms-portfolio ms-portfolio-minimal card-columns">
                                    {minimalportfolio.map((item, i) => (
                                        <Link key={i} className="card ms-portfolio-item" to="#">
                                            <img src={item.photo} alt="Card" />
                                            <div className="ms-portfolio-item-content">
                                                <h4>{item.name}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
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