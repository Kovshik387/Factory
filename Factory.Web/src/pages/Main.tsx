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
function MainPageSmall({ detailsHandler, catalogHandler }: MainPageProps): React.JSX.Element {
    const smallestWidth = useMediaPredicate("(min-weight: 320px)");


    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            margin: '50px 0px 0px',
            height: '100%',

        }}>
            <>
                <div style={{
                    WebkitBackdropFilter: "blur(5px)",
                    backdropFilter: "blur(10px)",
                    background: 'linear - gradient(90deg, rgba(255, 255, 255, 1) 20 %, rgba(252, 252, 252, 1) 100 %)'
                }}>

                    <p style={{
                        fontSize: smallestWidth ? '24px' : "20px",
                        letterSpacing: '.3em',
                        textAlign: 'start',
                        lineHeight: '30px',
                        fontFamily: '"Hero"',
                        fontWeight: 'bold',
                        color: "#000000",
                        paddingLeft: "50px"
                        // margin: '0px 0px 32px 0px',
                    }}>
                        {"Российский производитель лакокрасочной продукции".toUpperCase()}
                    </p>
                    <button style={{
                        border: 'none',
                        borderRadius: '10px',
                        padding: '12px 40px',
                        marginBottom: "-50px",
                        backgroundColor: '#E54E4E',
                        fontFamily: '"Ubuntu"',
                        color: '#FFF',
                        fontSize: "20px"
                    }} onClick={catalogHandler}>
                        Оставить заявку
                    </button>
                </div>

            </>
            {/* </div> */}
            <div style={{ paddingTop: "50px" }}>

            </div>
            <div style={{
                backgroundColor: '#545454',
                width: '100%',
                padding: '14px 36px',
            }}>
                <h2 style={{
                    fontSize: '17px',
                    color: '#FFF',
                    letterSpacing: '.4em',
                    fontFamily: '"Hero"',
                    marginBottom: '20px'
                }}>
                    ГРУНТ-ЭМАЛЬ <span style={{ color: '#FF0000' }}>3</span> В 1
                </h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Stack direction="horizontal">
                        {[
                            { color: '#0F0E0E', text: '9005' },
                            { color: '#4a1a01', text: '8017' },
                            { color: '#08382b', text: '6005' },
                            { color: '#949494', text: '7004' },
                        ].map((item, index) => (
                            <div style={{ padding: '0px 16px' }} key={index}>
                                <div style={{
                                    backgroundColor: item.color,
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '100px',
                                    border: '1px solid #626262',
                                    margin: '0px 0px 10px'
                                }} />
                                <p style={{
                                    fontSize: '14px',
                                    fontFamily: 'Ubuntu',
                                    color: 'white'
                                }}>{item.text}</p>
                            </div>
                        ))}
                    </Stack>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
                <Stack direction="vertical" gap={2} style={{
                    margin: '20px 0px 40px',
                    textAlign: 'start',
                    color: '#FFF',
                    fontFamily: 'Ubuntu',
                    lineHeight: '15px',
                    letterSpacing: '.2rem'
                }}>
                    <p style={{ fontSize: '15px', margin: '0px 0px 5px' }}>
                        Адгезия <span style={{ color: '#FF0000' }}> - не более 1</span>
                    </p>
                    <p style={{ fontSize: '15px', margin: '0px 0px 5px' }}>
                        Время высыхания до степени 3 при t (20,0±0,5)°С, мин
                        <span style={{ color: '#FF0000' }}> - не более 30</span>
                    </p>
                    <p style={{ fontSize: '15px', margin: '0px 0px 5px' }}>
                        Условная вязкость по В3-246 (сопло 4), сек
                        <span style={{ color: '#FF0000' }}> - не менее 80</span>
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
                            <span style={{ color: "#FFF" }}>
                                КАТАЛОГ
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
function MainPageMedium({ detailsHandler, catalogHandler }: MainPageProps): React.JSX.Element {
    const biggerThan820 = useMediaPredicate("(max-height: 800px)");
    return (
        <Container style={{ marginTop: biggerThan820 ? '50px' : '150px', }}>
            <Row className='justify-content-md-center'>
                <Col md={5} style={{ display: 'flex', flexFlow: 'column', alignItems: 'start', margin: '0px 100px 0px 0px' }}>
                    <h1 style={{
                        fontWeight: '300',
                        fontSize: '36px',
                        letterSpacing: '.3em',
                        textAlign: 'start',
                        lineHeight: '52px',
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
                        color: '#FFF',
                        fontSize: "20px"
                    }} onClick={catalogHandler}>
                        Оставить заявку
                    </button>
                    <div style={{ textAlign: "left" }}>
                        <p
                            style={{
                                fontSize: "40px",
                                paddingTop: "25px",
                                color: 'white',
                            }}
                        >
                            Хотите узнать больше? Звоните!
                            <span style={{
                                color: '#FF0000',
                                fontFamily: '"Ubuntu"',
                                fontWeight: "bold",
                                display: "block"
                            }}>
                                &nbsp;+7 499 840 33 17
                            </span>
                        </p>
                    </div>
                </Col>
                <Col md={5} style={{
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                }}>
                    <h2 style={{
                        fontSize: '24px',
                        color: '#FFF',
                        letterSpacing: '.4rem',
                        margin: '0px 0px 32px 0px',
                        fontFamily: '"HeroBold"'
                    }}>
                        Грунт-эмаль <span style={{ color: '#FF0000' }}>3</span> в 1
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
                                    fontSize: '26px',
                                    textAlign: 'start',
                                    fontFamily: '"HeroBold"',
                                    letterSpacing: '.2rem'
                                }}>Адгезия</p>
                                <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
                                <p style={{
                                    fontSize: '16px',
                                    textAlign: 'start',
                                    fontFamily: '"Hero"'
                                }}>Не более 1</p>
                            </div>
                            <Stack direction="horizontal">
                                {[
                                    { color: '#0F0E0E', text: '9005' },
                                    { color: '#4a1a01', text: '8017' },
                                    { color: '#08382b', text: '6005' },
                                    { color: '#949494', text: '7004' },
                                ].map((item, index) => (
                                    <div style={{
                                        padding: '0px 8px'
                                    }} key={index}>
                                        <div style={{
                                            backgroundColor: item.color,
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '100px',
                                            border: '1px solid #626262',
                                            margin: '0px 0px 10px'
                                        }} />
                                        <p style={{
                                            fontSize: '14px',
                                            fontFamily: '"Hero"'
                                        }}>{item.text}</p>
                                    </div>
                                ))}
                            </Stack>
                        </div>
                        <div style={{ margin: '0px 0px 16px' }}>
                            <p style={{
                                fontSize: '26px',
                                textAlign: 'start',
                                lineHeight: '40px',
                                color: '#FFF',
                                fontFamily: '"Hero"'
                            }}>
                                Время высыхания до степени 3 при t (20,0±0,5)°С, мин
                            </p>
                            <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
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
                                fontSize: '26px',
                                textAlign: 'start',
                                lineHeight: '40px',
                                color: '#FFF',
                                fontFamily: '"Hero"'
                            }}>
                                Условная вязкость по В3-246 (сопло 4), сек
                            </p>
                            <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
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
                                fontFamily: '"Hero"',
                                backgroundColor: "#626262"
                            }} onClick={detailsHandler}>
                                <span style={{ color: "#FFF" }}>
                                    КАТАЛОГ
                                </span>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
