import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import './Footer.css';

import Menu from '../Menu';
import Subscibe from '../Subscribe';
import DonaLinkdin from '../DonaLinkdin';

const Footer = () => {
    let linkdin = {
        type: 'linkdin',
        url: 'https://www.linkedin.com/in/dona-inselberg-218b9'
    };

    return (
        <div className="footer">
            <div className="container">
                <div className="menu-links">
                    <strong>Info</strong>
                    <Menu direction={'column'}/>
                </div>
                <div className="subscribe">
                    <strong>Subscibe</strong>
                    <Subscibe/>
                </div>
                <div className="dona-linkdin">
                    <DonaLinkdin/>
                </div>
            </div>
            <div className="divider-line"></div>
            <div className="legal-local">
                <div className="legal-links">
                    <Link to="/privacy-policy">Privacy Policy</Link> | 
                    <Link to="/terms-of-use">Terms of Use</Link>
                </div>
                <div className="copyright">
                    © 2018 Dona Inselberg
                </div>
            </div>
        </div>
    );
}

export default Footer;
