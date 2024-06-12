/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaPredicate } from "react-media-hook";

export default function Sertificat(): React.JSX.Element {
    const biggerThan920 = useMediaPredicate("(min-width: 992px)");
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
        {biggerThan920 ? <div>
                <div style={{
                    display: 'flex',
                    flexFlow: 'column',
                }}>
                    <a href='/nav' style={{
                        color: '#090C10',
                        fontSize: '20px',
                        alignSelf: 'end',
                        fontFamily: '"Ubuntu", sans-serif',
                        paddingRight: '10%'
                    }}>Назад</a>
                </div>
            </div> : <div></div>}
        
        <Container fluid={'md'} style={{
            paddingTop: biggerThan920 ? '0px' : '0px',
            height: '100%',
        }}>
            <Row className='px-5 px-md-0'>
                <Col xs={12} md={6} lg={4} className='mb-3'>
                    <div>
                        <img ref={imagesRef[0]} style={imageStyle} src='/sert1.png'/>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='mb-3'>
                    <div>
                        <img ref={imagesRef[1]} style={imageStyle} src='/sert2.png'/>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='mb-3'>
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
    padding: '40px 0px 0px',
    animation: `fadeIn 1s`,
}
const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
    width: '100%'
}