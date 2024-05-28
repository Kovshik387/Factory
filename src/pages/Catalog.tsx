import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { Search } from 'react-bootstrap-icons';
import SearchBar from '../components/SearchBar';

export default function Catalog() {

    const products: Product[] = [
        { id: 1, name: 'Грунт-эмаль 3 в 1', imageUrl: "./public/product.png" },
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

    return (
        <div style={catalogStyle}>
            <Container>
                <div style={catalogBodyStyle}>
                    <Stack direction='horizontal'>
                        <Col sm={2}>
                            <SearchBar></SearchBar>
                            <div style={categoriesStyle}>Категории</div>
                            <ul style={{textAlign: "left", paddingLeft: "70px"}}>
                                <p>Все</p>
                                <p>Грунты</p>
                                <p>Эмали</p>
                                <p>Лаки</p>
                            </ul>
                        </Col>
                        <Col sm={10} style={categoryContainerStyle}>
                            <Row style={{margin: "5px"}}>
                                {products.map((item, index) => (
                                    <Col sm={2} md={4} lg={3}>
                                        <ProductCard product={item} key={index}></ProductCard>
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
    overflowY: 'auto',
    maxHeight: "700px",
}

const catalogBodyStyle: React.CSSProperties = {
    height: '100%',
    maxWidth: "100%",
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',

}
const catalogStyle: React.CSSProperties = {
    margin: '100px 0px',
    height: '94%'
}

const categoriesStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
}

const categoryItemStyle: React.CSSProperties = {
    margin: "0px 0px 0px 10px"
}
