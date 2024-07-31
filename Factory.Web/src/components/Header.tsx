import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Justify } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaPredicate } from 'react-media-hook';
import { Link } from 'react-router-dom';

interface HeaderProps {
    color: string;
}
interface HeaderInfo extends HeaderProps {
    navPath: string;
}

function HeaderSmall({ color, navPath }: HeaderInfo): React.JSX.Element {
    const contact = React.useCallback(() => { }, []);
    console.log(color);
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
                <Link to='/'>
                    <img style={{ width: '110px', height: '60px' }} src={`/logoHeader.svg`} alt='logo' />
                </Link>
                <Link style={{
                    display: 'flex',
                    flexFlow: 'row',
                    justifyContent: 'start',
                    color: color,
                    border: 'none',
                    backgroundColor: 'transparent'
                }} to={navPath}>
                    <Justify height={24} width={24} color={color} />
                </Link>
            </div>
            <div onClick={contact} style={{
                display: color === '#FFF' ? 'none' : 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '38px',
                padding: '0px 30px',
                backgroundColor: '#E54E4E',
                color: '#FFF',
            }}>
                <a style={{ margin: '0px', fontSize: '15px' }} href="tel: +7 499 840 33 17">Позвонить</a>
                <a style={{ margin: '0px', fontSize: '15px' }} href="tel: +7 499 840 33 17">+7 499 840 33 17</a>
            </div>
        </div>
    );
}

function HeaderLarge({ color, navPath }: HeaderInfo): React.JSX.Element {
    return (
        <Container>
            <Row className="justify-content-md-between align-items-md-center">
                <Col md={3}>
                    <Link style={{
                        display: 'flex',
                        flexFlow: 'row',
                        justifyContent: 'start',
                        color: color,
                        border: 'none',
                        backgroundColor: 'transparent'
                    }} to={navPath}>
                        <Justify height={24} width={24} color={color} />
                    </Link>
                </Col>
                <Col md={6}>
                    <Link to='/'>
                        <img style={imageStyle} src='/logoHeader.svg' alt='...' />
                    </Link>
                </Col>
                <Col md={3}>
                    <p style={{
                        fontSize: '16px',
                        fontFamily: '"Ubuntu", sans-serif',
                        letterSpacing: '.1rem',
                        color: '#FF0000',
                        margin: '0px'
                    }}>+7 499 840 33 17</p>
                </Col>
            </Row>
        </Container>
    );
}

function HeaderComponent({ color }: HeaderProps): React.JSX.Element {
    const [navPath, setNavPath] = React.useState('/nav');
    const biggerThan920 = useMediaPredicate("(min-width: 992px)");
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setNavPath(document.location.pathname === '/nav' ? document.referrer : '/nav');
        setIsVisible(true);
    }, []);

    const headerStyle: React.CSSProperties = {
        zIndex: 4,
        width: '100%',
        visibility: isVisible ? 'visible' : 'hidden'
    };

    return (
        <div style={headerStyle}>
            {
                biggerThan920
                    ? <HeaderLarge color={color} navPath={navPath} />
                    : <HeaderSmall color={color} navPath={navPath} />
            }
        </div>
    );
}

export interface HeaderHandler {
    setColor: (color: string) => void;
    getHeader: () => HTMLDivElement;
}

export const Header = React.forwardRef<HeaderHandler, {}>((_, ref) => {
    const [color, setColor] = React.useState<string>('#000');
    const headerRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => ({
        setColor: (color) => setColor(color),
        getHeader: () => headerRef.current!
    }));
    
    return (
        <div id='header-component' ref={headerRef} style={{ zIndex: 4 }}>
            <HeaderComponent color={color} />
        </div>
    );
});

const imageStyle: React.CSSProperties = {
    width: '250px',
    height: '86px',
    // paddingRight: "65px"
};
