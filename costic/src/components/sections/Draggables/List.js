import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

const draggablelist = [
    {
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
]

class List extends Component {
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
                <ul className="ms-list ms-sortable" ref="addmsconfigure">
                    {draggablelist.map((item, i) => (
                        <li key={i} className="ms-list-item bordered media ms-draggable" onChange={this.handleOnChange}>
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

export default List;