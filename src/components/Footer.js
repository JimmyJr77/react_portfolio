import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
import '../styles/FooterStyles.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/jimmyjr77" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jimmyjrobrien/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/trackdaddy" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
            </a>
        </div>
    );
}

export default Footer;
