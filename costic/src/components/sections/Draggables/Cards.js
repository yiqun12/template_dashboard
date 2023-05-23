import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

import img1 from '../../../assets/img/costic/food-7.jpg';
import img2 from '../../../assets/img/costic/food-8.jpg';
import img3 from '../../../assets/img/costic/food-5.jpg';
import img4 from '../../../assets/img/costic/food-6.jpg';

const draggablecards = [
    {
        photo: img1,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img2,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img3,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
    {
        photo: img4,
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
    },
]

class Cards extends Component {
    // Dragging
    componentDidMount() {
        this.$node = $(this.refs.addmsconfigure);
        this.$node.sortable({
            opacity: this.props.opacity,
        });
    }
    shouldComponentUpdate() {
        return false;
    }
    constructor(props) {
        super(props);
        this.state = { isEnabled: true };
    }
    handleOnChange(event, ui) {
        console.log('DOM changed!', event, ui);
    }
    render() {
        return (
            <div className="ms-panel-body">
                <div className="row ms-sortable" ref="addmsconfigure">
                    {draggablecards.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6 ms-draggable" onChange={this.handleOnChange}>
                            <div className="ms-card ">
                                <div className="ms-card-img">
                                    <img src={item.photo} alt="card_img" />
                                </div>
                                <div className="ms-card-body">
                                    <h6>{item.title}</h6>
                                    <p>{item.para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Cards;