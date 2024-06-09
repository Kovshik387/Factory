import React from 'react';
import { headerRef } from '../App';

export default function Navigation(): React.JSX.Element {
    React.useEffect(() => {
        headerRef.current?.setColor('#FFF')
    }, [])
    return (
    <div style={navigationStyle}>
        <div style={{marginBottom: '20px'}}>
            <a href={'/sertificat'} style={linkStyle}>Сертификаты</a>
        </div>
        <div style={{marginBottom: '20px'}}>
            <a href={'/catalog'} style={linkStyle}>Каталог</a>
        </div>
        <div style={{marginBottom: '20px'}}>
            <a href={'/?contact'} style={linkStyle}>Контакты</a>
        </div>
    </div>
    )
}

const navigationStyle: React.CSSProperties = {
    backgroundColor: 'rgba(24, 24, 24, 0.7)',
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
    fontSize: '24px',
    letterSpacing: '.2rem',
    fontFamily: '"Ubuntu", sans-serif'
}