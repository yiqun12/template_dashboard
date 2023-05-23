import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";

class Withicongap extends Component {
    render() {
        return (
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Accordion with Gap and Icon</h6>
                </div>
                <div className="ms-panel-body">
                    <Accordion defaultActiveKey="0" className="has-gap ms-accordion-chevron">
                        <Card>
                            <Accordion.Collapse className="collapseparent" eventKey="0">
                                <Card.Body>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <span className="has-icon"> <i className="flaticon-email" /> Lorem Ipsum has been the industry standard dummy text </span>
                            </Accordion.Toggle>
                        </Card>
                        <Card>
                            <Accordion.Collapse className="collapseparent" eventKey="1">
                                <Card.Body>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <span className="has-icon"> <i className="flaticon-start" /> Lorem Ipsum has been the industry standard dummy text </span>
                            </Accordion.Toggle>
                        </Card>
                        <Card>
                            <Accordion.Collapse className="collapseparent" eventKey="2">
                                <Card.Body>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <span className="has-icon"> <i className="flaticon-conversation" /> Lorem Ipsum has been the industry standard dummy text </span>
                            </Accordion.Toggle>
                        </Card>
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default Withicongap;