import React, { useState, useEffect } from "react";
import { headerRef } from "../App";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export interface userData {
    contact: string,
    FIO: string
};

export default function ConnectWithUs() {
    const [contact, setContact] = useState("");
    const [FIO, setFIO] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        //headerRef.current?.setColor('#FFF');
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData: userData = {
            contact: contact,
            FIO: FIO
        };

        try {
            const response = await fetch('http://localhost:3001/bid', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }),
                method: 'Post',
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                setMessage("Ваше сообщение отправлено успешно!");
                setError("");
                setContact("");
                setFIO("");
                navigate("/success");
            } else {
                setError("Произошла ошибка при отправке сообщения.");
                setMessage("");
            }
        } catch (error) {
            console.log(error)
            setError("Произошла ошибка при отправке сообщения.");
            setMessage("");
        }
    };

    return (
        <div style={containerStyle}>
            <Container className="d-flex justify-content-center align-items-center">
                <Form style={formStyle} onSubmit={handleSubmit}>
                    <p style={titleStyle}>Ваши контактные данные</p>
                    <Form.Group>
                        <Form.Control
                            required
                            style={inputStyle}
                            className="custom-input"
                            type="text"
                            placeholder="номер телефона или email"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            required
                            className="custom-input"
                            style={inputStyle}
                            type="text"
                            placeholder="ФИО"
                            value={FIO}
                            onChange={(e) => setFIO(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit" style={buttonStyle}>Оставить заявку</Button>
                    {message && <p style={{ color: 'green', marginTop: '20px' }}>{message}</p>}
                    {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
                </Form>
            </Container>
        </div>
    );
}

const containerStyle: React.CSSProperties = {
    backgroundColor: 'rgba(24, 24, 24, 0.3)',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    padding: '260px 0px',
    animation: 'fadeIn 1s'
};

const formStyle = {
    borderRadius: '15px',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    maxWidth: '400px',
};

const titleStyle = {
    fontSize: "20px",
    color: "black",
    marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
    borderBottom: "2px solid white",
    border: "none",
    outline: "none",
    textAlign: "center",
    fontSize: "16px",
    color: '#000000',
    backgroundColor: 'transparent',
    marginBottom: "20px",
};

const buttonStyle = {
    width: '100%',
    border: 'none',
    borderRadius: '30px',
    padding: '12px',
    backgroundColor: '#E54E4E',
    fontFamily: '"Ubuntu"',
    color: '#FFF',
    fontSize: "15px",
};
