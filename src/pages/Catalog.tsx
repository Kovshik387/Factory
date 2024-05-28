import React, { useState } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export default function Catalog() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [all,setAll] = useState<boolean>(true);
    const [priming,setPriming] = useState<boolean>(false);
    const [enamel,setEnamel] = useState<boolean>(false);
    const [varnishes,setVarnishes] = useState<boolean>(false);

    const products = [
        { id: 1, name: 'Грунт-эмаль 3 в 1', imageUrl: "/product.png" },
        { id: 2, name: 'Грунт белый полиуретановый', imageUrl: null },
        { id: 3, name: 'Грунт белый полиуретановый ...', imageUrl: null },
        { id: 4, name: 'Грунт прозрачный полиуретановый', imageUrl: null },
        { id: 5, name: 'Грунт черный полиуретановый', imageUrl: null },
        { id: 6, name: 'Грунт-порозаполнитель', imageUrl: null },
        { id: 7, name: 'Грунт-изолятор', imageUrl: null },
        { id: 8, name: 'Грунт-порозаполнитель', imageUrl: null },
        { id: 4, name: 'Грунт прозрачный полиуретановый', imageUrl: null },
        { id: 5, name: 'Грунт черный полиуретановый', imageUrl: null },
        { id: 6, name: 'Грунт-порозаполнитель', imageUrl: null },
        { id: 7, name: 'Грунт-изолятор', imageUrl: null },
        { id: 8, name: 'Грунт-порозаполнитель', imageUrl: null },
        { id: 4, name: 'Грунт прозрачный полиуретановый', imageUrl: null },
        { id: 5, name: 'Грунт черный полиуретановый', imageUrl: null },
        { id: 6, name: 'Грунт-порозаполнитель', imageUrl: null },
        { id: 7, name: 'Грунт-изолятор', imageUrl: null },
        { id: 8, name: 'Грунт-порозаполнитель', imageUrl: null },
    ];

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={catalogStyle}>
            <Container>
                <div style={catalogBodyStyle}>
                    <Stack direction='horizontal' style={{ marginBottom: "20px" }}>
                        <Col sm={2} style={{
                            alignSelf: 'baseline',
                            padding: '50px 0px 0px'
                        }}>
                            <div style={{
                                margin: '0px 0px 40px'
                            }}>
                                <SearchBar onSearch={setSearchQuery}></SearchBar>
                            </div>
                            <div style={categoriesStyle}>Категории</div>
                            <ul style={{ textAlign: "left", paddingLeft: "70px" }}>
                                <p style={{ margin: '0px 0px 5px' }}>Все</p>
                                <p style={{ margin: '0px 0px 5px' }}>Грунты</p>
                                <p style={{ margin: '0px 0px 5px' }}>Эмали</p>
                                <p style={{ margin: '0px 0px 5px' }}>Лаки</p>
                            </ul>
                        </Col>
                        <Col sm={10} style={categoryContainerStyle}>
                            <Row style={{ margin: '10px' }}>
                                {filteredProducts.map((item, index) => (
                                    <Col sm={2} md={4} lg={3} key={index}>
                                        <ProductCard product={item} ></ProductCard>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Stack>
                </div>
            </Container>
        </div >
    );
}

const categoryContainerStyle: React.CSSProperties = {
    overflowY: 'scroll',
    width: '80%',
    margin: '20px 0px',
    maxHeight: "700px",
    scrollbarColor: '#888 #00000000',
    scrollbarWidth: 'thin'
}

const catalogBodyStyle: React.CSSProperties = {
    marginTop: "30px",
    height: '80vh',
    maxWidth: "100%",
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    display: 'flex',
}
const catalogStyle: React.CSSProperties = {
    margin: '100px 0px',
    height: '94%',
    animation: 'fadeIn 1s'
}

const categoriesStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: '10px'
}