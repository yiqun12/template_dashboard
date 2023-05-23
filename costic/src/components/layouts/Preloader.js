import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({
                fetchSuccess: true
            });
        });
    }
    render() {
        const preloaderclass = this.state.fetchSuccess ? 'loaded' : '';
        return (
            <div id="preloader-wrap" className={`${preloaderclass}`}>
                <div className="spinner spinner-8">
                    <div className="ms-circle1 ms-child" />
                    <div className="ms-circle2 ms-child" />
                    <div className="ms-circle3 ms-child" />
                    <div className="ms-circle4 ms-child" />
                    <div className="ms-circle5 ms-child" />
                    <div className="ms-circle6 ms-child" />
                    <div className="ms-circle7 ms-child" />
                    <div className="ms-circle8 ms-child" />
                    <div className="ms-circle9 ms-child" />
                    <div className="ms-circle10 ms-child" />
                    <div className="ms-circle11 ms-child" />
                    <div className="ms-circle12 ms-child" />
                </div>
            </div>
        );
    }
}

export default Preloader;