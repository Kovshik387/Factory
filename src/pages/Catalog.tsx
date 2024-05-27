import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Catalog(): React.JSX.Element {
    return (
    <div style={catalogStyle}>
        <Container>
            <Row className='justify-content-md-center' >
                <Col md={10}>
                    <div style={catalogBodyStyle}>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
const catalogBodyStyle: React.CSSProperties = {
    height: '1000px',
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    
}
const catalogStyle: React.CSSProperties = {
    margin: '56px 0px',
    height: '100%'
}