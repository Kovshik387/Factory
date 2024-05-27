import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  const leftBlockStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: '120px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    zIndex: 2,
    position: 'relative',
    width: '45%',
    marginLeft: '1%',
  };

  const rightBlockStyle: React.CSSProperties = {
    backgroundImage: `url("aboutRight.png")`,
    backgroundSize: "100% 100%",
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    paddingTop: "70px",
    borderRadius: '10px',
    paddingRight: "5px",
    width: '30%',
    height: "60%",
    marginLeft: "-10%"
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const textRight: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    textAlign: "right"
  };

  const textLeft: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    textAlign: "left"
  };

  return (
      <div style={containerStyle}>
          <div style={leftBlockStyle}>
            <div style={textLeft}>
              <h2>Почему выбирают нас?</h2>
              <br/>
              <br/>
              <p>Все просто.</p>
              <p>Ведь нам присущи те качества, которые для вас необходимы.</p>
              <p>
                Мы ценим доверие наших заказчиков и работаем с каждым индивидуально, исходя из принципа комплексного подхода к поставленным задачам и взаимного долгосрочного партнерства.
              </p>
            </div>
          </div>
          <div style={rightBlockStyle}>
            <div style={textRight}>
              <ul>
                <p>Профессионализм</p>
                <p>Собственные разработки</p>
                <p>Высокое качество</p>
                <p>Контроль продукции</p>
                <p>Конкурентоспособность</p>
                <p>Надежное партнерство</p>
                <p>Быстрая доставка </p>
                <p>(вы получите ваш заказ в согласованные сроки)</p>
                <p>Ответственность за результат</p>
              </ul>
            </div>
          </div>
      </div>
  );
};
