import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
import { FooterContainer, Icon } from '../styles/FooterStyles';

function Footer() {
    return (
        <FooterContainer>
            <a href="https://github.com/jimmyjr77" target="_blank" rel="noopener noreferrer">
                <Icon className="fa fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/jimmyjrobrien/" target="_blank" rel="noopener noreferrer">
                <Icon className="fa fa-linkedin" />
            </a>
            <a href="https://twitter.com/trackdaddy" target="_blank" rel="noopener noreferrer">
                <Icon className="fa fa-twitter" />
            </a>
        </FooterContainer>
    );
}

export default Footer;

