import React from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';

function Contact() {
    return (
        <div className="App text-center">
            <div className="rounded-circle bg-cover" style={{ 
                width: '150px', 
                height: '150px', 
                backgroundImage: `url(${jimmyPic})` 
            }}>
            </div>
            <div className="mt-3 text-white">
            Contact me at jimmyjr.obrien@gmail.com or by phone at 619-838-5897.
            </div>
        </div>
    );
}

export default Contact;
