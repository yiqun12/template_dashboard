import React, { Component } from 'react';

const gradientcardpost = [
    
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-primary",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-secondary",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-success",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-warning",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-danger",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-info",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-light",
    },
    {
        title: "This is a card Title",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.",
        stateclass: "ms-card card-gradient-dark",
    },
]

class Gradientcard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">Cards With Gradients</h2>
                    <p className="ms-directions">Use <code>.card-gradient-state</code> for different states</p>
                </div>
                {gradientcardpost.map((item, i) => (
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

export default Gradientcard;