/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IDatabaseRecord, findById } from "../services/Database";

export type WindowSize = {
    width: number;
    height: number
}
export default function Product(): React.JSX.Element {
    const navigation = useParams();
    const [product, setProfuct] = useState<IDatabaseRecord>();
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
            console.log(windowSize)
        }; 
        const id = navigation['id']
        if (id == undefined) throw new Error('Params cannot recognize');
        const record = findById(Number.parseInt(id));

        if (record == null) throw new Error('Object not found')
        setProfuct(record); 
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }; 
    }, [])

    const productRender = (): React.JSX.Element => {
        const paragStyle: React.CSSProperties = {
            margin: '0px',
            fontFamily: '"Ubuntu", sans-serif',
            textAlign: 'start',
            fontSize: '14px',
            color: '#000',
            fontWeight: '600'
        }
        return (
            product == undefined ? <div></div> : <Container style={{maxHeight: `${windowSize.height - 100}px`}}>
            <Row className='justify-content-center' style={{height: `${windowSize.height - 200}px`}}>
                <Col md={8} style={{
                    display: 'flex',
                    alignItems: 'start',
                    flexFlow: 'column',
                    overflowY: 'scroll',
                    scrollbarColor: '#888 #00000000',
                    scrollbarWidth: 'thin',
                    maxHeight: `${windowSize.height - 200}px`
                }}>
                    <p style={paragStyle}>Название: {product.name}</p>
                    <p style={paragStyle}>Категория: {product.category}</p>
                    { 
                        (product as any).baseMaterial == undefined ? <div></div> :
                        <p style={paragStyle}>Основа материала: {(product as any).baseMaterial}</p>
                    }
                    { 
                        (product as any).skinView == undefined ? <div></div> :
                        <p style={paragStyle}>Внешний вид пленки: {(product as any).skinView}</p>
                    }
                    { 
                        (product as any).colorName == undefined ? <div></div> :
                        <p style={paragStyle}>Цвет: {(product as any).colorName}</p>
                    }
                    { 
                        (product as any).colorName == undefined ? <div></div> :
                        <p style={paragStyle}>Цвет: {(product as any).colorName}</p>
                    }
                    { 
                        (product as any).viscosity == undefined ? <div></div> :
                        <p style={paragStyle}>Условная вязкость по В3-246 (сопло 4), сек, не менее: {(product as any).viscosity}</p>
                    }
                    { 
                        (product as any).adhesion == undefined ? <div></div> :
                        <p style={paragStyle}>Адгезия, балл, не более: {(product as any).adhesion}</p>
                    }
                    { 
                        (product as any).volatiles == undefined ? <div></div> :
                        <p style={paragStyle}>Массовая доля нелетучих веществ, %: {(product as any).volatiles}</p>
                    }
                    { 
                        (product as any).resin == undefined ? <div></div> :
                        <p style={paragStyle}>Смола: {(product as any).resin}</p>
                    }
                    { 
                        (product as any).solvent == undefined ? <div></div> :
                        <p style={paragStyle}>Растворитель: {(product as any).solvent}</p>
                    }
                    { 
                        (product as any).fireHazard == undefined ? <div></div> :
                        <p style={paragStyle}>Пожароопасность: {(product as any).fireHazard}</p>
                    }
                    { 
                        (product as any).coldResist == undefined ? <div></div> :
                        <p style={paragStyle}>Морозостойкость: {(product as any).coldResist}</p>
                    }
                    { 
                        (product as any).viscosity == undefined ? <div></div> :
                        <p style={paragStyle}>Вязкость (ВЗ-246): {(product as any).viscosity}</p>
                    }
                    { 
                        (product as any).density == undefined ? <div></div> :
                        <p style={paragStyle}>Плотность: {(product as any).density}</p>
                    }
                    { 
                        (product as any).shine == undefined ? <div></div> :
                        <p style={paragStyle}>Степень блеска %: {(product as any).shine}</p>
                    }
                    <p style={paragStyle}>Срок годности: {product.expirationDate}</p>
                    <br/>
                    <p style={paragStyle}>Описание: {product.description}</p>
                    {
                        (product as any).properties == undefined ? <div></div> :
                        <div>
                            <br/>
                            <p style={paragStyle}>Свойства покрытия:</p>
                            <ul style={{margin: '0px'}}>
                            {
                                ((product as any).properties as any[]).map((item, index) => {
                                    return (<li key={index} style={paragStyle}>{item}</li>)
                                })
                            }
                            </ul>
                        </div>
                    }
                    {
                        (product as any).appointment == undefined ? <div></div> :
                        <div>
                            <br/>
                            <p style={paragStyle}>Назначение:</p>
                            <ul style={{margin: '0px'}}>
                            {
                                ((product as any).appointment as any[]).map((item, index) => {
                                    return (<li key={index} style={paragStyle}>{item}</li>)
                                })
                            }
                            </ul>
                        </div>
                    }
                </Col>
                <Col md={4} style={{
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center'
                }}>
                    <a href='/catalog' style={{
                        color: '#090C10',
                        fontSize: '20px',
                        alignSelf: 'end',
                        fontFamily: '"Ubuntu", sans-serif',
                    }}>Назад</a>
                    {
                        product!.image == null ? 
                        <p style={{
                            fontSize: '30px',
                            letterSpacing: '.2rem',
                            height: '200px',
                            justifyContent: 'center',
                            lineHeight: '200px',
                            fontFamily: '"Ubuntu", sans-serif',
                            fontWeight: 'lighter'
                        }}>Нет фото</p> :
                        <img src={product!.image} alt='...' style={{
                            width: '220px'
                        }} />
                    }
                    {
                        (product as any).color == undefined ? <div></div> :
                        <Stack direction="horizontal" gap={1} style={{
                            justifyContent: 'center'
                        }}>
                        {
                            ((product as any).color as any[]).map((item, index) => {
                                return (
                                    <div key={index} style={{
                                        padding: '0px 16px'
                                    }}>
                                        <div style={{
                                            backgroundColor: item.value,
                                            width: '46px',
                                            height: '46px',
                                            borderRadius: '100px',
                                            margin: '0px 0px 10px'
                                        }}>
                                        
                                        </div>
                                        <p style={{
                                            fontSize: '14px'
                                        }}>{item.name}</p>
                                    </div>
                                )
                            })
                        }
                        </Stack>
                    }
                
                </Col>
            </Row>
        </Container>
        )
    }
    return (
    <div style={{marginTop: '100px', maxHeight: `${windowSize.height - 100}px`}}>
        <Container>
            <Row className='justify-content-center'>
                <Col md={12}>
                    <div style={productStyle}>{productRender()}</div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
const productStyle: React.CSSProperties = {
    height: '100%',
    maxWidth: "100%",
    borderRadius: '40px',
    padding: '30px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    animation: 'fadeIn 1s'
}