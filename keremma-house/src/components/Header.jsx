import React from 'react';
import '../assets/css/Header.css';
import menuLogo from '../assets/picto-bank/ke-logo.png';

function Header() {
    return (
        <>
            <div className='navbar'>
                <a className='logo-container' href='/'>
                    <img src={menuLogo} alt="Nom de l'image" />
                </a>
                <div className='nav-container'>
                    <a target='_blank' href='https://keremma.org/'>Keremma.org</a>
                    <a href='#'>Gallerie</a>
                    <a href='#'>La carte</a>
                </div>
            </div>
        </>
    )
}

export default Header;