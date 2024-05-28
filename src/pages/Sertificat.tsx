import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Sertificat(): React.JSX.Element {
    const imagesRef = [
        useRef<HTMLImageElement>(null),
        useRef<HTMLImageElement>(null),
        useRef<HTMLImageElement>(null),
    ]
    useEffect(() => {
        for (const {current} of imagesRef) {
            if(current == null) continue;
            current.oncontextmenu = () => false;
        }
    }, [])
    return (
    <div style={sertificatStyle}>
        <Container>
            <Row>
                <Col md={12} style={{
                    display: 'flex',
                    flexFlow: 'column',
                    marginTop: '120px'
                }}>
                    <a href='/nav' style={{
                        color: '#090C10',
                        fontSize: '20px',
                        alignSelf: 'end',
                        fontFamily: '"Ubuntu", sans-serif',
                        paddingRight: '100px'
                    }}>Назад</a>
                </Col>
            </Row>
            <Row style={{marginTop: '30px'}}>
                <Col md={4}>
                    <div>
                        <img ref={imagesRef[0]} style={imageStyle} src='/sert1.png'/>
                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <img ref={imagesRef[1]} style={imageStyle} src='/sert2.png'/>
                    </div>
                </Col>
                <Col md={4} >
                    <div>
                        <img ref={imagesRef[2]} style={imageStyle} src='/sert3.png'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
const sertificatStyle: React.CSSProperties = {
    width: '100%',
    animation: `fadeIn 1s`
}
const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
    width: '100%'
}