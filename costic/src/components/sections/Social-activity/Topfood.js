import React, { Component } from 'react';

import img1 from '../../../assets/img/costic/pizza.jpg';
import img2 from '../../../assets/img/costic/french-fries.jpg';
import img3 from '../../../assets/img/costic/cereals.jpg';
import img4 from '../../../assets/img/costic/egg-sandwich.jpg';

const foodlist = [
    {
        photo: img1,
        name: "Pizza",
        price: "$20",
        id: "67384917",
    },
    {
        photo: img2,
        name: "French Fries",
        price: "$14",
        id: "789393819",
    },
    {
        photo: img3,
        name: "Multigrain Hot Cereal",
        price: "$25",
        id: "137893137",
    },
    {
        photo: img4,
        name: "Fried Egg Sandwich",
        price: "$10",
        id: "235193138",
    },
    {
        photo: img1,
        name: "Garlic Bread",
        price: "$17",
        id: "235193138",
    },
    {
        photo: img4,
        name: "Fried Egg Sandwich",
        price: "$10",
        id: "235193138",
    },
    {
        photo: img2,
        name: "French Fries",
        price: "$10",
        id: "235193138",
    },
]

class Topfood extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header new">
                    <h6>Top Food Menu</h6>
                    <button type="button" className="btn btn-sm btn-primary">View All</button>
                </div>
                <div className="ms-panel-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Food Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Product ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodlist.map((item, i) => (
                                    <tr key={i}>
                                        <td className="ms-table-f-w">
                                            <img src={item.photo} alt="people" />{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topfood;