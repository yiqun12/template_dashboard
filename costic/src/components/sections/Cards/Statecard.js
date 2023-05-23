import React, { Component } from 'react';

const statecardpost = [
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-primary",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-secondary",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-success",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-warning",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-danger",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-info",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-dark",
    },
]

class Statecard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Cards With States</h2>
                    <p className="ms-directions">Use <code>.card-state</code> for different states</p>
                </div>
                {statecardpost.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                        <div className={item.stateclass}>
                            <div className="ms-card-body">
                                <h6>{item.title}</h6>
                                <p>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Statecard;