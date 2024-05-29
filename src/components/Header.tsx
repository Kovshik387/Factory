/* eslint-disable @typescript-eslint/ban-types */
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Justify } from 'react-bootstrap-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

type HeaderProps = {
    color: string,
}
function HeaderComponent({ color }: HeaderProps): React.JSX.Element {
    const [navPath, setNavPath] = useState('/nav');
    useEffect(() => {
        setNavPath(document.location.pathname == '/nav' ? document.referrer : '/nav')
    }, [])
    return (
        <div style={headerStyle}>
            <Container>
                <Row className="justify-content-md-between align-items-md-center">
                    <Col md={2}>
                        <a style={{
                            display: 'flex',
                            flexFlow: 'row',
                            justifyContent: 'center',
                            color: color,
                            border: 'none',
                            backgroundColor: 'transparent'
                        }} href={navPath}>
                            <Justify height={24} width={24} color={color} />
                        </a>
                    </Col>
                    <Col md={2}>
                        <a href='/'>
                            <img style={imageStyle} src='logoHeader.svg' alt='...' />
                        </a>
                    </Col>
                    <Col md={3}> 
                    {/* href={'/contacts'}  */}
                        <p style={{
                            fontSize: '16px',
                            fontFamily: '"Ubuntu", sans-serif',
                            letterSpacing: '.1rem',
                            color: color,
                            margin: '0px'
                        }}>+7 499 840 33 17</p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export interface HeaderHandler {
    setColor: (color: string) => void;
}
export const Header = forwardRef<HeaderHandler, {}>((_, ref) => {
    const [color, setColor] = useState<string>('#000');
    useImperativeHandle(ref, () => ({
        setColor: (color) => setColor(color),
    }))
    return (<HeaderComponent color={color} />)
})
const imageStyle: React.CSSProperties = {
    width: '168px',
    height: '70px'
}
const headerStyle: React.CSSProperties = {
    padding: '12px 0px',
    zIndex: '1',
    position: 'fixed',
    backgroundColor: 'transparent',
    width: '100%',
    height: '78px',
}