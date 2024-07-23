import React from 'react';
import { useMediaPredicate } from 'react-media-hook';

export default function About() {
  const biggerThan920 = useMediaPredicate("(min-width: 900px)");

  const leftBlockStyle: React.CSSProperties = {
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    padding: biggerThan920 ? '120px' : "0px",
    borderRadius: biggerThan920 ? '10px' : "10px 10px 0px 0px",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    position: 'relative',
    maxHeight: "620px",
    height: !biggerThan920 ? "75%" : "75%",
    minHeight: "200px",
    width: biggerThan920 ? '45%' : '80%',
    margin: biggerThan920 ? '0 30px' : '0 auto 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightBlockStyle: React.CSSProperties = {
    backgroundImage: `url("aboutRight.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: biggerThan920 ? '10px' : "0px 0px 10px 10px",
    paddingRight: biggerThan920 ? "30px" : "10px",
    paddingLeft: biggerThan920 ? "40px" : "10px",
    width: biggerThan920 ? '35%' : '80%',
    height: biggerThan920 ? "65%" : "45%",
    margin: biggerThan920 ? '0 -5%' : '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = (biggerThan920: boolean): React.CSSProperties => ({
    display: 'flex',
    flexDirection: biggerThan920 ? 'row' : 'column',
    justifyContent: biggerThan920 ? 'center' : "center ",
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginLeft: biggerThan920 ? "-35px" : "0px",
  });

  const textRight: React.CSSProperties = {
    zIndex: 3,
    textAlign: biggerThan920 ? "right" : "center",
    fontSize: "20px",
    fontFamily: '"HeroLight"'
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
    margin: biggerThan920 ? '0px 0px 10px 0px' : "5px 0",
  };

  const paragRightStyle: React.CSSProperties = {
    fontFamily: '"Hero"',
    fontSize: biggerThan920 ? '18px' : "14px",
    margin: biggerThan920 ? '0px 0px 10px 0px' : "5px 0",
  };

  function View() {
    return <>
      <div style={containerStyle(biggerThan920)}>
        <div style={leftBlockStyle}>
          <div style={textLeft}>
            <h2 style={{ fontWeight: "bold", fontFamily: '"HeroBold"' }}>Почему выбирают нас?</h2>
            {
              biggerThan920 ? (
                <div>
                  <br />
                  <br />
                </div>
              ) : (
                <div></div>
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
            <p style={paragRightStyle}>-Доставка от 100 тыс. рублей бесплатно по Московской области</p>
            <p style={paragRightStyle}>-Тех поддержка 24/7</p>
            <p style={paragRightStyle}>-Выезд технолога/моляра на объект для демонстрации продукции</p>
            <p style={paragRightStyle}>-Собственныйе разработки</p>
            <p style={paragRightStyle}>-Полная ответственность за свою продукцию перед покупателями</p>
            <p style={paragRightStyle}>-Сертификаты и экспертные заключения на все товары</p>
          </div>
        </div>
      </div>
    </>
  }
  return (
    <>
      <View />
    </>
  );
}
