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
            padding: '0px 14px'
        }}>
            <a href='/'>
                <img style={{width: '112px', height: '42px'}} src='logoHeader.svg' alt='...'/>
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
            <a style={{margin: '0px', fontSize: '15px'}} href="tel:+7 499 840 33 17">+7 499 840 33 17</a>
            <a style={{margin: '0px', fontSize: '15px'}} href="tel:+7 499 840 33 17">Позвонить</a>
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
    const biggerThan920 = useMediaPredicate("(min-width: 920px)");
    React.useEffect(() => {
        setNavPath(document.location.pathname == '/nav' ? document.referrer : '/nav')
    }, [])
    const style = React.useMemo<React.CSSProperties>(() => {
        return biggerThan920 ? {
            padding: '12px 0px', 
            backgroundColor:  'transparent'
        } : {
            padding: '0px',
            backgroundImage: '/background.jfif'
        }
    }, [biggerThan920])
    return (
        <div style={{...style, ...headerStyle}}>
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
}
export const Header = React.forwardRef<HeaderHandler, {}>((_, ref) => {
    const [color, setColor] = React.useState<string>('#000');
    React.useImperativeHandle(ref, () => ({
        setColor: (color) => setColor(color),
    }))
    return (<HeaderComponent color={color} />)
})
const imageStyle: React.CSSProperties = {
    width: '168px',
    height: '70px'
}
const headerStyle: React.CSSProperties = {
    zIndex: '1',
    position: 'fixed',
    width: '100%',
    height: '78px',
}