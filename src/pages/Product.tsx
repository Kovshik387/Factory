import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Product(): React.JSX.Element {
    const navigation = useParams();
    const [productId, setProfuctId] = useState<number | null>(null);
    
    React.useEffect(() => {
        const id = navigation['id']
        if (id == undefined) throw new Error('Pizda');
        setProfuctId(Number.parseInt(id));
    }, [])
    return (
    <div style={{}}>
        <Container>
            <Row className='justify-content-center'>
                <Col md={10}>
                    <div style={productStyle}>
                        
                    </div>
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    display: 'flex',
}