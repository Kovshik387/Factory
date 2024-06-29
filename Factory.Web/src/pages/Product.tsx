/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IDatabaseRecord, findById } from "../services/Database";
import { useMediaPredicate } from "react-media-hook";
import { ChevronDown, FileEarmarkTextFill, FiletypePdf } from "react-bootstrap-icons";

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
    const [descriptionIsOpen, setdeDcriptionIsOpen] = useState(false);
    const [passportIsOpen, setpassportIsOpen] = useState(false);
    const [documentationIsOpen, setDocumentationIsOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toggleDescriptAccordion = () => {
        setdeDcriptionIsOpen(!descriptionIsOpen);
    };

    const togglePassportAccordion = () => {
        setpassportIsOpen(!passportIsOpen);
    };


    const toggleDocumentationcAccordion = () => {
        setDocumentationIsOpen(!documentationIsOpen);
    };

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
    const colorsStack = () => {
        // function splitArrayByInterval(array: any[], size: number): any[][] {
        //     const result = [];
        //     for (let i = 0; i < array.length; i += size) {
        //         result.push(array.slice(i, i + size));
        //     }
        //     return result;
        // }
        // const splitColors = splitArrayByInterval(((product as any).color as any[]));
        const splitColors = (product as any).color as any[];

        return (
            <>
                <div style={{
                    maxWidth: "30vh"
                }} >
                    <Row className="mb-2 align-items-center">
                        {splitColors.map((item) => (
                            <Col xs={6} sm={3} key={item.name}>
                                <Stack direction="vertical">
                                    <div
                                        style={{
                                            backgroundColor: item.value,
                                            width: '46px',
                                            height: '46px',
                                            borderRadius: '100px',
                                            margin: '0px 0px 10px',
                                        }}
                                    ></div>
                                    <p style={{ textAlign: "left", paddingLeft: "5px" }}>{item.name}</p>
                                </Stack>
                            </Col>
                        ))}
                    </Row>
                </div >
            </>
        )

        // return splitColors.map((item, index) => {
        //     return (
        //         <Row key={index} className="mb-2 align-items-center">
        //             <Col sm={3}>
        //                 <Stack direction="vertical">
        //                     <div style={{
        //                         backgroundColor: item.value,
        //                         width: '46px',
        //                         height: '46px',
        //                         borderRadius: '100px',
        //                         margin: '0px 0px 10px',
        //                     }}>
        //                     </div>
        //                     <span style={{ textAlign: 'left' }}>{item.name}</span>
        //                 </Stack>
        //             </Col>
        //         </Row>

        // <Stack direction='horizontal' gap={1} style={{
        //     justifyContent: 'start',
        // }} key={index}>
        //     {/* {item.map((item, index) => {
        //         return (
        //             <div key={index} style={{
        //                 padding: isBiggerThan920 ? '0px 16px' : "0px 10px",
        //             }}>
        //                 <div style={{
        //                     backgroundColor: item.value,
        //                     width: '46px',
        //                     height: '46px',
        //                     borderRadius: '100px',
        //                     margin: '0px 0px 10px',
        //                 }}></div>
        //                 <p style={{ fontSize: '14px' }}> {item.name}
        //                 </p>
        //             </div>
        //         ); */}
        //     })}
        // </Stack>
        //     )
        // })
    }

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
                // <Stack
                //     direction='horizontal'
                //     gap={1}
                //     style={{
                //         justifyContent: 'center',
                //     }}
                // >
                //     {((product as any).color as any[]).map((item, index) => {
                //         return (
                //             <div key={index} style={{
                //                 padding: isBiggerThan920 ? '0px 16px' : "0px 10px",
                //             }}>
                //                 <div style={{
                //                     backgroundColor: item.value,
                //                     width: '46px',
                //                     height: '46px',
                //                     borderRadius: '100px',
                //                     margin: '0px 0px 10px',
                //                 }}></div>
                //                 <p style={{ fontSize: '14px'}}> {item.name}
                //                 </p>
                //             </div>
                //         );
                //     })}
                // </Stack>

                <div style={{ width: 'max-content' }}>
                    {colorsStack()}
                </div>

                //                 <div style={{
                //                     ...{
                //                         display: 'flex',
                //                         flexFlow: 'column nowrap',
                //                         alignItems: 'center',
                //                         width: '100%'
                //                     },
                //                     ...(isBiggerThan920 ? {
                //                         overflowY: 'auto',
                //                         scrollbarColor: '#888 #00000000',
                //                         scrollbarWidth: 'thin',
                //                         height: '200px',
                //                     } : {})
                //                 }}>

                //                     <div>
                //                         {colorsStack()}
                //                     </div>
                // {/* 
                //                     <div style={{ width: 'max-content' }}>
                //                         {colorsStack().map(item => item)}
                //                     </div> */}
                //                 </div>
            )}
            <strong>Возможен заказ любого RAL по каталогу</strong>
            <br />
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
            <Container style={{ maxHeight: `${windowSize.height - 100}px`, fontFamily: '"HeroBold"' }}>
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
                                if (prop === item.property)
                                    return <p key={item.property} style={paragStyle}>{item.name} {(product as any)[prop]}</p>;
                            }
                            return null;
                        })}
                        <p style={paragStyle}>Срок годности: {product.expirationDate}</p>
                        <br />

                        <div style={styles.accordion}>
                            <div style={styles.header} onClick={toggleDescriptAccordion}>
                                <p style={{ ...paragStyle, fontWeight: "bold", fontSize: "24px" }}>Описание</p>
                                <div style={{ ...styles.icon, ...(descriptionIsOpen ? styles.iconOpen : {}) }}>
                                    <ChevronDown></ChevronDown>
                                </div>
                            </div>
                            {descriptionIsOpen && <div style={styles.content}>
                                <p style={paragStyle}>{product.description}
                                    <span style={{ color: "#636363", cursor: "pointer" }} hidden={showDetails || ((product as any).properties == undefined) || (product as any).appointment == undefined} onClick={toggleDetails}>&nbsp;Подробнее...</span>
                                </p>
                                {showDetails && (
                                    <Row>
                                        <Col>

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
                                        </Col>
                                        <Col>
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
                                    </Row>
                                )}

                            </div>}
                        </div>
                        <br />
                        <div style={styles2.accordion}>
                            <div style={styles2.header} onClick={togglePassportAccordion}>
                                <p style={{ ...paragStyle, fontWeight: "bold", fontSize: "24px" }}>Тех.паспорт</p>
                                <div style={{ ...styles2.icon, ...(passportIsOpen ? styles2.iconOpen : {}) }}>
                                    <ChevronDown></ChevronDown>
                                </div>
                            </div>
                            {passportIsOpen && <div style={styles.content}>
                                <Row>
                                    <Col xs="auto">
                                        <FileEarmarkTextFill width={24} height={24}></FileEarmarkTextFill>
                                    </Col>
                                    <Col style={{ textAlign: "left" }}>
                                        <a style={{ ...paragStyle, fontSize: "13px", fontWeight: "bold", }} href={product.passport}>МЕТОДЫ ИСПЫТАНИЙ И ПРИЕМКИ</a>
                                    </Col>
                                </Row>
                            </div>}
                        </div>
                        <br />
                        <div style={styles3.accordion}>
                            <div style={styles3.header} onClick={toggleDocumentationcAccordion}>
                                <p style={{ ...paragStyle, fontWeight: "bold", fontSize: "24px" }}>Документация</p>
                                <div style={{ ...styles3.icon, ...(documentationIsOpen ? styles3.iconOpen : {}) }}>
                                    <ChevronDown></ChevronDown>
                                </div>
                            </div>
                            {documentationIsOpen && <div style={styles.content}>
                                {product.documentation.map((item, index) => {
                                    return <>
                                        <Row key={index}>
                                            <Col xs="auto">
                                                <FiletypePdf width={24} height={24}></FiletypePdf>
                                                <span>
                                                    <a style={{ ...paragStyle, fontSize: "14px", fontWeight: "bold", }} href={item.url}>{item.name}</a>
                                                </span>
                                            </Col>
                                            {/* <Col style={{ textAlign: "left" }}>
                                                
                                            </Col> */}
                                        </Row>
                                    </>
                                })}
                            </div>}
                        </div>


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
                        {
                            isBiggerThan920 ? (
                                renderImageAndColors()

                            ) : (
                                <></>
                            )
                        }
                    </Col>
                </Row >
            </Container >
        );
    };

    return (
        <div style={{ marginTop: isBiggerThan920 ? '10px' : "20px", maxHeight: `${windowSize.height - 100}px` }}>
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

const styles: { [key: string]: React.CSSProperties } = {
    accordion: {
    },
    header: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        transition: 'transform 0.5s',
    },
    iconOpen: {
        transform: 'rotate(180deg)',
    },
    content: {
        paddingTop: "10px"
    },
};

const styles2: { [key: string]: React.CSSProperties } = {
    accordion: {
    },
    header: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        transition: 'transform 0.5s',
    },
    iconOpen: {
        transform: 'rotate(180deg)',
    },
    content: {
        paddingTop: "10px"
    },
};

const styles3: { [key: string]: React.CSSProperties } = {
    accordion: {
    },
    header: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        transition: 'transform 0.5s',
    },
    iconOpen: {
        transform: 'rotate(180deg)',
    },
    content: {
        paddingTop: "10px"
    },
};