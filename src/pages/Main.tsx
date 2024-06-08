import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useMediaPredicate } from "react-media-hook";
import { useNavigate } from "react-router-dom";

export type WindowSize = {
    width: number;
    height: number
}
interface MainPageProps {
    detailsHandler: () => void;
    catalogHandler: () => void;
}
function MainPageSmall({detailsHandler}: MainPageProps): React.JSX.Element {
    return (
    <div style={{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        margin: '50px 0px 0px',
        height: '100%'
    }}>
        <h1 style={{
            fontWeight: '300', 
            fontSize: '28px',
            letterSpacing: '.3em',
            textAlign: 'start',
            lineHeight: '30px',
            margin: '0px 42px 32px'

        }}>
            Российский производитель лакокрасочной продукции
        </h1>
        <div style={{
            backgroundColor: '#545454',
            width: '100%',
            padding: '14px 36px'
        }}>
            <h2 style={{
                fontSize: '17px',
                color: '#FFF',
                letterSpacing: '.4em',
                fontFamily: '"Hero"', 
                marginBottom: '20px'
            }}>
                ГРУНТ-ЭМАЛЬ <span style={{color: '#FF0000'}}>3</span> В 1 
            </h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Stack direction="horizontal">
                { 
                    [
                        {color: '#0F0E0E', text: '9005'},
                        {color: '#4a1a01', text: '8017'},
                        {color: '#08382b', text: '6005'},
                        {color: '#949494', text: '7004'},
                    ].map((item, index) => {
                        return (
                            <div style={{padding: '0px 16px'}} key={index}>
                                <div style={{
                                    backgroundColor: item.color,
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '100px',
                                    border: '1px solid #626262',
                                    margin: '0px 0px 10px'
                                }}>
                                
                                </div>
                                <p style={{
                                    fontSize: '14px',
                                    fontFamily: 'Ubuntu',
                                    color: '#ADADAD'
                                }}>{item.text}</p>
                            </div>
                        )
                    })
                }
                </Stack>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
            <Stack direction="vertical" gap={2} style={{
                margin: '20px 0px 40px',
                textAlign: 'start',
                color: '#FFF',
                fontFamily: 'Ubuntu',
                lineHeight: '15px',
                letterSpacing: '.2rem'
            }}>
                <p style={{fontSize: '15px', margin: '0px 0px 5px'}}>
                    Адгезия <span style={{color: '#FF0000'}}> - не более 1</span>
                </p>
                <p style={{fontSize: '15px', margin: '0px 0px 5px'}}>
                    Время высыхания до степени 3 при t (20,0±0,5)°С, мин , 
                    <span style={{color: '#FF0000'}}> - не более 30</span>
                </p>
                <p style={{fontSize: '15px', margin: '0px 0px 5px'}}>
                    Условная вязкость по В3-246 (сопло 4), сек 
                    <span style={{color: '#FF0000'}}> - не менее 80</span>
                </p>
            </Stack>
            <div style={{
                position: 'relative',
                width: '100%',
                margin: '0 auto',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '0px',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center'
                }}>
                    <button style={{
                        padding: '12px 56px',
                        border: 'none',
                        borderRadius: '10px',
                        
                        backgroundColor: '#E54E4E',
                        fontFamily: 'Ubuntu',
                        fontSize: '20px'
                    }} onClick={detailsHandler}>
                        КАТАЛОГ
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
function MainPageLarge({detailsHandler, catalogHandler}: MainPageProps): React.JSX.Element {
    return (
    <Container style={{marginTop: '150px',}}>
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
                    Российский производитель лакокрасочной продукции
                </h1>
                <button style={{
                    border: 'none', 
                    borderRadius: '10px', 
                    padding: '12px 56px',
                    backgroundColor: '#E54E4E',
                    fontFamily: '"Ubuntu"',
                    color: '#FFF'
                }} onClick={catalogHandler}>
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
                    letterSpacing: '.4rem',
                    margin: '0px 0px 40px 0px',
                    fontFamily: '"HeroBold"'
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
                    }}>
                        <div>
                            <p style={{
                                margin: '0px 0px 5px',
                                fontSize: '32px',
                                textAlign: 'start',
                                fontFamily: '"HeroBold"',
                                letterSpacing: '.2rem'
                            }}
                            >Адгезия</p>
                            <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                            <p style={{
                                fontSize: '16px',
                                textAlign: 'start',
                                fontFamily: '"Hero"'
                            }}>Не более 1</p>
                        </div>
                        <Stack direction="horizontal">
                        { 
                            [
                                {color: '#0F0E0E', text: '9005'},
                                {color: '#4a1a01', text: '8017'},
                                {color: '#08382b', text: '6005'},
                                {color: '#949494', text: '7004'},
                            ].map((item, index) => {
                                return (
                                    <div style={{
                                        padding: '0px 16px'
                                    }} key={index}>
                                        <div style={{
                                            backgroundColor: item.color,
                                            width: '46px',
                                            height: '46px',
                                            borderRadius: '100px',
                                            border: '1px solid #626262',
                                            margin: '0px 0px 10px'
                                        }}>
                                        
                                        </div>
                                        <p style={{
                                            fontSize: '14px',
                                            fontFamily: '"Hero"'
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
                            color: '#FFF',
                            fontFamily: '"Hero"'
                        }}>
                            Время высыхания до степени 3 при t (20,0±0,5)°С, мин
                        </p>
                        <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                        <p style={{
                            color: '#FFF',
                            fontSize: '16px',
                            textAlign: 'start',
                            fontFamily: '"Hero"'
                        }}>
                            Не более 30
                        </p>
                    </div>
                    <div style={{ margin: '0px 0px 30px' }}>
                        <p style={{
                            fontSize: '32px',
                            textAlign: 'start',
                            lineHeight: '40px',
                            color: '#FFF',
                            fontFamily: '"Hero"'
                        }}>
                            Условная вязкость по В3-246 (сопло 4), сек
                        </p>
                        <div style={{width: '100%', height: '1px', backgroundColor: '#FFF'}}></div>
                        <p style={{
                            color: '#FFF',
                            fontSize: '16px',
                            textAlign: 'start',
                            fontFamily: '"Hero"'
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
                            left: '0px',
                            fontFamily: '"Hero"'
                        }} onClick={detailsHandler}>
                            ПОДРОБНЕЕ
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default function MainPage() {
    const navigator = useNavigate();
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
    const detailsHandler = React.useCallback(() => navigator('/product/1'), [])
    const catalogHandler = React.useCallback(() => navigator('/catalog'), [])
    const biggerThan920 = useMediaPredicate("(min-width: 992px)");
    return (biggerThan920 
        ? <MainPageLarge catalogHandler={catalogHandler} detailsHandler={detailsHandler} />
        : <MainPageSmall catalogHandler={catalogHandler} detailsHandler={detailsHandler}/>
    );
}

