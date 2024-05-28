import React from 'react';

export default function About() {
  const leftBlockStyle: React.CSSProperties = {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    padding: '120px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    paddingTop: "120px",
    borderRadius: '10px',
    paddingRight: "30px",
    width: '30%',
    height: "70%",
    marginLeft: "-5%"
  };
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100%',
    position: 'relative',
  };

  const textRight: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    textAlign: "right",
    fontSize: "20px", 
  };

  const textLeft: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    fontSize: "20px",
    textAlign: "left"
  };
  const paragStyle: React.CSSProperties = {
    fontFamily: '"HeroBold"',
    fontSize: '18px',
    margin: '0px 0px 10px'
  }
  return (
      <div style={containerStyle}>
          <div style={leftBlockStyle}>
            <div style={textLeft}>
              <h2>Почему выбирают нас?</h2>
              <br/>
              <br/>
              <p style={paragStyle}>Все просто.</p>
              <p style={paragStyle}>Ведь нам присущи те качества, которые для вас необходимы.</p>
              <p style={paragStyle}>
                Мы ценим доверие наших заказчиков и работаем с каждым индивидуально, исходя из принципа комплексного подхода к поставленным задачам и взаимного долгосрочного партнерства.
              </p>
            </div>
          </div>
          <div style={rightBlockStyle}>
            <div style={textRight}>
              <ul>
                <p style={paragStyle}>- Профессионализм</p>
                <p style={paragStyle}>- Собственные разработки</p>
                <p style={paragStyle}>- Высокое качество</p>
                <p style={paragStyle}>- Контроль продукции</p>
                <p style={paragStyle}>- Конкурентоспособность</p>
                <p style={paragStyle}>- Надежное партнерство</p>
                <p style={paragStyle}>- Быстрая доставка (вы получите ваш </p> 
                <p style={paragStyle}>заказ в согласованные сроки)</p>
                <p style={paragStyle}>Ответственность за результат</p>
              </ul>
            </div>
          </div>
      </div>
  );
}
