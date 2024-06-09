import React, { useState } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { Database } from '../services/Database';
import { useMediaPredicate } from "react-media-hook";

export default function Catalog() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectCategory, setSelectedCategory] = useState<string>("Все");
    const biggerThan920 = useMediaPredicate("(min-width: 920px)");

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    }

    const filteredProducts = Database.filter(product =>
        (selectCategory === "Все" || product.category === selectCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={catalogStyle(biggerThan920)}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div style={catalogBodyStyle(biggerThan920)}>
                            <Stack direction={biggerThan920 ? "horizontal" : "vertical"} style={{ marginBottom: "20px", height: "100%" }}>
                                <div className='searchAndCategoriesStyles'
                                    style={{
                                        alignSelf: 'baseline',
                                        padding: biggerThan920 ? "20px" : "20px 20px 0px 20px",
                                        width: '100%',
                                        maxWidth: '250px'
                                    }}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <SearchBar onSearch={setSearchQuery} />
                                    </div>
                                    <div style={categoriesStyle()}>Категории</div>
                                    <div style={getCategoriesListStyle(biggerThan920)}>
                                        <ul style={{ display: 'flex', flexDirection: biggerThan920 ? 'column' : 'row', flexWrap: 'wrap', paddingLeft: 0 }}>
                                            {['Все', 'Грунт', 'Эмаль', 'Лак'].map((category, index) => (
                                                <li key={index}
                                                    style={{
                                                        listStyleType: 'none',
                                                        margin: biggerThan920 ? '0 0 5px' : '0 10px 5px 0',
                                                        textDecoration: selectCategory === category ? 'underline' : 'none',
                                                        textUnderlineOffset: "5px",
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => handleCategoryClick(category)}>
                                                    {category}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ ...categoryContainerStyle, alignItems: "start", height: "100%", width: '100%' }}>
                                    <Row style={{ margin: '0', width: '100%', height: "100%" }}>
                                        {filteredProducts.map((item, index) => (
                                            <Col key={index} xs={6} sm={6} md={4} lg={4} className="mb-4">
                                                <ProductCard product={item} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Stack>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const getCategoriesListStyle = (biggerThan400: boolean): React.CSSProperties => ({
    textAlign: "left",
    paddingLeft: biggerThan400 ? "20px" : "0px",
});

const categoriesStyle = (): React.CSSProperties => ({
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: '10px',
    textAlign: "left"
})

const categoryContainerStyle: React.CSSProperties = {
    overflowY: 'auto',
    margin: '20px 0px',
    height: "calc(100vh - 160px)",
    maxWidth: "100%",
    scrollbarColor: '#888 #00000000',
    scrollbarWidth: 'thin',
    paddingRight: '5px'
}

const catalogBodyStyle = (biggerThan400: boolean): React.CSSProperties => ({
    // marginTop: "130px",
    height: biggerThan400 ? '80vh' : "70vh",
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: "100%",
    overflow: "hidden",
    padding: "20px",
})

const catalogStyle = (biggerThan920: boolean): React.CSSProperties => ({
    marginTop: '15px',
    animation: biggerThan920 ? 'fadeIn 1s' : ""
})
