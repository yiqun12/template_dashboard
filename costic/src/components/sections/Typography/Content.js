import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Light Typography</h6>
                            </div>
                            <div className="ms-panel-body">
                                <h1>Heading 1</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h2>Heading 2</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Heading 3</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Heading 4</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h5>Heading 5</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h6>Heading 6</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-dark-theme-panel">
                            <div className="ms-panel-header">
                                <h6>Dark Typography</h6>
                            </div>
                            <div className="ms-panel-body">
                                <h1>Heading 1</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h2>Heading 2</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Heading 3</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Heading 4</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h5>Heading 5</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h6>Heading 6</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Headings Typography</h6>
                            </div>
                            <div className="ms-panel-body">
                                <h1>Heading 1</h1>
                                <p>Montserrat Medium 60px</p>
                                <h2>Heading 2</h2>
                                <p>Montserrat Medium 48px</p>
                                <h3>Heading 3</h3>
                                <p>Montserrat Medium 30px</p>
                                <h4>Heading 4</h4>
                                <p>Montserrat Regular 24px</p>
                                <h5>Heading 5</h5>
                                <p>Montserrat Medium 21px</p>
                                <h6>Heading 6</h6>
                                <p>Montserrat Regular 16px</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>State Typography</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.ms-text-state</code> in any text element</p>
                                <p className="ms-text-primary">This is a primary  color text | The quick brown fox jumps over the lazy dog</p>
                                <p className="ms-text-secondary">This is a secondary  color text | The quick brown fox jumps over the lazy dog</p>
                                <p className="ms-text-success">This is a success  color text | The quick brown fox jumps over the lazy dog</p>
                                <p className="ms-text-info">This is an info  color text | The quick brown fox jumps over the lazy dog</p>
                                <p className="ms-text-danger">This is a danger  color text | The quick brown fox jumps over the lazy dog</p>
                                <p className="ms-text-warning">This is a warning  color text | The quick brown fox jumps over the lazy dog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;