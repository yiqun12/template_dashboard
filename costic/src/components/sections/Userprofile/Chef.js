import React, { Component } from 'react';

import img1 from '../../../assets/img/costic/customer-1.jpg';
import img2 from '../../../assets/img/costic/customer-2.jpg';
import img3 from '../../../assets/img/costic/customer-3.jpg';
import img4 from '../../../assets/img/costic/customer-4.jpg';
import img5 from '../../../assets/img/costic/customer-5.jpg';
import img6 from '../../../assets/img/costic/customer-6.jpg';

const chefdata = [
    {
        photo: img1,
        name: "Mike Labinstine",
        time: "January 2022 to Present",
        designation: "Veg Cook"
    },
    {
        photo: img2,
        name: "George Labinstin",
        time: "January 2013 to Present",
        designation: "Meat Cook"
    },
    {
        photo: img3,
        name: "Jessy Doe",
        time: "January 2022 to Present",
        designation: "Top Cheff"
    },
    {
        photo: img4,
        name: "Jessica Doe",
        time: "January 2013 to Present",
        designation: "Night Cheff"
    },
    {
        photo: img5,
        name: "Jhone Doe",
        time: "January 2022 to Present",
        designation: "The Cheff"
    },
    {
        photo: img6,
        name: "Manti Jhoe",
        time: "January 2022 to Present",
        designation: "Quality Control"
    },
]
class Chef extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-body">
                    <h2 className="section-title">Cheffs on Dutty</h2>
                    <div className="row">
                        {chefdata.map((item, i) => (
                            <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                                <div className="media ms-profile-experience">
                                    <div className="mr-2 align-self-center">
                                        <img src={item.photo} className="ms-img-round ms-img-small" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <h4>{item.name}</h4>
                                        <p>{item.time}</p>
                                        <p>{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Chef;