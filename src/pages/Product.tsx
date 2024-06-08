/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IDatabaseRecord, findById } from "../services/Database";
import { useMediaPredicate } from "react-media-hook";

export type WindowSize = {
    width: number;
    height: number;
}

type productFieldinfo = { name: string, property: string };

const productFields: productFieldinfo[] = [
    { name: 'Основа материала:', property: 'baseMaterial' },
    { name: 'Внешний вид пленки:', property: 'skinView' },
    { name: 'Цвет:', property: 'colorName' },
    { name: 'Условная вязкость по В3-246 (сопло 4), сек, не менее:', property: 'viscosity' },
    { name: 'Адгезия, балл, не более:', property: 'adhesion' },
    { name: 'Массовая доля нелетучих веществ, %:', property: 'volatiles' },
    { name: 'Смола:', property: 'resin' },
    { name: 'Растворитель:', property: 'solvent' },
    { name: 'Пожароопасность:', property: 'fireHazard' },
    { name: 'Морозостойкость:', property: 'coldResist' },
    { name: 'Вязкость (ВЗ-246):', property: 'viscosity' },
    { name: 'Плотность:', property: 'density' },
    { name: 'Степень блеска %:', property: 'shine' },
];

export default function Product(): React.JSX.Element {
    const navigation = useParams();
    const [product, setProduct] = useState<IDatabaseRecord>();
    const isBiggerThan920 = useMediaPredicate("(min-width: 920px)");

    const [windowSize, setWindowSize] = React.useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        const id = navigation['id'];
        if (id == undefined) throw new Error('Params cannot recognize');
        const record = findById(Number.parseInt(id));

        if (record == null) throw new Error('Object not found');
        setProduct(record);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderImageAndColors = () => (
        <>
            {product!.image == null ? (
                <p
                    style={{
                        fontSize: '30px',
                        letterSpacing: '.2rem',
                        height: '200px',
                        justifyContent: 'center',
                        lineHeight: '200px',
                        fontFamily: '"Ubuntu", sans-serif',
                        fontWeight: 'lighter',
                    }}
                >
                    Нет фото
                </p>
            ) : (
                <img
                    src={product!.image}
                    alt='...'
                    style={{
                        width: isBiggerThan920 ? '220px' : '150px',
                        alignSelf: 'center', // Center align for smaller screens
                        marginBottom: '20px', // Space between image and colors
                    }}
                />
            )}
            {(product as any).color == undefined ? (
                <div></div>
            ) : (
                <Stack
                    direction='horizontal'
                    gap={1}
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    {((product as any).color as any[]).map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    padding: isBiggerThan920 ? '0px 16px' : "0px 10px",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: item.value,
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '100px',
                                        margin: '0px 0px 10px',
                                    }}
                                ></div>
                                <p
                                    style={{
                                        fontSize: '14px',
                                    }}
                                >
                                    {item.name}
                                </p>
                            </div>
                        );
                    })}
                </Stack>
            )}
        </>
    );

    const productRender = (): React.JSX.Element => {
        const paragStyle: React.CSSProperties = {
            margin: '0px',
            fontFamily: '"Ubuntu", sans-serif',
            textAlign: 'start',
            fontSize: '14px',
            color: '#000',
            fontWeight: '600',
        };

        return product == undefined ? (
            <div></div>
        ) : (
            <Container style={{ maxHeight: `${windowSize.height - 100}px` }}>
                <Row className='justify-content-center' style={{ height: `${windowSize.height - 200}px` }}>
                    <Col
                        md={8}
                        style={{
                            display: 'flex',
                            alignItems: 'start',
                            flexFlow: 'column',
                            overflowY: 'scroll',
                            scrollbarColor: '#888 #00000000',
                            scrollbarWidth: 'thin',
                            maxHeight: `${windowSize.height - 200}px`,
                        }}
                    >
                        {!isBiggerThan920 && renderImageAndColors()}
                        <p style={paragStyle}>Название: {product.name}</p>
                        <p style={paragStyle}>Категория: {product.category}</p>
                        {productFields.map(item => {
                            for (const prop in product) {
                                if (prop == item.property)
                                    return <p style={paragStyle}>{item.name} {(product as any)[prop]}</p>;
                            }
                            return null;
                        })}
                        <p style={paragStyle}>Срок годности: {product.expirationDate}</p>
                        <br />
                        <p style={paragStyle}>Описание: {product.description}</p>
                        {(product as any).properties == undefined ? (
                            <div></div>
                        ) : (
                            <div>
                                <br />
                                <p style={paragStyle}>Свойства покрытия:</p>
                                <ul style={{ margin: '0px' }}>
                                    {((product as any).properties as any[]).map((item, index) => {
                                        return (
                                            <li key={index} style={paragStyle}>
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                        {(product as any).appointment == undefined ? (
                            <div></div>
                        ) : (
                            <div>
                                <br />
                                <p style={paragStyle}>Назначение:</p>
                                <ul style={{ margin: '0px' }}>
                                    {((product as any).appointment as any[]).map((item, index) => {
                                        return (
                                            <li key={index} style={paragStyle}>
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </Col>
                    <Col
                        md={4}
                        style={{
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                            marginBottom: isBiggerThan920 ? '0' : '20px'
                        }}
                    >
                        <a
                            href='/catalog'
                            style={{
                                color: '#090C10',
                                fontSize: '20px',
                                alignSelf: 'end',
                                fontFamily: '"Ubuntu", sans-serif',
                            }}
                        >
                            Назад
                        </a>
                        {isBiggerThan920 && renderImageAndColors()}
                    </Col>
                </Row>
            </Container>
        );
    };

    return (
        <div style={{ marginTop: isBiggerThan920 ? '10px': "20px", maxHeight: `${windowSize.height - 100}px` }}>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={12}>
                        <div style={productStyle}>{productRender()}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const productStyle: React.CSSProperties = {
    height: '100%',
    maxWidth: '100%',
    borderRadius: '40px',
    padding: '30px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    animation: 'fadeIn 1s',
};
