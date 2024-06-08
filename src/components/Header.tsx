/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Justify } from 'react-bootstrap-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaPredicate } from 'react-media-hook';
import { useLocation } from 'react-router-dom';

interface HeaderProps { color: string; }
interface HeaderInfo extends HeaderProps { navPath: string; }
function HeaderSmall({ color, navPath }: HeaderInfo): React.JSX.Element {
    React.useEffect(() => { }, [])
    const contact = React.useCallback(() => {}, [])
    return (
    <div>
        <div style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            height: '68px',
            padding: '0px 14px',
            backgroundColor: 'rgba(175, 175, 175, 0.5)'
        }}>
            <a href='/'>
                <img style={{width: '130px', height: '52px'}} src='logoHeader.svg' alt='...'/>
            </a>
            <a style={{
                display: 'flex',
                flexFlow: 'row',
                justifyContent: 'start',
                color: color,
                border: 'none',
                backgroundColor: 'transparent'
            }} href={navPath}>
                <Justify height={24} width={24} color={color} />
            </a>
        </div>
        <div onClick={contact} style={{
            display: color == '#FFF' ? 'none' : 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            height: '38px',
            padding: '0px 30px',
            backgroundColor: '#E54E4E',
            color: '#FFF',
        }}>
            <p style={{margin: '0px', fontSize: '15px'}}>+7 499 840 33 17</p>
            <p style={{margin: '0px', fontSize: '15px'}}>Позвонить</p>
        </div>
    </div>
    )
}
function HeaderLarge({ color, navPath }: HeaderInfo): React.JSX.Element {
    return (
    <Container>
        <Row className="justify-content-md-between align-items-md-center">
            <Col md={2}>
                <a style={{
                    display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'start',
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
            <Col md={2}> 
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
    )
}

function HeaderComponent({ color }: HeaderProps): React.JSX.Element {
    const [navPath, setNavPath] = React.useState('/nav');
    const biggerThan920 = useMediaPredicate("(min-width: 992px)");
    React.useEffect(() => {
        setNavPath(document.location.pathname == '/nav' ? document.referrer : '/nav')
    }, [])
    return (
        <div style={{...headerStyle}}>
            { 
            biggerThan920 
                ? <HeaderLarge color={color} navPath={navPath}/>  
                : <HeaderSmall color={color} navPath={navPath}/>  
            }
        </div>
    )
}
export interface HeaderHandler {
    setColor: (color: string) => void;
    getHeader: () => HTMLDivElement
}
export const Header = React.forwardRef<HeaderHandler, {}>((_, ref) => {
    const [color, setColor] = React.useState<string>('#000');
    const biggerThan920 = useMediaPredicate("(min-width: 992px)");
    const headerRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => ({
        setColor: (color) => setColor(color),
        getHeader: () => headerRef.current!
    }))
    return (
    <div id='header-component' ref={headerRef} style={{zIndex: 4}}>
        <HeaderComponent color={color} />
    </div>)
})
const imageStyle: React.CSSProperties = {
    width: '168px',
    height: '66px'
}
const headerStyle: React.CSSProperties = {
    zIndex: 4,
    width: '100%',
}