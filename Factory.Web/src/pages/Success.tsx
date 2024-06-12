import React from "react"
import { headerRef } from "../App"
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigator = useNavigate();
    React.useEffect(() => {
        headerRef.current?.setColor('#FFF');
        
        const timer = setTimeout(() => {
            navigator("/");
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [navigator]);
    return (<>
        <div style={navigationStyle}>
            <p style={linkStyle}>
                Спасибо за заявку!
            </p>
            <p style={linkStyle}>
                В скором времени мы с Вами свяжемся
            </p>
        </div>
    </>)
}

const navigationStyle: React.CSSProperties = {
    backgroundColor: 'rgba(24, 24, 24, 0.5)',
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
}
const linkStyle: React.CSSProperties = {
    fontSize: '34px',
    letterSpacing: '.2rem',
    fontFamily: '"Hero", sans-serif',
    color: "#FFFFFF"
}