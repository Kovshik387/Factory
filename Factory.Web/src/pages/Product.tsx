/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IDatabaseRecord, findById } from "../services/Database";
import { useMediaPredicate } from "react-media-hook";
import { ChevronDown, FileEarmarkTextFill, FiletypePdf } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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
    const isBiggerThan700 = useMediaPredicate("(min-height: 700px)");
    const isBiggerThan1400 = useMediaPredicate("(min-width: 1400px");
    const [descriptionIsOpen, setdeDcriptionIsOpen] = useState(false);
    const [galeryIsOpen, setGaleryIsOpen] = useState(false);
    const [passportIsOpen, setpassportIsOpen] = useState(false);
    const [documentationIsOpen, setDocumentationIsOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const displayedProperties = new Set();
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const toggleGaleryAccordion = () => {
        setGaleryIsOpen(!galeryIsOpen);
    }

    const toggleDescriptAccordion = () => {
        setdeDcriptionIsOpen(!descriptionIsOpen);
    };

    const togglePassportAccordion = () => {
        setpassportIsOpen(!passportIsOpen);
    };


    const openModal = (url: string) => {
        setCurrentImage(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage('');
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
                    maxWidth: "250px"
                }} >
                    <Row className="mb-2 align-items-center" style={{ maxHeight: !isBiggerThan700 && isBiggerThan1400 ? "" : "120px", overflowY: "auto" }}>
                        {splitColors.map((item) => (
                            <Col xs={4} sm={3} lg={3} key={item.name}>
                                <Stack direction="vertical">
                                    <div
                                        style={{
                                            backgroundColor: item.value,
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '100px',
                                            margin: '0px 0px 10px',
                                        }}
                                    ></div>
                                    <p style={{ textAlign: "left", paddingLeft: "3px" }}>{item.name}</p>
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
                <>
                    <Row>
                        <div>
                            <img
                                src={product!.image}
                                alt='...'
                                style={{
                                    width: isBiggerThan920 ? '190px' : '150px',
                                    alignSelf: 'center',
                                    marginBottom: isBiggerThan1400 ? '10px' : "20px",
                                    marginTop: isBiggerThan1400 ? "-30px" : "0px",
                                    borderRadius: "70px",
                                    border: "2px #999494 solid"
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    openModal(product!.image!);
                                }} />
                        </div>
                    </Row>
                    <Row>
                        <div style={{
                            // maxHeight: isBiggerThan920 ? "200px" : "",
                            maxHeight: isBiggerThan920 ? `${windowSize.height - 380}px` : "",
                            overflowY: "auto",
                            scrollbarColor: '#888 #00000000',
                            scrollbarWidth: 'thin',
                        }}>
                            {product?.price != null ? (
                                <div style={{ textAlign: "left" }}>
                                    <p style={priceStyle}>Розничная цена: <span style={addictionPriceStyle}>
                                        {product.price.retail}
                                    </span>
                                    </p>
                                    <p style={priceStyle}>Оптовая цена: <span style={addictionPriceStyle}>
                                        {product.price.wholesale}
                                    </span>
                                    </p>

                                    {product.addictionProducts.map((item) => {
                                        return <>
                                            <p style={priceStyle}>{item.name}</p>
                                            <p style={addictionStyle}>Розничная цена:  <span style={addictionPriceStyle}>
                                                {item.retail}
                                            </span>
                                            </p>
                                            <p style={addictionStyle}>Оптовая цена: <span style={addictionPriceStyle}>
                                                {item.wholesale}
                                            </span>
                                            </p>
                                        </>
                                    })}

                                </div>
                            )
                                :
                                (
                                    <></>
                                )
                            }
                        </div>
                    </Row>
                </>
                // <img
                //     src={product!.image}
                //     alt='...'
                //     style={{
                //         width: isBiggerThan920 ? '220px' : '150px',
                //         alignSelf: 'center', // Center align for smaller screens
                //         marginBottom: '20px', // Space between image and colors
                //         borderRadius: "70px",
                //         border: "2px black solid"
                //     }}
                // />

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
            {
                product?.name == "Грунт-эмаль 3 в 1" ? (
                    <strong style={{ paddingLeft: "10px" }}>Возможен заказ любого RAL по каталогу</strong>
                )
                    : (
                        <></>
                    )
            }
            <br />
        </>
    );

    const productRender = (): React.JSX.Element => {
        const paragStyle: React.CSSProperties = {
            margin: '0px',
            fontFamily: '"UbuntuBold"',
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
                            if (!displayedProperties.has(item.property)) {
                                for (const prop in product) {
                                    if (prop === item.property) {
                                        displayedProperties.add(item.property);
                                        return <p key={item.property} style={paragStyle}>{item.name} {(product as any)[prop]}</p>;
                                    }
                                }
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
                                        <span>
                                            <a style={{ ...paragStyle, fontSize: "14px", fontWeight: "bold", }} href={product.passport}>Методы испытаний и приемки</a>
                                        </span>
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
                                </div>                            </div>
                            {documentationIsOpen && <div style={styles.content}>
                                {
                                    product.documentation == null ?
                                        (
                                            <>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                {product.documentation.map((item, index) => {
                                                    return <>
                                                        <Row key={index}>
                                                            <Col xs="auto" style={{ textAlign: "left" }}>
                                                                <FiletypePdf width={24} height={24}></FiletypePdf>
                                                                <span>
                                                                    <a style={{ ...paragStyle, fontSize: "14px", fontWeight: "bold", }} href={item.url}>{item.name}</a>
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                })}
                                            </>
                                        )
                                }
                            </div>}
                        </div>
                        <br />

                        {product.subImage == null ? (
                            <>
                            </>

                        )
                            :
                            (
                                <>

                                    <div style={styles4.accordion}>
                                        <div style={styles4.header} onClick={toggleGaleryAccordion}>
                                            <p style={{ ...paragStyle, fontWeight: "bold", fontSize: "24px" }}>Галерея</p>
                                            <div style={{ ...styles4.icon, ...(galeryIsOpen ? styles4.iconOpen : {}) }}>
                                                <ChevronDown></ChevronDown>
                                            </div>
                                        </div>
                                        {galeryIsOpen && <div style={styles.content}>
                                            {
                                                product.subImage == null ?
                                                    (
                                                        <>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <Row xs={1} lg={2} mg={2}>
                                                                {product.subImage.map((item, index) => {
                                                                    return <>
                                                                        <a style={{ color: "black" }}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                openModal(item.url);
                                                                            }}>
                                                                            <Col key={index} style={{ width: "150px" }}>
                                                                                <span>
                                                                                    <img style={{
                                                                                        transform: "rotate(90deg)",
                                                                                        height: "150px",
                                                                                        fontSize: "14px",
                                                                                        fontWeight: "bold",
                                                                                        borderRadius: "10px",
                                                                                    }} src={item.url} alt={item.name}></img>
                                                                                </span>
                                                                                <p style={{ textAlign: "start" }}>
                                                                                    {item.name}
                                                                                </p>
                                                                            </Col >
                                                                        </a>
                                                                    </>
                                                                })}
                                                            </Row>
                                                        </>
                                                    )
                                            }
                                        </div>}
                                    </div>

                                </>
                            )
                        }

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
                        <Link
                            to='/catalog'
                            style={{
                                color: '#090C10',
                                fontSize: '20px',
                                alignSelf: 'end',
                                fontFamily: '"Ubuntu"',
                            }}
                        >
                            Назад
                        </Link>
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
                {modalOpen && (
                    <div style={modalOverlayStyle(isBiggerThan920)} onClick={closeModal}>
                        <div
                            style={modalContentStyle}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={currentImage}
                                alt="Modal"
                                style={imageStyle}
                            />
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );


}

const addictionStyle: React.CSSProperties = {
    fontSize: "12px",
    fontFamily: '"Ubuntu"',
};

const addictionPriceStyle: React.CSSProperties = {
    color: "#FF0000",
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: '"UbuntuBold"',
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

const styles4: { [key: string]: React.CSSProperties } = {
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

const modalContentStyle: React.CSSProperties = {
    position: 'relative',
};

const imageStyle: React.CSSProperties = {
    maxWidth: '90%',
    maxHeight: '90vh',
    borderRadius: '10px',
};

const priceStyle: React.CSSProperties = {
    fontFamily: '"UbuntuBold"',
    fontWeight: "bold",
    fontSize: "12px"
}

const modalOverlayStyle = (biggerThan920: boolean): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    paddingTop: biggerThan920 ? "0px" : "120px",
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
});