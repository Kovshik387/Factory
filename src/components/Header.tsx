import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Justify } from 'react-bootstrap-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
export interface HeaderProps {

}
export default function Header(props: HeaderProps): React.JSX.Element {
    return (
    <div style={headerStyle}>
        <Container>
            <Row className="justify-content-md-between align-items-md-center">
                <Col md={2}>
                    <a href={'/contacts'} style={contactButton}>Связаться с нами</a>
                </Col>
                <Col md={2}>
                    <img style={imageStyle} src='logoHeader.png' alt='...'/>
                </Col>
                <Col md={2}>
                    <a href={''} style={navigationButton}><Justify height={24} width={24}/></a>
                </Col>
            </Row>
        </Container>
    </div>
    )   
}
const imageStyle: React.CSSProperties = {
    width: '168px',
    height: '70px'
}
const contactButton: React.CSSProperties = {
    fontSize: '16px',
}
const navigationButton: React.CSSProperties = {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'end'
}
const headerStyle: React.CSSProperties = {
    padding: '12px 0px',
    position: 'fixed',
    backgroundColor: 'transparent',
    width: '100%',
    height: '78px',
}