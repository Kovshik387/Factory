import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Test: React.FC = () => {
    return (
        <div style={catalogStyle}>
            <Container>
                <Row className='justify-content-md-center' >
                    <Col md={10}>
                        <div style={catalogBodyStyle}>
                            <h1>Три</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
const catalogBodyStyle: React.CSSProperties = {
    height: '700px',
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',

}
const catalogStyle: React.CSSProperties = {
    margin: '56px 0px',
    height: '100%'
}
export default Test;
