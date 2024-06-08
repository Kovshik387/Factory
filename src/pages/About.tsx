import React from 'react';
import { useMediaPredicate } from 'react-media-hook';

export default function About() {
  const biggerThan920 = useMediaPredicate("(min-width: 920px)");

  const leftBlockStyle: React.CSSProperties = {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    padding: biggerThan920 ? '120px' : "10px",
    borderRadius: biggerThan920 ? '10px' : "10px 10px 0px 0px",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    position: 'relative',
    height: !biggerThan920 ? "40%" : "",
    width: biggerThan920 ? '45%' : '60%',
    margin: biggerThan920 ? '0 1%' : '',
  };

  const rightBlockStyle: React.CSSProperties = {
    // backgroundImage: `url("aboutRight.png")`,
    backgroundColor: "red",
    // backgroundSize: biggerThan920 ? "100% 100%" : "",
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    padding: biggerThan920 ? "120px 0px 0px 0px" : "10px",
    // borderRadius: biggerThan920 ? '10px' : "0px 0px 10px 10px",
    paddingRight: biggerThan920 ? "30px" : "0px",
    width: biggerThan920 ? '30%' : '60%',
    height: biggerThan920 ? "70%" : "45%",
    margin: biggerThan920 ? '0 -5%' : '',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: biggerThan920 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100%',
    position: 'relative',
  };

  const textRight: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    textAlign: biggerThan920 ? "right" : "center",
    fontSize: "20px",
  };

  const textLeft: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    fontSize: "20px",
    textAlign: biggerThan920 ? "left" : "center",
  };

  const paragStyle: React.CSSProperties = {
    fontFamily: '"HeroBold"',
    fontSize: biggerThan920 ? '18px' : "14px",
    margin: biggerThan920 ? '0px 0px 10px' : "0px",
  };

  return (
    <div style={containerStyle}>
      <div style={leftBlockStyle}>
        <div style={textLeft}>
          <h2 style={{ fontWeight: "bold", fontFamily: '"HeroBold"',}}>Почему выбирают нас?</h2>
          {
            biggerThan920 ? (
              <div>
                <br />
                <br />
              </div>
            )
              :
              (
                <div>

                </div>
              )
          }
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
            <p style={paragStyle}>- Ответственность за результат</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
