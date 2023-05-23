import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Cards from './Cards';
import Todo from './Todo';
import Inprogess from './Inprogess';
import List from './List';
import Listimages from './Listimages';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Draggable Cards</h6>
                            </div>
                            <Cards/>
                        </div>
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Draggable Lists</h6>
                                <p>Drag and Drop Items between both Lists</p>
                            </div>
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="section-title">To Do</h6>
                                        <Todo/>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="section-title">In Progress</h6>
                                        <Inprogess/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Sortable List</h6>
                            </div>
                            <List/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Sortable List with Images</h6>
                            </div>
                            <Listimages/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;