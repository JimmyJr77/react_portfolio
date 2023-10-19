import React from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import '../styles/ProfilePic.css';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="App container d-flex flex-column align-items-center vh-100">
            <div className="position-relative">
                <div className="pulse-blue mt-4"></div> 
                <div className="pulse-orange mt-4"></div>
                <div className="rounded-circle bg-cover my-4" style={{ 
                    width: '150px', 
                    height: '150px', 
                    backgroundImage: `url(${jimmyPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }}>
                </div>
            </div>
            <div className="mt-3 text-white">
            Contact me at jimmyjr.obrien@gmail.com or by phone at 619-838-5897.
            </div>
        </div>
    );
}

export default Contact;
