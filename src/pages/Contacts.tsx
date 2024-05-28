import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export type WindowSize = {
    width: number;
    height: number
}
export default function Contacts(): React.JSX.Element {
    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [ animation ] = useState<string>('fadeIn');
    const rootRef = useRef<HTMLDivElement>(null);

    const setStyle = (anim: string): React.CSSProperties => ({
        marginTop: windowSize.height < 800 ? '100px' : '150px', 
        animation: window.location.pathname == '/' ? 'none' : `${anim} 1s`
    })
    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }; 
        // const animationEnd = (ev: AnimationEvent) => {
        //     // if(ev.animationName == 'fadeOut' && redirectLink != null) {

        //     // }
        // } 
        // rootRef.current!.addEventListener('animationend', animationEnd)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }; 
    }, [])
    return (
    <div ref={rootRef} style={setStyle(animation)}>
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
                                    marginBottom: '10px'
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
                                Адрес производства: Московская область, г.Сергиев-Посад, Московское шоссе, д. 22А
                                </p>
                            </div>
                            <div style={{ width: '50%', margin: '0px 10px' }}>
                                <p style={{color: '#FFF', fontSize: '20px' }}>
                                Почтовый адрес: 141407, Московская область, г. Химки, ул. Бабакина, д. 5А, пом. 014-8
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}