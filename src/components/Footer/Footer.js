import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <i className='fas fa-arrow-alt-circle-up' onClick={() => window.scroll({top: 0, behavior: 'smooth'})}></i>
        </footer>
    );

};

export default Footer;