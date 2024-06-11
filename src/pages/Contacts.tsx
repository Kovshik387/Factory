import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaPredicate } from 'react-media-hook';

export type WindowSize = {
    width: number;
    height: number
}

const ContactsSmall = React.memo((): React.JSX.Element => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            width: '100%',
            height: '100%'
        }}>
            <div style={{
                backgroundImage: "url('/contacts.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '30px 24px',
                width: '100%',
                color: '#FFF'
            }}>
                <h3 style={{
                    marginBottom: '20px',
                    fontFamily: 'Ubuntu',
                    letterSpacing: '.2rem',
                    fontSize: '24px'
                }}>
                    Контакты
                </h3>
                <h3 style={{
                    textAlign: 'start',
                    marginBottom: '20px',
                    fontFamily: 'Ubuntu',
                    letterSpacing: '.1rem',
                    fontSize: '20px'
                }}>
                    Телефон: +7 499 840 33 17
                </h3>
                <h3 style={{
                    textAlign: 'start',
                    fontFamily: 'Ubuntu',
                    letterSpacing: '.1rem',
                    fontSize: '20px'
                }}>
                    Почта: info.udarnik@mail.ru
                </h3>
            </div>
            <div style={{ width: '100%', display: 'flex'}}>
                <div style={{ width: '50%' }}>
                    <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src='/map.png'/>
                </div>
                <div style={{ 
                    width: '50%',
                    backgroundColor: '#464646',
                    textAlign: 'start',
                    padding: '10px',
                    fontSize: '12px',
                    color: '#FFF',
                    
                }}>
                    <p style={{fontFamily: 'Ubuntu'}}>
                        Почтовый адрес: 141407, Московская область, г. Химки, ул. Бабакина, д. 5А, пом. 014-8
                    </p>
                    <p style={{fontFamily: 'Ubuntu'}}>
                        Адрес производства: Московская область,   г.Сергиев-Посад, Московское шоссе, д. 22А
                    </p>
                </div>
            </div>
        </div>
    );
});

const ContactsLarge = React.memo((): React.JSX.Element => {
    return (
        <Container fluid="md">
            <Row className='justify-content-md-center'>
                <Col md={12} style={{padding: '0px 60px'}}>
                    <div style={{
                        backgroundImage: "url('/contacts.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        width: '100%',
                        height: '100%',
                        boxShadow: '0px 20px 20px #444'
                    }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ 
                                width: '50%', 
                                display: 'flex', 
                                flexFlow: 'column',
                                justifyContent: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '28px',
                                    fontFamily: '"Ubuntu", sans-serif',
                                    color: '#FFF',
                                    letterSpacing: '.3rem',
                                    fontWeight: 'normal',
                                    marginBottom: '100px'
                                }}>
                                    Контакты
                                </h3>
                                <p style={{
                                    color: '#FFF',
                                    margin: '0px',
                                    fontSize: '28px',
                                    marginBottom: '10px',
                                    border: ""
                                }}>
                                Телефон: +7 499 840 33 17
                                </p>
                                <p style={{
                                    color: '#FFF',
                                    margin: '0px',
                                    fontSize: '28px'
                                }}>
                                Почта: info.udarnik@mail.ru
                                </p>
                            </div>
                            <img style={{ width: '50%' }} src='/map.png'/>
                        </div>
                        <div style={{
                            backgroundColor: '#2E2E2E',
                            padding: '40px',
                            width: '100%',
                            display: 'flex'
                        }}>
                            <div style={{ width: '50%', margin: '0px 10px' }}>
                                <p style={{color: '#FFF', fontSize: '20px' }}>
                                Почтовый адрес: 141407, Московская область, г. Химки, ул. Бабакина, д. 5А, пом. 014-8
                                </p>
                            </div>
                            <div style={{ width: '50%', margin: '0px 10px' }}>
                                <p style={{color: '#FFF', fontSize: '20px' }}>
                                Адрес производства: Московская область, г.Сергиев-Посад, Московское шоссе, д. 22А
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default function Contacts(): React.JSX.Element {
    const biggerThan920 = useMediaPredicate("(min-width: 920px)");
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [animation] = useState<string>('fadeIn');
    const rootRef = useRef<HTMLDivElement>(null);

    const setStyle = useCallback((anim: string): React.CSSProperties => ({
        marginTop: windowSize.height < 800 ? '10px' : '120px',
        animation: window.location.pathname === '/' ? 'none' : `${anim} 1s`
    }), [windowSize.height]);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={rootRef} style={setStyle(animation)}>
        {
            biggerThan920 ? <ContactsLarge /> : <ContactsSmall/>
        }
        </div>
    );
}
