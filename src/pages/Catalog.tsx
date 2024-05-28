import React, { useState } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { Database } from '../services/Database';

export default function Catalog() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectCategory, setSelectedCategory] = useState<string>("Все");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    }

    const filteredProducts = Database.filter(product =>
        (selectCategory == "Все" || product.category === selectCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={catalogStyle}>
            <Container>
                <Row>
                    <Col md={12}>
                    <div style={catalogBodyStyle}>
                        <Stack direction='horizontal' style={{ marginBottom: "20px" }}>
                            <div style={{
                                alignSelf: 'baseline',
                                padding: '50px 0px 0px'
                            }}>
                                <div style={{
                                    margin: '0px 0px 40px'
                                }}>
                                    <SearchBar onSearch={setSearchQuery} />
                                </div>
                                <div style={categoriesStyle}>Категории</div>
                                <ul style={{ textAlign: "left", paddingLeft: "70px" }}>
                                    <p style={{ margin: '0px 0px 5px', textDecoration: selectCategory === 'Все' ? 'underline' : 'none', textUnderlineOffset: "5px" }} onClick={() => handleCategoryClick('Все')}>Все</p>
                                    <p style={{ margin: '0px 0px 5px', textDecoration: selectCategory === 'Грунт' ? 'underline' : 'none', textUnderlineOffset: "5px" }} onClick={() => handleCategoryClick('Грунт')}>Грунты</p>
                                    <p style={{ margin: '0px 0px 5px', textDecoration: selectCategory === 'Эмаль' ? 'underline' : 'none', textUnderlineOffset: "5px" }} onClick={() => handleCategoryClick('Эмаль')}>Эмали</p>
                                    <p style={{ margin: '0px 0px 5px', textDecoration: selectCategory === 'Лак' ? 'underline' : 'none', textUnderlineOffset: "5px" }} onClick={() => handleCategoryClick('Лак')}>Лаки</p>
                                </ul>
                            </div>
                            <Col sm={10} style={{ ...categoryContainerStyle, alignItems: "start", height: "100%" }}>
                                <Row style={{ margin: '10px' }}>
                                    {filteredProducts.map((item, index) => (
                                        <Col md={4} lg={3} key={index}>
                                            <ProductCard product={item} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Stack>
                    </div>
                    </Col>
                </Row>
            </Container >
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
    width: "100%",
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
}
const catalogStyle: React.CSSProperties = {
    margin: '100px 0px',
    // height: '94%',
    animation: 'fadeIn 1s'
}

const categoriesStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: '10px'
}