function MainPageLarge({ detailsHandler, catalogHandler }: MainPageProps): React.JSX.Element {
    const biggerThan820 = useMediaPredicate("(max-height: 800px)");
    return (
        <Container style={{ marginTop: biggerThan820 ? '50px' : '150px', }}>
            <Row className='justify-content-md-center'>
                <Col md={5} style={{ display: 'flex', flexFlow: 'column', alignItems: 'start', margin: '0px 150px 0px 0px' }}>
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
                        color: '#FFF',
                        fontSize: "20px"
                    }} onClick={catalogHandler}>
                        Оставить заявку
                    </button>
                    <div style={{}}>
                        <p
                            style={{
                                fontSize: "40px",
                                color: 'white',
                                paddingTop: "25px",
                                fontFamily: '"Hero"',
                            }}
                        >
                            Хотите узнать больше? Звоните!
                            <span style={{
                                color: '#FF0000',
                                fontFamily: '"Ubuntu"',
                                fontWeight: "bold"
                            }}>
                                &nbsp;+7 499 840 33 17
                            </span>
                        </p>
                    </div>
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
                        Грунт-эмаль <span style={{ color: '#FF0000' }}>3</span> в 1
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
                                }}>Адгезия</p>
                                <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
                                <p style={{
                                    fontSize: '16px',
                                    textAlign: 'start',
                                    fontFamily: '"Hero"'
                                }}>Не более 1</p>
                            </div>
                            <Stack direction="horizontal">
                                {[
                                    { color: '#0F0E0E', text: '9005' },
                                    { color: '#4a1a01', text: '8017' },
                                    { color: '#08382b', text: '6005' },
                                    { color: '#949494', text: '7004' },
                                ].map((item, index) => (
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
                                        }} />
                                        <p style={{
                                            fontSize: '14px',
                                            fontFamily: '"Hero"'
                                        }}>{item.text}</p>
                                    </div>
                                ))}
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
                            <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
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
                            <div style={{ width: '100%', height: '1px', backgroundColor: '#FFF' }} />
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
                                fontFamily: '"Hero"',
                                backgroundColor: "#626262"
                            }} onClick={detailsHandler}>
                                <span style={{ color: "#FFF" }}>
                                    КАТАЛОГ
                                </span>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <Row className='justify-content-start'>
                <div style={{textAlign: "left"}}>
                    <p
                        style={{
                            fontSize: "40px",
                            paddingTop: "25px"
                        }}
                    >
                        Хотите узнать больше? Звоните!
                    </p>
                    <p style={{
                        fontSize: "40px",
                        color: "#FF0000",
                    }}>
                        +7 499 840 33 17
                    </p>
                </div>
            </Row> */}
        </Container >
    );
}
export default function MainPage() {
    const navigator = useNavigate();
    const [, setWindowSize] = React.useState<WindowSize>({
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
    }, []);

    const detailsHandler = React.useCallback(() => navigator('/catalog'), [navigator]);
    const catalogHandler = React.useCallback(() => navigator('/connect'), [navigator]);
    const bigResolution = useMediaPredicate("(min-width: 1400px)");
    const mediumResolution = useMediaPredicate("(min-width: 992px) and (max-width: 1400px)");
    const smallResolution = useMediaPredicate("(max-width: 992px)")

    return (
        bigResolution
            ? <MainPageLarge catalogHandler={catalogHandler} detailsHandler={detailsHandler} />
            : mediumResolution
                ? <MainPageMedium catalogHandler={catalogHandler} detailsHandler={detailsHandler} />
                : smallResolution ? <MainPageSmall catalogHandler={catalogHandler} detailsHandler={detailsHandler} />
                    : <div></div>
    );
}

