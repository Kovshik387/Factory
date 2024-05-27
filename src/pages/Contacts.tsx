import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Contacts(): React.JSX.Element {
    return (
    <div style={contactsStyle}>
        <Container>
            <Row className='justify-content-md-center'>
                <Col md={10}>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
const contactsStyle: React.CSSProperties = {
    margin: '100px 0px'
}