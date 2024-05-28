import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IDatabaseRecord, findById } from "../services/Database";

export default function Product(): React.JSX.Element {
    const navigation = useParams();
    const [product, setProfuct] = useState<IDatabaseRecord>();
    
    React.useEffect(() => {
        const id = navigation['id']
        if (id == undefined) throw new Error('Params cannot recognize');
        const record = findById(Number.parseInt(id));

        if (record == null) throw new Error('Object not found')
        setProfuct(record);
    }, [])

    const productRender = (): React.JSX.Element => {
        return (
        
        )
    }

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