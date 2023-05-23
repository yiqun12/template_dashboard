import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

import img1 from '../../../assets/img/costic/pizza.jpg';
import img2 from '../../../assets/img/costic/french-fries.jpg';
import img3 from '../../../assets/img/costic/cereals.jpg';

const draggablelistimages = [
    {
        photo: img1,
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        photo: img2,
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        photo: img3,
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
]

class Listimages extends Component {
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
                <ul className="ms-list ms-droppable ms-sortable" ref="addmsconfigure">
                    {draggablelistimages.map((item, i) => (
                        <li key={i} className="ms-list-item bordered media ms-draggable" onChange={this.handleOnChange}>
                            <img className="ms-img-round" src={item.photo} alt="people" />
                            <div className="media-body">
                                <h5>{item.title}</h5>
                                <p>{item.para}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Listimages;