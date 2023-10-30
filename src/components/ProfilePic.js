import React from 'react';
import jimmyPic from '../assets/images/jimmy_pic.jpg';
import { PulseOrange, PulseBlue } from '../styles/ProfilePicStyles';

function AboutMe() {
    return (
        <div className="App container d-flex flex-column align-items-center vh-100">
            <div className="position-relative">
                <PulseBlue className="mt-4" /> 
                <PulseOrange className="mt-4" />
                <div className="rounded-circle bg-cover my-4" style={{ 
                    width: '150px', 
                    height: '150px', 
                    backgroundImage: `url(${jimmyPic})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1
                }} />
            </div>
        </div>
    );
}

export default AboutMe;
