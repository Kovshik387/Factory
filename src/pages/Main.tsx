import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

export type WindowSize = {
    width: number;
    height: number
}
export default function MainPage() {
    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight
    });
    React.useEffect(() => {
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
    }, [])
    return (
    <div style={{
        marginTop: windowSize.height < 800 ? '100px' : '200px',
        height: '94%'
    }}>
        <Container>
            <Row className='justify-content-md-center' >
                <Col md={5} style={{display: 'flex', flexFlow: 'column', alignItems: 'start', margin: '0px 150px 0px 0px'}}>
                    <h1 style={{
                        fontWeight: '300', 
                        fontSize: '48px',
                        letterSpacing: '.3em',
                        textAlign: 'start',
                        lineHeight: '60px',
                        marginBottom: '32px'
                    }}>
                        Российский производитель лакокрасочный продукции
                    </h1>
                    <button style={{
                        border: 'none', 
                        borderRadius: '10px', 
                        padding: '12px 56px',
                        backgroundColor: '#E54E4E',
                        fontFamily: 'Ubuntu',
                        color: '#FFF'
                    }}>
                        КАТАЛОГ
                    </button>
                </Col>
                <Col md={5} style={{
                    display: 'flex', 
                    flexFlow: 'column', 
                    alignItems: 'center', 
                }}>
                    <h2 style={{
                        fontSize: '32px',
                        color: '#FFF',
                        letterSpacing: '.2em',
                        margin: '0px 0px 40px 0px'
                    }}>
                        Грунт-эмаль <span style={{color: '#FF0000'}}>3</span> в 1
                    </h2>
                    <div style={{
                        border: '1px solid #626262',
                        padding: '14px 18px 0px',
                        width: '100%'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#FFF',
                            fontFamily: 'Ubuntu'
                        }}>
                            <div>
                                <p style={{
                                    margin: '0px 0px 5px',
                                    fontSize: '32px',
                                    textAlign: 'start'
                                }}
                                >Адгезия</p>
                                <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                                <p style={{
                                    fontSize: '16px',
                                    textAlign: 'start'
                                }}>Не более 1</p>
                            </div>
                            <Stack direction="horizontal">
                            { 
                                [
                                    {color: '#0F0E0E', text: '9005'},
                                    {color: '#4a1a01', text: '8017'},
                                    {color: '#007308', text: '6005'},
                                    {color: '#949494', text: '7004'},
                                ].map((item) => {
                                    return (
                                        <div style={{
                                            padding: '0px 16px'
                                        }}>
                                            <div style={{
                                                backgroundColor: item.color,
                                                width: '46px',
                                                height: '46px',
                                                borderRadius: '100px',
                                                margin: '0px 0px 10px'
                                            }}>
                                            
                                            </div>
                                            <p style={{
                                                fontSize: '14px'
                                            }}>{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                            </Stack>
                        </div>
                        <div style={{ margin: '0px 0px 16px' }}>
                            <p style={{
                                fontSize: '32px',
                                textAlign: 'start',
                                lineHeight: '40px',
                                color: '#FFF'
                            }}>
                                Время высыхания до степени 3 при t (20,0±0,5)°С, мин
                            </p>
                            <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                            <p style={{
                                color: '#FFF',
                                fontSize: '16px',
                                textAlign: 'start'
                            }}>
                                Не более 30
                            </p>
                        </div>
                        <div style={{ margin: '0px 0px 30px' }}>
                            <p style={{
                                fontSize: '32px',
                                textAlign: 'start',
                                lineHeight: '40px',
                                color: '#FFF'
                            }}>
                                Условная вязкость по В3-246 (сопло 4), сек
                            </p>
                            <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                            <p style={{
                                color: '#FFF',
                                fontSize: '16px',
                                textAlign: 'start'
                            }}>
                                Не менее 80
                            </p>
                        </div>
                        <div style={{
                            position: 'relative',
                            width: '176px',
                            margin: '0 auto'
                        }}>
                            <button style={{
                                padding: '12px 42px',
                                border: 'none',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: '-24px',
                                left: '0px'
                            }}>
                                ПОДРОБНЕЕ
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
const catalogStyle: React.CSSProperties = {
    height: '94%'
}

