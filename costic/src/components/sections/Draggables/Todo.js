import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

const draggabletodo = [
    {
        icon: "border_color",
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        icon: "rss_feed",
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
    {
        icon: "cloud_download",
        title: "Parious Versions has evolved over the years",
        para: "It is a long established fact that a reader will be distracted by the content",
    },
]

class Todo extends Component {
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
            <ul className="ms-list ms-sortable-list" ref="addmsconfigure">
                {draggabletodo.map((item, i) => (
                    <li key={i} className="ms-list-item bordered media" onChange={this.handleOnChange}>
                        <i className="material-icons align-self-center">{item.icon}</i>
                        <div className="media-body">
                            <h5>{item.title}</h5>
                            <p>{item.para}</p>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Todo;